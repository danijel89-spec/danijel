/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Danijel Golubovic",
  title: "Hi all, I'm Danijel",
  subTitle: emoji(
    "Data Analyst professional with hands-on experience in financial controlling and reporting, Power BI, SQL, Excel, and D365. Strong background in data visualization, ETL, data modelling, stakeholder management, and project compliance across diverse industries."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1OdUaYb_wR8iSt0QjdWUaenNCR2VHY1GK/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  // github: "https://github.com/danijel89-spec",
  linkedin: "https://www.linkedin.com/in/danijelgolubovic/",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle:
    "DATA-DRIVEN ANALYST WITH A KNACK FOR PROCESS OPTIMIZATION AND REPORTING",
  skills: [
    emoji("⚡ Proficient in data analysis using Power BI, SQL, and Excel"),
    emoji(
      "⚡ Experienced in creating project dashboards, tracking KPIs, and financial metrics"
    ),
    emoji(
      "⚡ Skilled in project compliance, stakeholder communication, and administrative governance"
    )
  ],
  softwareSkills: [
    {skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Excel", fontAwesomeClassname: "fas fa-file-excel"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "Scrum", fontAwesomeClassname: "fas fa-project-diagram"},
    {skillName: "Project Management", fontAwesomeClassname: "fas fa-tasks"},
    {skillName: "Dynamics 365", fontAwesomeClassname: "fab fa-microsoft"}
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Tartu",
      logo: require("./assets/images/Tartu_Logo.png"),
      subHeader: "Master of Arts - Innovation and Technology Management",
      duration: "09/2019 – 06/2021",
      desc: "Focused on technology strategy, digital transformation, and innovation processes"
    },
    {
      schoolName: "University of Nis",
      logo: require("./assets/images/eko_nis.png"),
      subHeader: "Bachelor's Degree - Finance, Banking and Insurance",
      duration: "10/2008 – 06/2013",
      desc: "Gained solid foundation in financial systems and economic structures"
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Power BI / Excel / D365", progressPercentage: "90%"},
    {Stack: "SQL", progressPercentage: "75%"},
    {Stack: "Python", progressPercentage: "20%"},
    {Stack: "Project Management", progressPercentage: "85%"}
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Power BI Manager",
      company: "Virtuozzo",
      companylogo: require("./assets/images/virtuozzo.png"),
      date: "10/2025 – Present",
      descBullets: [
        "Lead development of executive and operational Power BI dashboards integrating Salesforce, SQL and financial data sources",
        "Design and maintain scalable data models, DAX measures and reporting standards for ARR, MRR, TCV and discount analysis",
        "Collaborate with Finance and leadership stakeholders to translate business requirements into data-driven insights",
        "Improve reporting automation and governance to enhance visibility across global business units"
      ]
    },
    {
      role: "Project Management Officer",
      company: "Merkle",
      companylogo: require("./assets/images/merkle.jpg"),
      date: "05/2022 – 09-2025",
      descBullets: [
        "Provide tools/reports to support project managers and ensure compliance",
        "Monitor KPIs, analyze financials, train on PM standards",
        "Support change/resource management and stakeholder communication"
      ]
    },
    {
      role: "IT Manager",
      company: "Green Trust",
      companylogo: require("./assets/images/green_trust.jpg"),
      date: "04/2021 – 05/2022",
      descBullets: [
        "Redefined project document structures, managed IT systems",
        "Automated internal processes, wrote specs for equipment",
        "Managed cloud/cybersecurity projects"
      ]
    },
    {
      role: "Carrier Sales Representative",
      company: "Delta Group Logistics LLC",
      companylogo: require("./assets/images/delta.png"),
      date: "11/2021 – 03/2022",
      descBullets: [
        "Maintained carrier network and negotiated competitive rates",
        "Ensured optimal shipment coverage and service quality"
      ]
    },
    {
      role: "Project Officer",
      company: "Ministry of Labor, Employment, Veteran and Social Affairs",
      companylogo: require("./assets/images/lines.jpg"),
      date: "09/2021 – 02/2022",
      descBullets: [
        "Supported program activities, stakeholders and reporting",
        "Organized events, managed documentation and correspondence"
      ]
    },
    {
      role: "Business Consultant",
      company: "Gabriel Education Ltd.",
      companylogo: require("./assets/images/lines.jpg"),
      date: "02/2018 – 07/2019",
      descBullets: [
        "Implemented curriculum changes, reported effectiveness",
        "Introduced new technologies and consulted on education policies"
      ]
    },
    {
      role: "Educational Recruiter",
      company: "Career Oversea Ltd.",
      companylogo: require("./assets/images/lines.jpg"),
      date: "02/2017 – 02/2018",
      descBullets: [
        "Provided academic counseling and developed outreach strategies",
        "Built partnerships between universities and schools"
      ]
    }
  ]
};

const bigProjects = {
  title: "Projects",
  subtitle: "Some of the work I am proud of",
  projects: [],
  display: false
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Professional credentials and recognitions",
  achievementsCards: [
    {
      title: "Prince2 Foundation Professional",
      subtitle: "Certified by AXELOS in project methodology and governance",
      image: require("./assets/images/prince2.png"),
      imageAlt: "Prince2 Logo",
      footerLink: []
    },
    {
      title: "Scrum Master I (PSM I)",
      subtitle: "Certified Scrum Master with understanding of Agile principles",
      image: require("./assets/images/scrum.png"),
      imageAlt: "Scrum Master Logo",
      footerLink: []
    },
    {
      title: "Microsoft Power BI Data Analyst",
      subtitle: "Certified in Data Analysis and Visualization using Power BI",
      image: require("./assets/images/PowerBI.png"),
      imageAlt: "Power BI Logo",
      footerLink: []
    },
    {
      title: "Analyze Data With SQL",
      subtitle:
        "Practical SQL for Business Intelligence, Data Transformation & Reporting",
      image: require("./assets/images/sql.png"),
      imageAlt: "SQL Logo",
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {title: "", subtitle: "", blogs: [], display: false};
const talkSection = {title: "", subtitle: "", talks: [], display: false};
const podcastSection = {title: "", subtitle: "", podcast: [], display: false};
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true,
  link: "https://drive.google.com/file/d/1OdUaYb_wR8iSt0QjdWUaenNCR2VHY1GK/view?usp=sharing"
};
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open.",
  number: "+381642924156",
  email_address: "thegolub1989@gmail.com"
};
const twitterDetails = {userName: "", display: false};
const isHireable = true;

const openSource = {
  showGithubProfile: false,
  display: false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
