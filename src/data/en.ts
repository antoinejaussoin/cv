import retrospectedImage from "../images/projects/retrospected-new.png";
import vrPlayerImage2x from "../images/projects/vr-player-2x.jpg";
import portraitImage1x from "../images/portrait2026.jpeg";
import type { Cv } from "../types";

const lr = "  ";

const myCv: Cv = {
  name: "Antoine Jaussoin",
  bio: "43 years old, married, dual French-British citizen",
  title: "Senior Full-Stack Engineer",
  subtitle: "React - TypeScript / JavaScript - Node.js - .NET",
  email: "work@jaussoin.com",
  phone: "+44 77 22 55 77 39",
  website: "http://www.jaussoin.com",
  address1: "17 Jedburgh Street",
  address2: "London SW11 5QA",

  portrait: [
    {
      src: portraitImage1x,
      width: 969,
      height: 1085,
    },
  ],

  profile: `I'm a **Senior Full-Stack Engineer** with extensive experience in the **financial industry**.${lr}
I'm currently a **Lead Engineer** at **Balyasny Asset Management**, a global multi-strategy hedge fund, where I lead the Risk UI team. The team is responsible for several UI platforms, including **Risk Hub**, the firm's flagship risk management platform.${lr}
Previously, I was **UI Tech Lead** at **Wayve**, an autonomous driving company, where I led the UI team responsible for the company's interfaces, from the in-car tablet experience to drive analysis tools.${lr}
I'm also the author of several **open-source projects**, including [Retrospected](https://www.retrospected.com), an Agile retrospective platform.`,

  work: [
    {
      title: "Software Developer",
      company: "Intuition Informatique",
      location: "Évreux (France)",
      type: "Internship",
      dates: {
        from: "2003-11-01",
        to: "2004-12-01",
      },
      techs: ["C#", "MySQL"],
      website: "http://www.intuition-informatique.com",
      description: `Part-time role at the company, 14 hours per week alongside my studies, working as a software developer, web designer, and system administrator.${lr}
My main responsibility was to build contract management software in C# for the company's assistance business.${lr}
The application integrates with the company's ERP system and is used daily by five technicians to manage thousands of contracts.${lr}`,
      shortDescription:
        "Built a C# contract management application integrated with the company's ERP and used daily by operations staff.",
    },
    {
      title: "Full-Stack Developer",
      company: "Everydev",
      location: "Évreux (France)",
      type: "Associate & Co-founder",
      dates: {
        from: "2004-12-01",
        to: "2008-07-01",
      },
      techs: ["C#", "WinForm", "ASP.NET", "MySQL"],
      website: "http://www.everydev.fr",
      description: `Co-founded a computer services company in December 2004.${lr}
Held a 49% ownership stake and led the technical work:${lr}
- Developed online and offline backup software in C# (FaciloSave)
- Implemented Windows Services, Remoting for service communication, encryption for data protection, and compression for efficient storage
- Localised the software in French and English
- Designed a proprietary client-server protocol, based on .NET sockets, streams, and serialisation, to support online backups
- Built the company website in ASP.NET with a C# code-behind
- Implemented a database access layer with NHibernate between the business layer and the database

Managed a trainee during the summer of 2005.`,
      shortDescription:
        "Co-founded a software services company and built backup products, web systems, and client-server infrastructure in .NET.",
    },
    {
      title: ".NET Developer",
      company: "British Telecom PLC",
      location: "London",
      type: "Full-Time",
      dates: {
        from: "2006-09-01",
        to: "2007-01-01",
      },
      techs: ["ASP.NET", "C#", "VB.NET", "DotNetNuke"],
      website: "http://www.bt.com",
      description: `Developed the http://sdk.bt.com portal in ASP.NET using DotNetNuke, including deployment, testing, and a sample application built with the new BT SDK.${lr}
DotNetNuke was written in VB.NET, but all additional modules were developed in C#.${lr}
We followed an Agile (Scrum) process with three-month cycles and two-week iterations.${lr}
We also used continuous integration with CruiseControl.NET.`,
      shortDescription:
        "Delivered the BT developer portal in ASP.NET and DotNetNuke within an Agile, CI-driven engineering team.",
    },
    {
      title: "Full-Stack Developer, Architect",
      company: "BNP Paribas - FundQuest UK",
      location: "London",
      type: "Full-Time",
      dates: {
        from: "2007-01-01",
        to: "2009-11-01",
      },
      techs: ["ASP.NET", "C#", "NHibernate", "MySQL"],
      website: "http://www.invms.co.uk",
      description: `Designed, implemented, and maintained a quantitative analysis, document management, and trading web application.${lr}
The system was a complete architectural redesign of an existing intranet following an assessment of its limitations.${lr}
The application served three main purposes for three main user groups:${lr}
- **Quantitative analysis tool** for quants: performance reports, custom charts, fund management, peer groups, and statistics
- **Document management**: meeting and research notes, attachments, full-text search, and advanced search capabilities
- **Trading system**: management of all FundQuest UK trading, reports, portfolio valuations, and integrations with electronic trading systems such as EMX
Some of the areas I designed include:${lr}
- **Core architecture**: introduced NHibernate for the data access layer and advocated for source control with SVN and unit testing with NUnit
- **Performance**: optimised on-the-fly calculations using caching, high-performance stored procedures, and prefetching
- **Charting**: introduced Dundas Chart and implemented most chart-based pages with it
- **Web pages**: introduced master pages to replace the previous frame-based approach
- **Security**: designed a combination of techniques to make most pages available in a "read-only" mode
- **Documents**: enabled documents to be linked to any entity (funds, users, universes, etc.) and indexed their contents`,
      shortDescription:
        "Re-architected and built a quantitative analysis, document management, and trading platform for FundQuest UK.",
    },
    {
      title: "Front Office Developer, Derivatives",
      company: "Credit Suisse",
      location: "London",
      type: "Full-Time, AVP",
      dates: {
        from: "2009-11-01",
        to: "2010-03-01",
      },
      techs: ["ASP.NET", "C#", "SQL Server"],
      website: "http://www.credit-suisse.com",
      description: `Designed, maintained, and improved a derivatives trading platform used internally and externally by Credit Suisse clients.${lr}
The front end was built in ASP.NET, with a back end in C#.`,
      shortDescription:
        "Improved an internal and client-facing derivatives trading platform built with ASP.NET and C#.",
    },
    {
      title: "Silverlight / C# Developer",
      company: "Royal Bank of Scotland",
      location: "London",
      type: "Contractor",
      dates: {
        from: "2010-03-01",
        to: "2010-12-01",
      },
      techs: [
        "Silverlight",
        "C#",
        "NHibernate",
        "WCF",
        "Autofac",
        "SQL Server",
      ],
      website: "http://www.rbs.co.uk",
      description: `Designed and implemented a global technology platform that enabled the bank to browse content stored in legal and credit documentation.${lr}
The Silverlight-based application was used globally to manage contracts across RBS and its subsidiaries and to run netting calculations.${lr}
- The client was built in **Silverlight**
- The server was built in **C# 4**
- Client-server communication used **WCF** with binary serialisation
- The data access layer used **NHibernate** with attribute-based mapping
- Database schema changes were managed with **Migrator.NET**
- Entity-to-DTO mapping was implemented with **AutoMapper**
- **Autofac** provided dependency injection
- The UI used **Infragistics** for the ribbon and other controls

Aspect-oriented programming (**AOP**) was also used to manage NHibernate sessions and transactions through PostSharp.

The development environment relied on a stack of well-known open-source tools:${lr}
- **CruiseControl.NET** and **NAnt** for continuous integration
- **NUnit** for unit testing
- **log4net** for logging
- **Rhino Mocks** for test doubles

The project followed an **Agile** methodology throughout its lifetime, with a 10-minute stand-up every morning, regular retrospectives, enforced **Test-Driven Development** (TDD), and code reviews before each commit.${lr}
I also scored in the 100th percentile worldwide on the Brainbench test while applying for this contract.`,
      shortDescription:
        "Built a global Silverlight and C# documentation platform used for contract management and netting calculations across RBS.",
    },
    {
      title: "ASP.NET MVC Front-End Developer",
      company: "Royal Bank of Scotland",
      location: "London",
      type: "Contractor",
      dates: {
        from: "2011-01-01",
        to: "2011-03-01",
      },
      techs: ["C#", "NHibernate", "MVC 3", "ExtJS", "AutoFac", "SQL Server"],
      website: "http://www.rbs.co.uk",
      description: `Designed and implemented a human resources system intended to replace multiple existing systems across RBS and consolidate their data.${lr}
The front end was built with **ASP.NET MVC 3** using the **Razor** view engine and **ExtJS**.${lr}
The back end used C# 4 with **NHibernate** as the ORM, using Fluent NHibernate for mapping.${lr}
The server side was built on my open-source project [FTA](http://fta.codeplex.com), which provided the foundation for the data access layer.${lr}
The dependency injection framework used on the project was **Autofac**.`,
  shortDescription:
    "Built a new ASP.NET MVC and ExtJS HR platform to consolidate several RBS systems into one workflow.",
    },
    {
      title: "ASP.NET MVC Front-End Developer",
      company: "Bank of America Merrill Lynch",
      location: "London",
      type: "Contractor",
      dates: {
        from: "2011-04-01",
        to: "2012-06-01",
      },
      techs: [
        "C#",
        "NHibernate",
        "ASP.NET MVC",
        "ExtJS",
        "jQuery",
        "Moq",
        "SQL Server",
      ],
      website: "http://www.ml.com",
      description: `Maintained a risk application built in **C#** and **ASP.NET MVC**, using **NHibernate** as its object-relational mapping (ORM) framework.${lr}
The application integrated with **MSCI RiskMetrics**, a risk analysis web service, and was responsible for loading and reconciling position files from custodians, fund managers, and other sources.${lr}
More than 5,000 unit tests were written for the application using frameworks such as **NUnit**, **Moq**, **SpecFlow**, and **Selenium**.${lr}
The web application was originally written in classic ASP.NET and was later partially migrated to MVC 3 with **Razor** and **ExtJS** (Ext.NET).${lr}`,
  shortDescription:
    "Maintained a C# and ASP.NET MVC risk platform integrated with MSCI RiskMetrics and backed by a large automated test suite.",
    },
    {
      title: "Front Office / Front-End React Engineer",
      company: "Royal Bank of Scotland",
      location: "London",
      type: "Contractor / Permanent",
      dates: {
        from: "2012-07-01",
        to: "2017-03-01",
      },
      techs: ["React", "Redux", "AngularJS", "Node.js"],
      website: "https://www.agilemarkets.com",
      description: `Front-end developer on RBS's flagship platform, **Agile Markets**.${lr}
Implemented several modules, ranging from **FX options tickets** (Peg, TWAP, OCO, IDO, etc.) to analysis tools.${lr}
These modules were built with **React**, **AngularJS**, or plain JavaScript with **D3**, depending on the requirements.${lr}
They connected to back-end services through REST endpoints and WebSockets (**Caplin**) and were tested with Mocha or Karma against a Node.js server.${lr}
The projects were built with **Grunt**, including custom tasks, and were highly modularised, using **Stash** and **Git** for source control.${lr}
**Webpack** was due to be introduced next, and I was set to lead the trial of the technology.`,
      shortDescription:
        "Built trading tickets and analysis tools on Agile Markets using React, AngularJS, JavaScript, and Node.js services.",
    },
    {
      title: "Senior Front-End React Engineer",
      company: "Two Sigma",
      location: "London",
      type: "Permanent",
      dates: {
        from: "2017-03-01",
        to: "2020-01-01",
      },
      techs: ["React", "TypeScript", "Styled Components", "Node.js"],
      website: "https://tsvenn.com/",
      description: `Front-end engineer on Two Sigma's **Venn** platform.${lr}
Venn is a platform that simplifies manager selection, asset allocation, and risk management through Two Sigma's factor analysis.${lr}
On the technical side, the front end was originally written in JavaScript (ES6), React, Redux, Redux-Saga, and SCSS with CSS Modules.${lr}
It was later rewritten in TypeScript, replacing Redux with React context and more local state. We also replaced SCSS and CSS Modules with Styled Components.${lr}
As part of the original team of two front-end developers, I played a decisive role both in the initial architecture and later in the rewrite of the application.${lr}
`,
      shortDescription:
        "Helped architect and later rewrite the Venn front end from JavaScript and Redux to TypeScript and modern React patterns.",
    },
    {
      title: "UI Tech Lead",
      company: "Wayve",
      location: "London",
      type: "Permanent",
      dates: {
        from: "2020-01-01",
        to: "2022-03-01",
      },
      techs: [
        "React",
        "TypeScript",
        "Styled Components",
        "Node",
        "Docker / K8s",
        "Python",
      ],
      website: "https://wayve.ai/",
      description: `As Wayve's **UI Tech Lead**, I led several **UI projects** across the company.${lr}
The most challenging was the **in-car UI**, which had to deliver a high-performance experience under safety-critical constraints. The UI received about 300 WebSocket frames per second while sustaining a steady 60 fps.${lr}`,
      shortDescription:
        "Led Wayve's UI team across vehicle and internal products, including a high-frequency in-car interface running at 60 fps.",
    },
    {
      title: "Lead Engineer",
      company: "Balyasny Asset Management",
      location: "London",
      type: "Permanent",
      dates: {
        from: "2022-03-01",
      },
      techs: [
        "React",
        "TypeScript",
        "Styled Components",
        "C#",
        "TanStack Query",
        "Docker / K8s",
      ],
      website: "https://www.bamfunds.com/",
      description: `As Balyasny Asset Management's **Lead Engineer**, I am responsible for the **Risk UI team**,
which owns a suite of applications used by the firm's risk managers and which are critical to the firm's risk management process.${lr}
One of these applications is **Risk Hub**, BAM's **flagship risk platform**.`,
      shortDescription:
        "Lead the Risk UI team responsible for Risk Hub and other applications used by BAM risk managers.",
    },
  ],
  education: [
    {
      school: "Passy-Buzenval",
      diploma: "BAC STI (French A-Level) - With Honours",
      location: "Rueil-Malmaison (France)",
      date: "2001-07-01",
      description: "Completed a BAC STI at Passy-Buzenval in Rueil-Malmaison.",
      shortDescription:
        "BAC STI completed with honours at Passy-Buzenval in Rueil-Malmaison.",
    },
    {
      school: "Lycée Richelieu - CPGE TSI",
      diploma: "Cours Préparatoires aux Grandes Ecoles",
      location: "Rueil-Malmaison (France)",
      date: "2003-06-01",
      description:
        "Math Sup / Math Spe prepares French students for the Grandes Ecoles, primarily in physics and mathematics.",
      shortDescription:
        "Two-year CPGE TSI preparatory programme focused on mathematics and physics.",
    },
    {
      school: "Supinfo Paris - Oxford Brookes University",
      diploma: "Master (MSc) in Computer Science",
      location: "Paris (2003-2005), Oxford (2005-2006)",
      date: "2006-06-01",
      description: `Supinfo is a three-year engineering school leading to a European Master's degree in Computer Science.${lr}
I spent the final year at Oxford Brookes University in the MSc Computer Science programme.`,
      shortDescription:
        "European Master's degree in Computer Science through Supinfo and Oxford Brookes University.",
    },
  ],
  skills: [
    {
      name: "React",
      level: "Expert",
      startYear: 2015,
      related: [
        "TanStack Query",
        "Socket.IO",
        "Vite",
        "Vitest",
        "Hooks",
        "Recoil",
      ],
      description: `I started working with React around version 0.12 and have kept using it through several eras of the ecosystem.${lr}
Over time, I worked with Flux, then Redux when it emerged, spent some time with MobX and Recoil, and currently enjoy working with **TanStack Query** a lot.${lr}
For UI component libraries, I used **Material UI** extensively across multiple projects.`,
      shortDescription:
        "Deep React experience from early releases to modern state, data, and component patterns.",
    },
    {
      name: "TypeScript",
      level: "Expert",
      startYear: 2017,
      related: ["ESLint", "Vite", "Vitest"],
      description: `I started using TypeScript around 2017, roughly in the TypeScript 2.4 era, and have used it across all my projects since then.${lr}
Comfortable with the parts that make TypeScript valuable in large codebases:${lr}
- generics, utility types, and strongly typed API design
- discriminated unions, narrowing, strict null checks, and custom type guards
- mapped types, conditional types, and inference-heavy helper types`,
      shortDescription:
        "Expert TypeScript for large codebases, typed APIs, and advanced type-system design.",
    },
    {
      name: "JavaScript",
      level: "Expert",
      startYear: 2015,
      related: ["React", "Lodash", "date-fns", "Vitest", "Prettier", "ESLint"],
      description: `Expert knowledge of modern JavaScript:${lr}
- ES modules, dynamic imports, import attributes, and top-level await
- destructuring, rest/spread, and template literals
- optional chaining, nullish coalescing, and logical assignment
- promises, async/await, and concurrency patterns
- immutable array helpers (toSorted, toReversed, toSpliced, with)`,
      shortDescription:
        "Expert in modern JavaScript language features, async workflows, modules, and production tooling.",
    },
    {
      name: "HTML & CSS",
      level: "Expert",
      startYear: 2011,
      related: ["CSS Modules", "SCSS/SASS", "Styled Components", "Emotion"],
      description: `Expert knowledge of modern CSS and semantic HTML:${lr}
- Grid, Flexbox, and modern intrinsic sizing
- container queries, container units, and responsive component design
- CSS Modules, Styled Components, and Emotion for large-scale component styling`,
      shortDescription:
        "Expert in semantic HTML and modern CSS for responsive, component-driven user interfaces.",
    },
    {
      name: "Node.js / Bun",
      level: "Advanced",
      startYear: 2015,
      related: ["Create-React-App", "Express"],
      description: `Node.js experience at RBS and on personal projects since 2015.${lr}
Experience ranges from Node 0.12 to Node 22, along with npm and Yarn.`,
      shortDescription:
        "Strong server-side JavaScript experience across Node eras, tooling, and front-end build workflows.",
    },
    {
      name: ".NET",
      level: "Expert",
      startYear: 2006,
      related: [
        "dotnet core 10.0",
        "C#",
        "ASP.NET MVC",
        "NHibernate",
        "NUnit",
        "MSpec",
        "SQL Server",
      ],
      description: `.NET was the technology stack I started my career with.`,
      shortDescription:
        "Deep .NET experience across C#, ASP.NET, ORMs, testing, and SQL Server in financial systems.",
    },
  ],
  projects: [
    {
      name: "Retrospected",
      description: `Agile retrospective board built with **React**, **Redux**, and **Socket.IO**.${lr}
Available on GitHub: [github.com/antoinejaussoin/retro-board](https://github.com/antoinejaussoin/retro-board).`,
      shortDescription: "Agile retrospective board (**React**, **Socket.IO**)",
      website: "https://www.retrospected.com",
      pictures: [
        {
          src: retrospectedImage,
          width: 430,
          height: 225,
        },
        {
          src: retrospectedImage,
          width: 860,
          height: 450,
        },
      ],
    },
    {
      name: "React VR Player",
      shortDescription:
        "360° virtual reality video player (**React**, **Oculus**)",
      description: "360° virtual reality video player component for Oculus Rift.",
      website: "https://antoinejaussoin.github.io",
      pictures: [
        {
          src: vrPlayerImage2x,
          width: 430,
          height: 225,
        },
        {
          src: vrPlayerImage2x,
          width: 860,
          height: 450,
        },
      ],
    },
  ],
};

export default myCv;
