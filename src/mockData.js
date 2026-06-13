import myProfilePic from './assets/my-avatar.jpg';

export const mockProfileData = {
  brand: {
    systemTitle: "NFC Card"
  },
  profile: {
    name: "Abhishek Kumar", 
    title: "React.js Developer",
    organization: "EyeRexUs",
    statusMessage: "Active & Available for Projects",
    imageUrl: myProfilePic, 
    stats: [
      { label: "Years Exp.", value: "3+" },
      { label: "Projects", value: "45+" },
      { label: "Happy Clients", value: "30+" },
      { label: "Awards", value: "15+" }
    ],
  
    skills: ["Web Developer", "React", "Node.js", "UI/UX", "MongoDB"],
    languages: ["English", "Hindi"],
    education: "B.Tech Computer Science",
    location: "Delhi, India",
    bio: "Passionate React.js Developer with 3+ years of experience in building scalable web & mobile applications. I love turning ideas into real products."
  },
  

  services: [
    { 
      title: "About Me", 
      description: "Know more about me, my tech stack, and background milestones.", 
      iconName: "User", 
      bgClass: "bg-purple-50", 
      iconClass: "text-purple-600 border border-purple-100" 
    },
    { 
      title: "Portfolio", 
      description: "View my work, enterprise architectures & live projects.", 
      iconName: "Briefcase", 
      bgClass: "bg-blue-50", 
      iconClass: "text-blue-600 border border-blue-100" 
    },
    { 
      title: "Resume", 
      description: "Download my comprehensive engineering resume track doc.", 
      iconName: "FileText", 
      bgClass: "bg-emerald-50", 
      iconClass: "text-emerald-600 border border-emerald-100" 
    },
    { 
      title: "Presentation", 
      description: "View my project slides, technical architecture & pitch decks.", 
      iconName: "Presentation", 
      bgClass: "bg-amber-50", 
      iconClass: "text-amber-600 border border-amber-100" 
    },
    { 
      title: "Abhi Code", 
      description: "Check my production repositories, clean code & active repos.", 
      iconName: "Code2", 
      bgClass: "bg-pink-50", 
      iconClass: "text-pink-600 border border-pink-100" 
    },
    { 
      title: "Social Media", 
      description: "Connect with me on professional platforms and sync nodes.", 
      iconName: "Share2", 
      bgClass: "bg-indigo-50", 
      iconClass: "text-indigo-600 border border-indigo-100" 
    },
    { 
      title: "Contact Me", 
      description: "Send a direct message or business consulting inquiry.", 
      iconName: "MessageSquare", 
      bgClass: "bg-cyan-50", 
      iconClass: "text-cyan-600 border border-cyan-100" 
    },
    { 
      title: "Book Meeting", 
      description: "Schedule a virtual sync or dedicated calendar session.", 
      iconName: "Calendar", 
      bgClass: "bg-teal-50", 
      iconClass: "text-teal-600 border border-teal-100" 
    }
  ],


  gallery: [
    { type: "Photos", src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" },
    { type: "Photos", src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
    { type: "Videos", src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" },
    { type: "Certificates", src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&q=80" },
    { type: "Documents", src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80" }
  ],
  

  reviews: {
    ratingAvg: "4.8",
    totalCount: 32,
    distribution: [
      { stars: 5, percentage: 75, count: 24 },
      { stars: 4, percentage: 18, count: 6 },
      { stars: 3, percentage: 7, count: 2 },
      { stars: 2, percentage: 0, count: 0 },
      { stars: 1, percentage: 0, count: 0 }
    ],
    featuredReview: {
      author: "Rakesh Sharma",
      role: "CEO at TechSoft",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEUj6BxHbZ5ew/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728654229479?e=1782950400&v=beta&t=qAgO4verCvwSOz8Z-NunVQ1cZsUfAK5Qciwnbo1IA-8",
      timeframe: "2 days ago",
      score: 5,
      text: "Great professional! Delivered more than expected. Highly recommended."
    }
  },

  
  socialLinks: [
    { platform: "linkedin", url: "https://linkedin.com" },
    { platform: "github", url: "https://github.com" },
    { platform: "twitter", url: "https://twitter.com" },
    { platform: "instagram", url: "https://instagram.com" },
    { platform: "youtube", url: "https://youtube.com" }
  ]
};

export const COMPONENT_DATA_PAYLOAD = mockProfileData;