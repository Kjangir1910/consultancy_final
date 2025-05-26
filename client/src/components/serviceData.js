// src/data/servicesData.js

const services = [
    {
      title: "Resume Writing",
      description: "Get a professional resume tailored to your career goals.",
      image: "/images/resume-writing.jpg"
    },
    {
      title: "Resume Editing",
      description: "Polish your existing resume to perfection.",
      image: "/images/resume-editing.jpg"
    },
    {
      title: "Resume Screening",
      description: "Ensure your resume passes ATS screening.",
      image: "/images/resume-screening.jpg"
    },
    {
      title: "Interview Preparation",
      description: "End-to-end interview prep to help you ace the process.",
      subServices: [
        "Career Selection",
        "Job Research",
        "Job Description Analysis",
        "Interview Guidance",
        "Offer Negotiation"
      ],
      image: "/images/interview.jpg"
    },
    {
      title: "Performance Training",
      description: "Improve your workplace performance and productivity.",
      image: "/images/performance.jpg"
    },
    {
      title: "Spoken English",
      description: "Enhance your English speaking skills with expert guidance.",
      image: "/images/spoken-english.jpg"
    },
    {
      title: "Career Counselling",
      description: "Get expert advice on making the right career choices.",
      image: "/images/counselling.jpg"
    }
  ];
  
  export default services;
  
