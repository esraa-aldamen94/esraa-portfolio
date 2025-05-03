/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Esra’a Emad Aldamen",
  title: "Hi all, I'm Esra’a",
  subTitle: emoji(
    "A passionate Mobile Application Developer specializing in Flutter 🚀 with hands-on experience in building user-friendly mobile applications, state management, and API integration."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1XhJlLr4fUKlblQOOpS9Xp0S2E65B69NP/view?usp=sharing", // رابط السيرة الذاتية
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/esraa-aldamen94",
  linkedin: "https://www.linkedin.com/in/esra-aldamen",
  gmail: "esra.aldamen94@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "Passionate Mobile App Developer specialized in Flutter",
  skills: [
    "⚡ Flutter & Dart development for iOS and Android",
"⚡ UI/UX design and responsive implementation with Flutter",
    "⚡ State Management using Provider and Cubit",
    "⚡ Firebase integration (Auth, Firestore, Storage)",
    "⚡ API Integration and working with RESTful APIs",
    "⚡ Local storage with SQLite & Shared Preferences",
    "⚡ Secure storage for sensitive data",
    "⚡ Localization and multi-language support",
    "⚡ Theme customization and dark mode",
    "⚡ JSON Parsing and Data Serialization",

  ],
  softwareSkills: [
    // استخدام أيقونات Devicon بدلاً من Font Awesome للتقنيات التي لا تتوفر في Font Awesome
    { skillName: "Flutter", fontAwesomeClassname: "devicon-flutter-plain colored" },
    { skillName: "Dart", fontAwesomeClassname: "devicon-dart-plain colored" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire", customColorClass: "firebase-icon" },
    { skillName: "SQLite", fontAwesomeClassname: "fas fa-database", customColorClass: "database-icon" },
    { skillName: "RESTful APIs", fontAwesomeClassname: "fas fa-exchange-alt", customColorClass: "rest-api-icon" },
    { skillName: "JSON", fontAwesomeClassname: "fas fa-code", customColorClass: "json-icon" },
    { skillName: "Shared Preferences", fontAwesomeClassname: "fas fa-save", customColorClass: "shared-pref-icon" },
    { skillName: "Secure Storage", fontAwesomeClassname: "fas fa-shield-alt", customColorClass: "secure-storage-icon" },
    { skillName: "Localization", fontAwesomeClassname: "fas fa-language", customColorClass: "localization-icon" },
    { skillName: "Theme", fontAwesomeClassname: "fas fa-paint-brush", customColorClass: "theme-icon" },
    { skillName: "Provider", fontAwesomeClassname: "fas fa-plug", customColorClass: "provider-icon" },
    { skillName: "Cubit", fontAwesomeClassname: "fas fa-cube", customColorClass: "cubit-icon" }
  ],
  display: true
};

// Education
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Al-Balqa Applied University",
      logo: require("./assets/images/alBalqaLogo.jpg"), // Put the university logo path here
      subHeader: "Bachelor’s degree in Communication and Software Engineering",
      duration: "2012 - 2017",
desc: "The Communication Engineering focused on electrical engineering fundamentals and their use in telecommunications.",
      descBullets: [
        "After graduation, I trained for 3 months at Umniah in the RF Optimization Department."
      ]
    }
  ]
};


// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Flutter Developer Intern",
      company: "AppTrainers",
      companylogo: require("./assets/images/appTrainersLogo.png"),
      date: "Dec 2024 - Present",
      desc: "Mobile application developer specializing in Flutter with hands-on experience in developing interactive user interfaces, managing application state, integrating APIs, and optimizing performance across Android and iOS platforms.",
      descBullets: [
        "Developed two basic Flutter applications: a Weather App and a Notes App, focusing on interactive UIs and application state management using Provider and Cubit patterns.",
        "Currently working on a comprehensive food ordering application that displays food menus, enables users to place orders, and manages delivery services, with backend API integration and quality assurance processes.",
        "Gained hands-on experience with SQLite for local storage, secure storage, and Shared Preferences for saving user settings and essential application data.",
        "Implemented third-party service integrations and consumed REST APIs using appropriate Flutter packages to handle HTTP requests and process JSON responses.",
        "Optimized application performance for both Android and iOS platforms, focusing on achieving fast, responsive applications while maintaining clean and efficient code.",
        "Served as the Scrum Master for the team, utilizing Jira to assign and track tasks, and addressing any blockers by collaborating with team members and management to find solutions.",
        "Organized daily stand-up meetings - either on-site or via Zoom - to monitor team progress, confirm task completion, and report blockers to the project management team.",
        "Applied responsive design principles to create user interfaces that adapt to various screen sizes and provide a seamless user experience.",
        "Developed teamwork skills through effectively dividing tasks, sharing ideas, and holding regular meetings to resolve issues facing the team."
      ]
    }
  ]
};
// Big Projects Section
const bigProjects = {
  title: "My Projects",
  subtitle: "Some of the apps I've worked on",
  projects: [
    {
      image: require("./assets/images/weatherAppLogo.png"),
      projectName: "Weather App",
      projectDesc: "A responsive Flutter weather application that displays current conditions and 3-day forecasts for any city. Built with MVC architecture and Cubit state management, it features Google Maps integration to visualize city locations, Lottie animations, and a clean UI design.",
      features: [
        "Real-time weather data",
        "City-based search",
        "Interactive maps",
        "3-day forecast"
      ],
      technologies: "Flutter, Dart, Cubit, HTTP, Google Maps",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/esraa-aldamen94/weather_app"
        },
        {
          name: "Watch Demo",
          url: "https://drive.google.com/drive/folders/1HhgYqbmThs2UUYixU1NPM0CQrdltoV1d?usp=drive_link" // استبدل هذا برابط فيديو تطبيق الطقس الخاص بك
        }
      ]
    },
    {
      image: require("./assets/images/notesAppLogo.png"),
      projectName: "Notes App",
      projectDesc: "A feature-rich Flutter notes application supporting both Arabic and English languages. Implemented with Provider state management and SQLite local storage with user authentication. Allows creating text notes with images from camera or gallery, and includes Google Mobile Ads integration.",
      features: [
        "User authentication",
        "Multi-language support",
        "Image attachments",
        "Color-coded notes"
      ],
      technologies: "Flutter, Provider, SQLite, SharedPreferences",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/esraa-aldamen94/notes_app"
        },
        {
          name: "Watch Demo",
          url: "https://drive.google.com/drive/folders/1KktEZxlM1VpsiYSj4fB8QHtcgP3pWEbB?usp=sharing" // استبدل هذا برابط فيديو تطبيق الملاحظات الخاص بك
        }
      ]
    }
  ],
  display: true
};

// Achievements
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
subtitle: "Achievements and certifications I have completed to enhance my technical skills.",
  achievementsCards: [
   {
     title: "Flutter Development Internship",
     subtitle: "Currently undergoing intensive Flutter development training at AppTrainers. Dec 2024 - Present",
     image: require("./assets/images/flutterInternshipLogo.jpeg"),
     imageAlt: "Flutter Internship",
     footerLink: [
       {
         name: "Learn More",
         url: "https://www.linkedin.com/posts/apptrainers_%D8%AE%D8%B1%D9%8A%D8%AC-%D8%A7%D8%AD%D8%AF-%D8%AA%D8%AE%D8%B5%D8%B5%D8%A7%D8%AA-%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7-%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA-%D8%B3%D8%AC%D9%84-activity-7234834354449846273-4YK7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8pfjcBV7f41-9gc-QN2ms0ia_WL05m1fg"
       }
     ]
   },
    {
      title: "ASP.NET Course",
      subtitle: "Pioneers Academy | Amman | March 2019 - July 2019",
      image: require("./assets/images/Asp.jpg"),
      imageAlt: "ASP.NET Course Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/drive/folders/1tEXfuVoltSyOwmKUcLQ1rKyl7rD34Uiz?usp=sharing"
        }
      ]
    },
    {
      title: "CCNA Routing & Switching Certification",
      subtitle: "Cisco Networking Academy | University of Jordan | Amman | March 2018 - July 2018",
      image: require("./assets/images/cisco.jpg"),
      imageAlt: "CCNA Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/drive/folders/1OB9AQlaSGsbhbuc-lXT2BbbLfSZr38ic?usp=sharing"
        }
      ]
    }
  ],
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "0780379885",
  email_address: "esra.aldamen94@gmail.com"
};

// Resume Section
const resumeSection = {
  title: "CV",
  subtitle: "Feel free to download my CV",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};
// Open Source Projects Link
const openSource = "https://github.com/esraa-aldamen94";  // Your GitHub or any other open-source platform

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  resumeSection
};