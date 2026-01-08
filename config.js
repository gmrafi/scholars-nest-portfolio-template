// config.js - Central configuration for ScholarNest Template
// This file contains all customizable data for the portfolio template
// Created by: Md Golam Mubasshir Rafi (https://www.gmrafi.com.bd)

const config = {
  // Personal Information
  personal: {
    name: "Dr. Your Name",
    title: "Assistant Professor of Computer Science",
    bio: "Passionate researcher and educator specializing in Artificial Intelligence, Machine Learning, and Data Science. Published in top-tier conferences and journals. Committed to advancing knowledge through innovative research and mentoring the next generation of scientists.",
    email: "your.name@university.edu",
    phone: "+1 (555) 123-4567",
    location: "City, State, Country",
    website: "https://yourname.github.io"
  },

  // Social Media Links
  social: {
    linkedin: "https://linkedin.com/in/yourname",
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    researchgate: "https://researchgate.net/profile/Your_Name",
    googleScholar: "https://scholar.google.com/citations?user=your_user_id",
    orcid: "https://orcid.org/0000-0000-0000-0000"
  },

  // Education
  education: {
    degree: "Ph.D. in Computer Science",
    institution: "University Name",
    graduationYear: "2025",
    gpa: "3.8/4.0"
  },

  // Professional Information
  professional: {
    currentRole: "Assistant Professor",
    organization: "Department of Computer Science, University Name",
    experience: "5+ years"
  },

  // Research Interests
  research: {
    interests: ["Artificial Intelligence", "Machine Learning", "Data Science", "Computer Vision"],
    keywords: ["AI", "ML", "Deep Learning", "Computer Vision", "Data Mining"]
  },

  // License Configuration
  license: {
    key: "BF3F0EA4-294D-4092-ABCF-E9304AD7FD26", // Replace with your Lemon Squeezy license key
    productId: "761482", // Lemon Squeezy product ID
    apiUrl: "https://api.lemonsqueezy.com/v1/licenses/validate"
  },

  // Site Configuration
  site: {
    title: "Dr. Your Name | Academic Research Portfolio",
    description: "Professional academic portfolio showcasing research, publications, teaching, and achievements in Computer Science and Artificial Intelligence.",
    keywords: "academic portfolio, research, publications, computer science, artificial intelligence, machine learning",
    author: "Dr. Your Name",
    ogImage: "https://yourname.github.io/photos/profile.jpg"
  },

  // Achievements (placeholder data)
  achievements: [
    {
      title: "Best Paper Award",
      description: "Received best paper award at International Conference on Computer Vision",
      date: "2024",
      icon: "fas fa-trophy"
    },
    {
      title: "NSF Grant Recipient",
      description: " Awarded $500K NSF grant for AI research project",
      date: "2023",
      icon: "fas fa-award"
    },
    {
      title: "IEEE Senior Member",
      description: "Elected as Senior Member of IEEE Computer Society",
      date: "2023",
      icon: "fas fa-certificate"
    }
  ],

  // Projects (placeholder data)
  projects: [
    {
      title: "AI-Powered Medical Diagnosis System",
      description: "Developed a deep learning model for automated diagnosis of medical images with 95% accuracy",
      technologies: ["Python", "TensorFlow", "Computer Vision"],
      link: "https://github.com/yourusername/medical-ai"
    },
    {
      title: "Natural Language Processing Research",
      description: "Research project on transformer-based models for low-resource languages",
      technologies: ["PyTorch", "NLP", "Transformers"],
      link: "https://github.com/yourusername/nlp-research"
    }
  ],

  // Publications (placeholder data)
  publications: [
    {
      title: "Deep Learning Approaches for Computer Vision in Healthcare",
      authors: "Your Name, Co-author One, Co-author Two",
      journal: "IEEE Transactions on Medical Imaging",
      year: "2024",
      doi: "10.1109/TMI.2024.1234567"
    },
    {
      title: "Transformer-Based Models for Low-Resource Language Processing",
      authors: "Your Name, Co-author One",
      journal: "Proceedings of ACL 2024",
      year: "2024",
      doi: "10.18653/v1/2024.acl-main.123"
    },
    {
      title: "Survey on Explainable Artificial Intelligence in Critical Applications",
      authors: "Your Name, Co-author One, Co-author Two, Co-author Three",
      journal: "ACM Computing Surveys",
      year: "2023",
      doi: "10.1145/1234567.1234567"
    }
  ]
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
} else {
  window.config = config;
}
