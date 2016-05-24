const lr = '  ';

export default {
    name: 'Antoine Jaussoin',
    bio: '33 years old, married, French',
    title: 'Full Stack Developer',
    email: 'antoine@jaussoin.com',
    phone: '+44 77 22 55 77 39',
    website: 'http://www.jaussoin.com',
    address1: '53a Nansen Road',
    address2: 'London SW11 5NS',

    profile: `I'm an **experienced Full-Stack developer**, with strong **creative** skills and a strong experience within the finance industry.${lr}
My most significant mission allowed me to **design**, **implement** and **maintain** a Quantitative Analysis and Document Management tool that is now used by 50+ multi-management analysts around the world, in London, Boston, Paris, Germany and South Africa.${lr}
I also had the opportunity to **create my own software company**, Everydev, in France a few years ago.${lr}
On my free time, I’m developing a windows application shell for web apps ([http://www.weskapp.com](http://www.weskapp.com)).`,

    work: [
        {
            title: 'Software Developer',
            company: 'Intuition Informatique',
            location: 'Evreux (France)',
            type: 'Internship',
            dates: { from: '2003-11-01', to: '2004-12-01' },
            techs: ['C#', 'MySQL'],
            website: 'http://www.intuition-informatique.com',
            description: `Part-time job in this company, 14h per week along with my studies, as a programmer, website designer, and system administrator.${lr}
The main task was to build a management software to manage their assistance contracts in C#.${lr}
It integrates itself with an ERP software and is now used every day by 5 technicians, and handles thousands of contracts.`
        },
        {
            title: 'Full-Stack Developer',
            company: 'Everydev',
            location: 'Evreux (France)',
            type: 'Associate & Co-founder',
            dates: { from: '2004-12-01', to: '2008-07-01' },
            techs: ['C#', 'WinForm', 'ASP.NET', 'MySQL'],
            website: 'http://www.everydev.fr',
            description: `Foundation of a computer services company, in December 2004.${lr}
Associate at 49%.${lr}
Responsible for the technical parts:${lr}
- Development of an online and offline backup software in C# (FaciloSave)

This software include the following technologies:
- Windows Service, Remoting (to communicate with the service), Encryption : backup data are encrypted, Compression : backup data are compressed
- Localization : the software is available in French and in English
- Networking (Sockets, serialization): to communicate with the server in the case of online backup: a proprietary protocol has been designed (based upon .NET sockets implementation, streams and serialization) to transfer data from client to server.
- Development of the company website in ASP.NET ([www.everydev.fr](http://www.everydev.fr))
- Website developed in ASP.NET with code-behind in C#
- The link between the business layer and the database is done through a data base layer using NHibernate (an Object Relational Mapping framework based on Java’s Hibernate framework).

Managed a trainee during summer 2005. `
        },
        {
            title: '.NET Developer',
            company: 'British Telecom PLC',
            location: 'London',
            type: 'Full-Time',
            dates: { from: '2006-09-01', to: '2007-01-01' },
            techs: ['ASP.NET', 'C#', 'VB.NET', 'DotNetNuke'],
            website: 'http://www.bt.com',
            description: `Development of a portal (http://sdk.bt.com) in ASP.NET using DotNetNuke. Deployment, testing, and writing of a sample application using the new BT SDK.${lr}
DotNetNuke is written in VB.NET, but all additional modules that have been made were developed in C#.${lr}
The programming methodology used was Agile (Scrum), with 3 months cycles and 2 weeks iterations.${lr}
We also used the continuous integration procedure (CruiseControl.net).`
        },
        {
            title: 'Full-Stack Developer, Architect',
            company: 'BNP Paribas - FundQuest UK',
            location: 'London',
            type: 'Full-Time',
            dates: { from: '2007-01-01', to: '2009-11-01' },
            techs: ['ASP.NET', 'C#', 'NHibernate', 'MySQL'],
            website: 'http://www.invms.co.uk',
            description: `Design, implementation and maintenance of a Quantitative, Document Management and Trading Web Application.${lr}
The system is a complete architectural redesign of an existing intranet, after assessment of its flaws.${lr}
This Web Application serves 3 main purposes, and 3 categories of people:${lr}
- **Quantitative analysis tool** (for Quants) (Performance reports, custom graphs, funds management, peer groups, statistics)
- **Document management** (meeting and research notes, attachments, full text search on content, complex search facilities)
- **Trading system** (Management of all FundQuest UK trading, reports, portfolio valuations, links with some electronic trading systems (EMX))
These are some of the areas of the system that I've been designing:
- **Core architecture**: I brought NHibernate for the Data Access Layer, and pushed for the use of a source control tool (SVN), along with a Unit Testing tool (NUnit)
- **Performance**: The most challenging aspect of the application: all the calculations are made on the fly, using a combination of caching, high-performance stored procedure, and pre-fetching of information
- **Charting**: I've introduced Dundas Chart, and implemented most of the pages using this library
- **Web Pages**: I've introduced the use of master pages, as the previous project was using frames
- **Security**: I made most of the pages viewable in a "read-only" mode, with a combination of techniques I designed
- **Documents**: All documents can be linked to any entity (funds, users, universes...), and all their content are indexed
`
        },
        {
            title: 'Front Office Developer, Derivatives',
            company: 'Credit Suisse',
            location: 'London',
            type: 'Full-Time, AVP',
            dates: { from: '2009-11-01', to: '2010-03-01' },
            techs: ['ASP.NET', 'C#', 'SQL Server'],
            website: 'http://www.credit-suisse.com',
            description: `Design, maintenance and improvements of a derivatives trading platform, used both internally and externally by Credit Suisse customers.${lr}
The front end was ASP.NET based, with a back end in C#.`
        },
        {
            title: 'Silverlight / C# Developer',
            company: 'Royal Bank of Scotland',
            location: 'London',
            type: 'Contractor',
            dates: { from: '2003-11-01', to: '2004-12-01' },
            techs: ['Silverlight', 'C#', 'NHibernate', 'WCF', 'Autofac', 'SQL Server'],
            website: 'http://www.rbs.co.uk',
            description: `Design and implementation of a global technology platform which allows the bank to browse content stored in legal and credit documentation.${lr}
The Silverlight based software is used around the globe to manage RBS and its subsidiaries contracts and allows netting calculations.${lr}
- The client is based on **Silverlight**
- The server is **C# 4** based
- The communication between the client and the server is based on **WCF** (binary serialisation)
- The data access layer is using **NHibernate**, with attribute-based mapping
- The changes in the database schema are managed by **Migrator.NET**
- Entities to DTOs mapping is done using **AutoMapper**
- The Dependency Injection framework is **AutoFac**
- The Silverlight UI is using **Infragistics** for the ribbon and other controls

Aspect oriented programming (**AOP**) is also used to manage NHibernate sessions (transactions), using the PostSharp framework.

The development environment is based on a stack of well-known open source products such as: ${lr}
- **CruiseControl.NET** and **NAnt** for the continuous integration
- **NUnit** for unit testing
- **log4net** for logging
- **Rhino Mocks** for unit test mocking

The **Agile** methodology was used throughout the life time of the project, with a 10 minutes stand-up meeting every morning, regular retrospective meetings, **Test Driven Development** (TDD) was also enforced and code reviews were done before each commit.${lr}
I have also scored 100th percentile (worldwide) on the Brain Bench test while applying for this contract.`
        },
        {
            title: 'ASP.NET MVC Front-end Developer',
            company: 'Royal Bank of Scotland',
            type: 'Contractor',
            dates: { from: '2011-01-01', to: '2011-03-01' },
            techs: ['C#', 'NHibernate', 'MVC 3', 'ExtJS', 'AutoFac', 'SQL Server'],
            website: 'http://www.rbs.co.uk',
            description: `Design and implementation of a Human Resource system aiming to replace a multitude of existing systems within RBS and consolidating the data.${lr}
The front end is based on **ASP.NET MVC 3** (using the **Razor** engine), and **ExtJS**.${lr}
The back end is C# 4 with **NHibernate** as the ORM (using Fluent NH for the mapping).${lr}
The server side is using my open source project ([http://fta.codeplex.com](http://fta.codeplex.com)) as a base for the data access layer.${lr}
The Dependency Injection framework used for this project is AutoFac.
`
        },
        {
            title: 'ASP.NET MVC Front-end Developer',
            company: 'Bank of America Merrill Lynch',
            type: 'Contractor',
            dates: { from: '2011-04-01', to: '2012-06-01' },
            techs: ['C#', 'NHibernate', 'ASP.NET MVC', 'ExtJS', 'jQuery', 'Moq', 'SQL Server'],
            website: 'http://www.ml.com',
            description: `Maintenance of a risk application, developed in **C#** and **ASP.NET MVC**, and using **NHibernate** as its Object Relational Mapping (ORM) framework.${lr}
The application interacts with **MSCI Risk Metrics**, which is a risk analysis web service, and is responsible for loading and reconciling various positions files from custodians, fund managers etc.${lr}
Over 5,000 unit tests have been written for this application, using frameworks such as **NUnit**, **Moq**, **SpecFlow** and **Selenium**.${lr}
The web application was originally written in classic ASP.NET and then (partially) migrated to MVC 3 (**Razor**), and **ExtJS** (Ext.NET).${lr}
`
        },
        {
            title: 'Front Office / Front-end React Developer',
            company: 'Royal Bank of Scotland',
            type: 'Contractor / Permanent',
            dates: { from: '2012-07-01' },
            techs: ['React', 'Redux', 'AngularJS', 'Node.js'],
            website: 'https://www.agilemarkets.com',
            description: `Front-End developer on RBS’ flagship platform “Agile Markets”.${lr}
Implementation of several modules, from FX options tickets (Peg, TWAP, OCO, IDO…) to analysis tools.${lr}
These modules were developed using Angular JS, React, or plain JavaScript (with D3). They are connected to back-end services using REST endpoints and websockets (Caplin), and tested using Mocha or Karma against a Node instance.${lr}
These projects are built using Grunt, including some custom Grunt tasks. They are highly modularised, using Stash / Git as their repository.
`
        }
    ],
    education: [
        {
            school: 'Passy-Buzenval',
            diploma: 'BAC STI (French A-Level) - With Honours',
            location: 'Rueil-Malmaison (France)',
            date: '2001-07-01',
            description: 'BAC STI at Passy-Buzenval, in Rueil Malmaison.'
        },
        {
            school: 'Lycée Richelieu - CPGE TSI',
            diploma: 'Cours Préparatoires aux Grandes Ecoles',
            location: 'Rueil-Malmaison (France)',
            date: '2003-06-01',
            description: 'Math sup/Math Spé is preparing French students for the Grandes Ecoles (mainly in physics and mathematics).'
        },
        {
            school: 'Supinfo Paris - Oxford Brookes University',
            diploma: 'Master (MSc) in Computer Science',
            location: 'Paris (2003-2005), Oxford (2005-2006)',
            date: '2006-06-01',
            description: `Supinfo is a three year engineering school, resulting in a European Master in Computer Science.${lr}
I spent the last year in Oxford Brookes University, in the Msc in Computer Science section.`
        }
    ]
};