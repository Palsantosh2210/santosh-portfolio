// ONE list of skills. The Skills section on the page AND the /developer/santosh-pal JSON both read this.
export const skills = {
  Backend: ["Core Java", "Spring Core", "Spring MVC", "Spring Boot", "Hibernate", "JDBC", "Servlets", "REST APIs"],
  Frontend: ["React", "JavaScript", "HTML", "CSS"],
  Mobile: ["Android Studio", "Firebase"],
  "Data and tools": ["PostgreSQL", "SQL", "Git", "GitLab", "PuTTY", "WinSCP", "Flask", "TensorFlow"],
};

// What goes into the JSON "stack" (and the sample box on the page): every Backend and Frontend skill,
// "Android Studio" from Mobile, and only PostgreSQL and SQL from "Data and tools".
export const apiStack = [...skills.Backend, ...skills.Frontend, "Android Studio", "PostgreSQL", "SQL"];
