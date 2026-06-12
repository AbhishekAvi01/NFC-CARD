
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
      { label: "Exp Years", value: "3+" },
      { label: "Completed", value: "45+" },
      { label: "Happy Clients", value: "30+" },
      { label: "Rank", value: "Top" }
    ]
  },
  services: [
    { 
      title: "About Me", 
      description: "React.js developer specializing in building highly modular component architectures, managing complex UI state flows with Context API, and implementing clean Tailwind styles.", 
      iconName: "User", 
      bgClass: "bg-purple-50", 
      iconClass: "text-purple-600 border border-purple-100" 
    },
    { 
      title: "Portfolio", 
      description: "Review interactive dashboards, highly performant single page applications, and modern web application structures.", 
      iconName: "Briefcase", 
      bgClass: "bg-blue-50", 
      iconClass: "text-blue-600 border border-blue-100" 
    },
    { 
      title: "My Resume", 
      description: "Access my formal engineering document detailing core technical milestones and front-end development capabilities.", 
      iconName: "FileText", 
      bgClass: "bg-emerald-50", 
      iconClass: "text-emerald-600 border border-emerald-100" 
    },
    { 
      title: "Tech Stack", 
      description: "Hands-on experience with JavaScript (ES6+), React core engine, Next.js rendering, HTML5/CSS3, and Tailwind ecosystem.", 
      iconName: "Cpu", 
      bgClass: "bg-amber-50", 
      iconClass: "text-amber-600 border border-amber-100" 
    },
    { 
      title: "Custom Hooks", 
      description: "Writing abstract, decoupled hooks logic to structure scalable, clean, and reusable front-end functional patterns.", 
      iconName: "Code2", 
      bgClass: "bg-pink-50", 
      iconClass: "text-pink-600 border border-pink-100" 
    },
    { 
      title: "Social Connect", 
      description: "Anchor parameters to interface directly with my professional network coordinates and enterprise social profiles.", 
      iconName: "Share2", 
      bgClass: "bg-indigo-50", 
      iconClass: "text-indigo-600 border border-indigo-100" 
    },
    { 
      title: "Contact Me", 
      description: "Initiate secure communication pipelines directly to discuss immediate project onboarding requirements or assignments.", 
      iconName: "MessageSquare", 
      bgClass: "bg-cyan-50", 
      iconClass: "text-cyan-600 border border-cyan-100" 
    },
    { 
      title: "Book Meeting", 
      description: "Sync instantly into my calendar layout to establish dedicated virtual review or front-end technical discussions.", 
      iconName: "Calendar", 
      bgClass: "bg-teal-50", 
      iconClass: "text-teal-600 border border-teal-100" 
    }
  ],
  gallery: [
    { type: "Photos", src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" },
    { type: "Photos", src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
    { type: "Videos", src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" },
    { type: "Certificates", src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&q=80" }
  ],
  reviews: {
    ratingAvg: "4.9",
    totalCount: 28,
    distribution: [
      { stars: 5, percentage: 85, count: 24 },
      { stars: 4, percentage: 10, count: 3 },
      { stars: 3, percentage: 5, count: 1 },
      { stars: 2, percentage: 0, count: 0 },
      { stars: 1, percentage: 0, count: 0 }
    ],
    featuredReview: {
      author: "Mohit Sharma",
      role: "Product Lead",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEUj6BxHbZ5ew/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728654229479?e=1782950400&v=beta&t=qAgO4verCvwSOz8Z-NunVQ1cZsUfAK5Qciwnbo1IA-8",
      timeframe: "3 days ago",
      score: 5,
      text: "Abhishek's capability in building interactive and performant front-end interfaces is excellent. Component rendering states are optimized properly, rendering logic remains highly decoupled, and layout adaptation flows flawlessly."
    }
  }
};

// ⚡ Dynamic Fix: Dual export ensures older file connections don't throw pre-transform crash errors
export const COMPONENT_DATA_PAYLOAD = mockProfileData;