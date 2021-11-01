import React from "react";

interface PillProps {
  text: string;
}

export default function Pill({ text }: PillProps) {
  return <span className="pill">{text}</span>;
}
