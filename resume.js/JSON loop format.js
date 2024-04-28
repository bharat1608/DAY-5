const resumeData = {
    "name": "bharath kannan",
    "title": "Software Developer",
    "contact": {
      "email": "bharathkannan61@gmail.com",
      "phone": "6379895465",
      "address": "123 Main Street, chennai, tamilnadu, india"
    },
    "summary": "Experienced software developer with a strong background in web development and a passion for problem-solving. Skilled in various programming languages and technologies.",
    "education": [
      {
        "degree": "Bachelor of Science in Computer Science",
        "institution": "rajalakshmi institute",
        "location": "City, Country",
        "year": "2020 - 2024"
      }
    ],
    "experience": [
      {
        "title": "Software Engineer",
        "company": "Tech Solutions Inc.",
        "location": "bangalore, india",
        "dates": "2024 - Present",
        "description": "Developed and maintained web applications using HTML, CSS, JavaScript, and various frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions."
      },
      {
        "title": "Junior Developer",
        "company": "Software Innovations Ltd.",
        "location": "City, Country",
        "dates": "2024",
        "description": "Assisted senior developers in designing and implementing software solutions. Participated in code reviews and testing processes to ensure product quality."
      }
    ],
    "skills": [
      "JavaScript",
      "HTML",
      "CSS",
      "React.js",
      "Node.js",
      "Java",
      "Python",
      "SQL",
      "Git"
    ]
  };
 console.log("Using for loop:");
 for (let i = 0; i < resumeData.skills.length; i++) {
     console.log(resumeData.skills[i]);
 }
 
 
 console.log("\nUsing for-in loop:");
 for (let key in resumeData.contact) {
     console.log(key + ": " + resumeData.contact[key]);
 }
 

 console.log("\nUsing for-of loop:");
 for (let education of resumeData.education) {
     console.log(education.degree);
 }
 

 console.log("\nUsing forEach loop:");
 resumeData.experience.forEach((exp) => {
     console.log(exp.title + " at " + exp.company);
 });