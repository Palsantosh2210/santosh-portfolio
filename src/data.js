import { skills } from "../shared/skills.js";
// ====== EDIT THIS FILE ONLY. Everything on the site comes from here. ======
export const profile = {
  name: "Santosh Pal",
  role: "Java Full Stack Developer",
  location: "Mumbai, India",
  email: "palsantosh2210@gmail.com",
  phone: "+91 7304284215",
  whatsapp: "917304284215",
  // TODO: replace these with your real profile links
  linkedin: "https://www.linkedin.com/in/santosh-pal-62300b222",
  github: "https://github.com/Palsantosh2210",
  leetcode: "https://leetcode.com/YOUR-LEETCODE-ID",
  resume: "./Santosh_Pal_Resume.pdf",
  photo: "./santosh.jpg",
};

export const modes = {
  hire: {
    label: "Hiring a developer",
    headline: "I build secure fintech APIs and the apps around them.",
    sub: "Software Developer at Yalamanchili Payments & Cards. I design Spring Boot APIs for KYC, video KYC, card status and balance enquiries, and I can build the React or Android front end too. So far I have built 90+ APIs.",
    cta: "Download resume",
    ctaHref: "resume",
  },
  freelance: {
    label: "Need a freelancer",
    headline: "Your website or app, built end to end by one developer.",
    sub: "React websites, Android apps and Spring Boot backends for small businesses. I have built a React web app and an Android app for a printing company, now in final testing. Details will be public after launch.",
    cta: "Discuss my project",
    ctaHref: "#contact",
  },
};

export const stats = [
  ["90+ APIs", "Built at Yalamanchili Payments and Cards"],
  ["Rs 15 lakh", "Funding won for Krushivottam"],
  ["3", "First-prize project wins"],
  ["8.5 CGPA", "B.E. Computer Science"],
];

export const services = [
  { t: "Business websites in React", d: "Fast, mobile-friendly sites and web apps with order forms, admin pages and a clean design that fits your brand." },
  { t: "Android apps", d: "Native Android apps built in Android Studio with Firebase, payments (Razorpay) and notifications." },
  { t: "Backend and APIs", d: "Secure REST APIs with Spring Boot, Hibernate and PostgreSQL, with the same standards I use in fintech work." },
  { t: "Fixes and add-ons", d: "Bugs, new features, API integrations and performance fixes on an existing website or app." },
];

export const freelanceWork = {
  client: "Kamana Creation",
  type: "Printing company",
  // TODO: add the real details. Ask the client for permission and a one-line testimonial.
  status: "Final testing. Details shared after launch, as agreed with the client",
  summary: "A React website and an Android app built in Android Studio for a printing company, so customers can see services and place requests online and on mobile.",
  built: ["React web application", "Android application (Android Studio)"],
  link: "", // add live URL or Play Store link when you have one
  quote: "", // add client testimonial here
};

export const projects = [
  { n: "Krushivottam", tag: "Winner", d: "Farm management and e-commerce platform for farmers, traders and customers. Won Rs 15 lakh funding from the NETRARIT Foundation and 1st prize in an intercollege competition.", s: ["Java", "Android", "Python", "Flask", "Firebase"], l: "" },
  { n: "Nisarchana", tag: "Android", d: "Infrastructure project app that predicts project dimensions, shows a 2D model and connects customers with engineers. Razorpay payments included.", s: ["Java", "Android", "ML", "Flask", "Razorpay"], l: "" },
  { n: "System of Suraksha", tag: "1st prize", d: "Women's safety app that sends an SMS with the live location during an emergency without using internet.", s: ["Java", "Android", "Firebase"], l: "" },
  { n: "API Simulator", tag: "Backend", d: "Postman-style tool that forwards POST requests to REST and SOAP services and returns the live response.", s: ["Spring Boot", "RestTemplate", "SOAP", "REST"], l: "" },
  { n: "Expense Tracker", tag: "Full stack", d: "Expense manager with signup, login, sessions and full CRUD.", s: ["Servlet", "Hibernate JPA", "PostgreSQL"], l: "" },
  { n: "Banking System", tag: "Backend", d: "Account management and transactions on a PostgreSQL backend using JDBC.", s: ["JDBC", "PostgreSQL"], l: "" },
  { n: "Job Tracker", tag: "Frontend", d: "Track job applications with add, edit, delete, search, filters, local storage and dark mode.", s: ["JavaScript", "HTML", "CSS"], l: "" },
];

export const experience = [
  { r: "Software Developer", c: "Yalamanchili Payments and Cards, Navi Mumbai", p: "Jan 2025 to now", d: "Built and maintain 90+ fintech APIs for account status, KYC, video KYC, card status checks and balance inquiries. Version control with GitLab." },
  { r: "Web Developer Intern", c: "Rathang Technology", p: "Mar to Jun 2023", d: "Designed and built a site with JavaScript, HTML, CSS and WordPress." },
  { r: "Data Science Intern", c: "YBI Foundation", p: "Dec 2022 to Jan 2023", d: "Disease-prediction ML models in Python and TensorFlow, plus a recommendation system served through Flask." },
  { r: "Blue Team Cybersecurity Intern", c: "VCL Academy", p: "Nov to Dec 2022", d: "Threat detection, incident response and network monitoring." },
  { r: "AI and ML Engineer Intern", c: "YBI Foundation", p: "Dec 2021 to Jan 2022", d: "Healthcare ML projects in Python and TensorFlow." },
];

export { skills };

export const proof = [
  "Published a paper in the International Journal of Novel Research and Development (2024)",
  "3rd rank, National Conference Research Paper Publication (2024)",
  "1st rank, Imperia intercollegiate project competition (2022 and 2023)",
  "3rd rank, Techspark 4.0, Viva Institute of Technology (2023)",
  "Java Full Stack certification, JSpiders (2025); Machine Learning, Simplilearn (2024)",
];
