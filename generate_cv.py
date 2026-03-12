#!/usr/bin/env python3
"""Generate a modern, subtle DOCX CV for Antoine Jaussoin, openable in Apple Pages."""

from docx import Document
from docx.shared import Pt, Inches, Cm, RGBColor, Emu
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.section import WD_ORIENT
from docx.oxml.ns import qn, nsdecls
from docx.oxml import parse_xml
import re
import subprocess
import json
import os

# ── Colour palette (subtle blue-grey) ──────────────────────────────
ACCENT = RGBColor(0x2B, 0x6C, 0xB3)       # muted steel-blue
DARK   = RGBColor(0x1A, 0x1A, 0x2E)       # near-black for headings
BODY   = RGBColor(0x33, 0x33, 0x33)       # dark grey for body
LIGHT  = RGBColor(0x77, 0x77, 0x77)       # light grey for secondary text
RULE   = RGBColor(0xCC, 0xCC, 0xCC)       # line colour

FONT_BODY   = "Helvetica Neue"
FONT_HEAD   = "Helvetica Neue"

# ── Helpers ─────────────────────────────────────────────────────────
def set_cell_border(cell, **kwargs):
    """Set cell border. Usage: set_cell_border(cell, top={"sz": 4, "color": "CCCCCC"})"""
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()
    tcBorders = parse_xml(f'<w:tcBorders {nsdecls("w")}></w:tcBorders>')
    for edge, attrs in kwargs.items():
        element = parse_xml(
            f'<w:{edge} {nsdecls("w")} w:val="single" w:sz="{attrs["sz"]}" w:space="0" w:color="{attrs["color"]}"/>'
        )
        tcBorders.append(element)
    tcPr.append(tcBorders)


def add_thin_rule(doc):
    """Add a thin horizontal line."""
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(2)
    pPr = p._p.get_or_add_pPr()
    pBdr = parse_xml(
        f'<w:pBdr {nsdecls("w")}>'
        f'  <w:bottom w:val="single" w:sz="4" w:space="1" w:color="CCCCCC"/>'
        f'</w:pBdr>'
    )
    pPr.append(pBdr)


def add_section_heading(doc, text):
    """Add a styled section heading with a thin rule underneath."""
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(18)
    p.paragraph_format.space_after = Pt(4)
    run = p.add_run(text.upper())
    run.font.name = FONT_HEAD
    run.font.size = Pt(11)
    run.font.color.rgb = ACCENT
    run.font.bold = True
    run.font.all_caps = True
    # thin underline
    pPr = p._p.get_or_add_pPr()
    pBdr = parse_xml(
        f'<w:pBdr {nsdecls("w")}>'
        f'  <w:bottom w:val="single" w:sz="4" w:space="2" w:color="2B6CB3"/>'
        f'</w:pBdr>'
    )
    pPr.append(pBdr)


def strip_markdown(text):
    """Very basic markdown stripping: bold, links."""
    text = text.replace("  \n", "\n").strip()
    return text


def _render_line_runs(paragraph, line, base_size, base_color):
    """Render a single line of text with bold and link markdown into runs."""
    parts = re.split(r'(\*\*.*?\*\*|\[.*?\]\(.*?\))', line)
    for part in parts:
        if part.startswith("**") and part.endswith("**"):
            run = paragraph.add_run(part[2:-2])
            run.font.bold = True
            run.font.size = base_size
            run.font.color.rgb = base_color
            run.font.name = FONT_BODY
        elif re.match(r'\[.*?\]\(.*?\)', part):
            m = re.match(r'\[(.*?)\]\((.*?)\)', part)
            display = m.group(1)
            run = paragraph.add_run(display)
            run.font.size = base_size
            run.font.color.rgb = ACCENT
            run.font.name = FONT_BODY
            run.font.underline = True
        else:
            run = paragraph.add_run(part)
            run.font.size = base_size
            run.font.color.rgb = base_color
            run.font.name = FONT_BODY


def add_rich_text(paragraph, text, base_size=Pt(9.5), base_color=BODY):
    """Parse simple markdown (bold, links) into runs.

    Treats '  \\n' (two-space + newline, i.e. ${lr} in the TS source) as an
    intentional line break.  Plain newlines are collapsed into spaces.
    """
    BREAK = "\x00"
    text = text.replace("  \n", BREAK)
    # Collapse remaining newlines and excess whitespace
    text = text.replace("\n", " ")
    text = re.sub(r" {2,}", " ", text)
    text = text.strip()

    lines = text.split(BREAK)
    for i, line in enumerate(lines):
        line = line.strip()
        if not line:
            continue
        if i > 0:
            run = paragraph.add_run()
            run.add_break()
        _render_line_runs(paragraph, line, base_size, base_color)


def format_date(d):
    """Format YYYY-MM-DD to Mon YYYY."""
    from datetime import datetime
    try:
        dt = datetime.strptime(d, "%Y-%m-%d")
        return dt.strftime("%b %Y")
    except Exception:
        return d


def get_years_from_start_year(start_year):
    """Convert a skill start year into the number of full calendar years."""
    from datetime import datetime

    try:
        return max(datetime.now().year - int(start_year), 0)
    except Exception:
        return 0


# ── CV Data (parsed from src/data/en.ts) ────────────────────────────
def load_cv_data():
    """Parse src/data/en.ts using Node.js and return CV data as a dict."""
    script_dir = os.path.dirname(os.path.abspath(__file__))
    ts_path = os.path.join(script_dir, "src", "data", "en.ts")

    node_script = r"""
const fs = require('fs');
let content = fs.readFileSync(process.argv[1], 'utf8');
content = content.replace(/^import .*$/gm, '');
content = content.replace(/:\s*Cv\b/g, '');
content = content.replace(/export default myCv;?/, '');
content = content.replace(/\bconst\b/g, 'var');
var portraitImage1x = '';
var retrospectedImage = '';
var vrPlayerImage1x = '';
var vrPlayerImage2x = '';
eval(content);
console.log(JSON.stringify(myCv));
"""
    result = subprocess.run(
        ["node", "-e", node_script, ts_path],
        capture_output=True, text=True, cwd=script_dir,
    )
    if result.returncode != 0:
        raise RuntimeError(f"Failed to parse en.ts: {result.stderr}")
    return json.loads(result.stdout)


cv_data = load_cv_data()

# Work: TS stores oldest-first; reverse for the CV (newest first)
work = list(reversed(cv_data["work"]))
education = list(reversed(cv_data["education"]))
skills = cv_data["skills"]
profile = cv_data["profile"]


# ── Build Document ──────────────────────────────────────────────────
doc = Document()

# Page margins
for section in doc.sections:
    section.top_margin    = Cm(1.8)
    section.bottom_margin = Cm(1.5)
    section.left_margin   = Cm(2.0)
    section.right_margin  = Cm(2.0)

# Remove default spacing from Normal style
style = doc.styles["Normal"]
style.font.name  = FONT_BODY
style.font.size  = Pt(9.5)
style.font.color.rgb = BODY
style.paragraph_format.space_before = Pt(0)
style.paragraph_format.space_after  = Pt(2)
style.paragraph_format.line_spacing = Pt(13)

# ── Header ─────────────────────────────────────────────────────────────
p_name = doc.add_paragraph()
p_name.alignment = WD_ALIGN_PARAGRAPH.CENTER
p_name.paragraph_format.space_after = Pt(0)
run = p_name.add_run(cv_data["name"].upper())
run.font.name = FONT_HEAD
run.font.size = Pt(24)
run.font.color.rgb = DARK
run.font.bold = False

p_title = doc.add_paragraph()
p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
p_title.paragraph_format.space_before = Pt(2)
p_title.paragraph_format.space_after = Pt(0)
run = p_title.add_run(cv_data["title"])
run.font.name = FONT_HEAD
run.font.size = Pt(13)
run.font.color.rgb = ACCENT
run.font.bold = False

p_sub = doc.add_paragraph()
p_sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
p_sub.paragraph_format.space_before = Pt(2)
p_sub.paragraph_format.space_after = Pt(2)
run = p_sub.add_run(cv_data["subtitle"])
run.font.name = FONT_HEAD
run.font.size = Pt(9.5)
run.font.color.rgb = LIGHT

# Contact line
p_contact = doc.add_paragraph()
p_contact.alignment = WD_ALIGN_PARAGRAPH.CENTER
p_contact.paragraph_format.space_before = Pt(4)
p_contact.paragraph_format.space_after = Pt(4)
contact_items = [
    cv_data["email"],
    cv_data["phone"],
    cv_data["website"].replace("http://", "").replace("https://", ""),
    cv_data["address2"],
]
for i, item in enumerate(contact_items):
    run = p_contact.add_run(item)
    run.font.name = FONT_BODY
    run.font.size = Pt(8.5)
    run.font.color.rgb = BODY
    if i < len(contact_items) - 1:
        run = p_contact.add_run("   ·   ")
        run.font.name = FONT_BODY
        run.font.size = Pt(8.5)
        run.font.color.rgb = LIGHT

add_thin_rule(doc)

# ── Profile ────────────────────────────────────────────────────────────
add_section_heading(doc, "Profile")
p = doc.add_paragraph()
p.paragraph_format.space_after = Pt(6)
add_rich_text(p, profile, Pt(9.5), BODY)

# ── Experience ─────────────────────────────────────────────────────────
add_section_heading(doc, "Experience")

for job in work:
    dates = job.get("dates", {})
    date_from = format_date(dates.get("from", ""))
    date_to = format_date(dates["to"]) if dates.get("to") else "Present"
    date_str = f"{date_from} – {date_to}"

    # Job title + company line
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(8)
    p.paragraph_format.space_after = Pt(0)

    run = p.add_run(job["title"])
    run.font.name = FONT_HEAD
    run.font.size = Pt(10)
    run.font.color.rgb = DARK
    run.font.bold = True

    run = p.add_run(f"  —  {job['company']}")
    run.font.name = FONT_HEAD
    run.font.size = Pt(10)
    run.font.color.rgb = ACCENT
    run.font.bold = False

    # Meta line: location, type, dates
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(2)
    meta = f"{job['location']}  ·  {job['type']}  ·  {date_str}"
    run = p.add_run(meta)
    run.font.name = FONT_BODY
    run.font.size = Pt(8)
    run.font.color.rgb = LIGHT

    # Techs
    if job.get("techs"):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(2)
        run = p.add_run(" · ".join(job["techs"]))
        run.font.name = FONT_BODY
        run.font.size = Pt(8)
        run.font.color.rgb = ACCENT
        run.font.italic = True

    # Description
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(4)
    add_rich_text(p, job["description"], Pt(9), BODY)


# ── Education ──────────────────────────────────────────────────────────
add_section_heading(doc, "Education")

for edu in education:
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(6)
    p.paragraph_format.space_after = Pt(0)

    run = p.add_run(edu["diploma"])
    run.font.name = FONT_HEAD
    run.font.size = Pt(10)
    run.font.color.rgb = DARK
    run.font.bold = True

    run = p.add_run(f"  —  {edu['school']}")
    run.font.name = FONT_HEAD
    run.font.size = Pt(10)
    run.font.color.rgb = ACCENT

    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(2)
    meta = f"{edu['location']}  ·  {format_date(edu['date'])}"
    run = p.add_run(meta)
    run.font.name = FONT_BODY
    run.font.size = Pt(8)
    run.font.color.rgb = LIGHT

    if edu.get("description"):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(2)
        p.paragraph_format.space_after = Pt(4)
        add_rich_text(p, edu["description"], Pt(9), BODY)


# ── Skills ─────────────────────────────────────────────────────────────
add_section_heading(doc, "Skills")

# Create a table for skills: Name | Level | Experience | Related
table = doc.add_table(rows=1, cols=4)
table.alignment = WD_TABLE_ALIGNMENT.CENTER

# Set column widths
for cell in table.columns[0].cells:
    cell.width = Cm(3.0)
for cell in table.columns[1].cells:
    cell.width = Cm(2.5)
for cell in table.columns[2].cells:
    cell.width = Cm(2.5)
for cell in table.columns[3].cells:
    cell.width = Cm(9.0)

# Header row
hdr_cells = table.rows[0].cells
for i, text in enumerate(["Skill", "Level", "Experience", "Related Technologies"]):
    p = hdr_cells[i].paragraphs[0]
    p.alignment = WD_ALIGN_PARAGRAPH.LEFT
    run = p.add_run(text)
    run.font.name = FONT_HEAD
    run.font.size = Pt(8.5)
    run.font.color.rgb = ACCENT
    run.font.bold = True
    # Bottom border for header
    set_cell_border(hdr_cells[i], bottom={"sz": 4, "color": "2B6CB3"})

# Data rows
for skill in skills:
    row_cells = table.add_row().cells

    p = row_cells[0].paragraphs[0]
    run = p.add_run(skill["name"])
    run.font.name = FONT_BODY
    run.font.size = Pt(9)
    run.font.color.rgb = DARK
    run.font.bold = True

    p = row_cells[1].paragraphs[0]
    run = p.add_run(skill["level"])
    run.font.name = FONT_BODY
    run.font.size = Pt(9)
    run.font.color.rgb = BODY

    p = row_cells[2].paragraphs[0]
    run = p.add_run(f"{get_years_from_start_year(skill.get('startYear'))} years")
    run.font.name = FONT_BODY
    run.font.size = Pt(9)
    run.font.color.rgb = BODY

    p = row_cells[3].paragraphs[0]
    run = p.add_run(", ".join(skill["related"]))
    run.font.name = FONT_BODY
    run.font.size = Pt(8.5)
    run.font.color.rgb = LIGHT

    # Light bottom border
    for cell in row_cells:
        set_cell_border(cell, bottom={"sz": 2, "color": "E0E0E0"})

# Remove all other table borders
tbl = table._tbl
tblPr = tbl.tblPr if tbl.tblPr is not None else parse_xml(f'<w:tblPr {nsdecls("w")}/>') 
borders = parse_xml(
    f'<w:tblBorders {nsdecls("w")}>'
    f'  <w:top w:val="none" w:sz="0" w:space="0" w:color="auto"/>'
    f'  <w:left w:val="none" w:sz="0" w:space="0" w:color="auto"/>'
    f'  <w:bottom w:val="none" w:sz="0" w:space="0" w:color="auto"/>'
    f'  <w:right w:val="none" w:sz="0" w:space="0" w:color="auto"/>'
    f'  <w:insideH w:val="none" w:sz="0" w:space="0" w:color="auto"/>'
    f'  <w:insideV w:val="none" w:sz="0" w:space="0" w:color="auto"/>'
    f'</w:tblBorders>'
)
tblPr.append(borders)


# ── Save ───────────────────────────────────────────────────────────────
output_path = "Antoine_Jaussoin_CV.docx"
doc.save(output_path)
print(f"CV generated: {output_path}")
