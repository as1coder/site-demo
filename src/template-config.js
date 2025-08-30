// Template Configuration
// This file contains all the customizable content for the website template
// Modify these values to adapt the template for different clients and industries

export const templateConfig = {
  // Business Information
  business: {
    name: "RestoreHair Clinic",
    tagline: "#1 Hair Transplant Clinic in the Region",
    description: "Leading hair restoration clinic providing advanced FUE and FUT hair transplant procedures. With over 15 years of experience, we help patients restore their confidence with natural-looking results.",
    phone: "(555) 123-HAIR",
    email: "info@restorehair.com",
    address: {
      street: "123 Medical Center Drive",
      suite: "Suite 450",
      city: "Beverly Hills",
      state: "CA",
      zip: "90210"
    },
    hours: {
      weekdays: "Mon-Fri: 8:00 AM - 6:00 PM",
      saturday: "Saturday: 9:00 AM - 4:00 PM",
      sunday: "Sunday: Closed"
    }
  },

  // Hero Section
  hero: {
    badge: "⭐ #1 Hair Transplant Clinic in the Region",
    title: {
      part1: "Restore Your",
      highlight1: "Confidence",
      part2: "with",
      highlight2: "Natural",
      part3: "Hair Restoration"
    },
    description: "Advanced FUE and FUT hair transplant procedures with over 15 years of experience. Get back the hairline you deserve with our proven techniques and personalized care.",
    ctaButtons: {
      primary: "Schedule Free Consultation",
      secondary: "View Before & After"
    },
    features: [
      "FDA Approved Techniques",
      "98% Success Rate", 
      "Natural Results"
    ],
    stats: {
      experience: "15+",
      procedures: "2,500+",
      patients: "500+"
    }
  },

  // Doctor Information
  doctor: {
    name: "Dr. Michael Smith, MD",
    title: "Board-Certified Hair Restoration Specialist",
    bio: [
      "Dr. Michael Smith is a board-certified dermatologist and hair restoration specialist with over 15 years of experience in advanced hair transplant techniques. He has helped thousands of patients regain their confidence through natural-looking hair restoration.",
      "Dr. Smith combines artistic vision with medical precision to create hairlines that look completely natural. He stays at the forefront of hair restoration technology and regularly trains other physicians in the latest techniques."
    ],
    credentials: [
      {
        title: "Medical Education",
        details: "MD from Harvard Medical School, Dermatology Residency at Johns Hopkins"
      },
      {
        title: "Board Certifications", 
        details: "American Board of Dermatology, International Society of Hair Restoration Surgery"
      },
      {
        title: "Experience",
        details: "2,500+ successful hair transplant procedures over 15 years"
      },
      {
        title: "Continuing Education",
        details: "Regular attendance at international hair restoration conferences and workshops"
      }
    ]
  },

  // Services
  services: [
    {
      title: "FUE Hair Transplant",
      description: "Follicular Unit Extraction - The gold standard for natural-looking hair restoration with minimal scarring.",
      features: ["No linear scar", "Quick recovery", "Natural results", "Minimally invasive"],
      duration: "4-8 hours",
      grafts: "1,000-4,000 grafts",
      popular: true
    },
    {
      title: "FUT Hair Transplant",
      description: "Follicular Unit Transplantation - Traditional method allowing maximum graft extraction in a single session.",
      features: ["Higher graft yield", "Cost effective", "Proven technique", "Single session"],
      duration: "6-10 hours", 
      grafts: "2,000-5,000 grafts",
      popular: false
    },
    {
      title: "PRP Therapy",
      description: "Platelet-Rich Plasma treatment to stimulate hair growth and strengthen existing follicles.",
      features: ["Non-surgical", "Natural treatment", "Minimal downtime", "Enhances transplant results"],
      duration: "1-2 hours",
      grafts: "Hair strengthening",
      popular: false
    }
  ],

  // Testimonials
  testimonials: [
    {
      name: "James Wilson",
      age: "34",
      procedure: "FUE Hair Transplant",
      rating: 5,
      quote: "Dr. Smith completely changed my life. I was skeptical at first, but the results exceeded all my expectations. The hairline looks completely natural and the confidence I've gained is priceless.",
      timeframe: "6 months post-procedure"
    },
    {
      name: "Michael Rodriguez", 
      age: "42",
      procedure: "FUT Hair Transplant",
      rating: 5,
      quote: "The entire team was professional and caring throughout the process. Dr. Smith's attention to detail is incredible. I wish I had done this years ago - the results are amazing.",
      timeframe: "1 year post-procedure"
    },
    {
      name: "David Chen",
      age: "29", 
      procedure: "FUE + PRP Therapy",
      rating: 5,
      quote: "I was losing hair in my late twenties and it was affecting my confidence. Dr. Smith's approach was perfect for my situation. The combination of FUE and PRP gave me natural-looking, thick hair again.",
      timeframe: "8 months post-procedure"
    },
    {
      name: "Robert Taylor",
      age: "38",
      procedure: "FUE Hair Transplant",
      rating: 5,
      quote: "Outstanding experience from consultation to final results. Dr. Smith is an artist - the hairline design is perfect and no one can tell I had a transplant. Worth every penny.",
      timeframe: "14 months post-procedure"
    },
    {
      name: "Anthony Brown",
      age: "45",
      procedure: "FUT Hair Transplant", 
      rating: 5,
      quote: "I researched for months before choosing Dr. Smith. His reputation and results speak for themselves. The procedure was comfortable and the recovery was easier than expected.",
      timeframe: "2 years post-procedure"
    },
    {
      name: "Kevin Johnson",
      age: "31",
      procedure: "FUE Hair Transplant",
      rating: 5,
      quote: "Dr. Smith and his team made me feel comfortable throughout the entire process. The results look completely natural - even my barber was amazed. I couldn't be happier.",
      timeframe: "10 months post-procedure"
    }
  ],

  // Statistics
  stats: {
    satisfaction: "98%",
    rating: "4.9/5", 
    patients: "500+",
    experience: "15+"
  },

  // Social Media Links
  socialMedia: {
    facebook: "#",
    instagram: "#", 
    twitter: "#",
    youtube: "#"
  },

  // Footer Links
  footerLinks: {
    services: [
      "FUE Hair Transplant",
      "FUT Hair Transplant",
      "PRP Therapy", 
      "Hair Loss Consultation",
      "Eyebrow Restoration"
    ],
    about: [
      "Our Doctor",
      "Our Clinic",
      "Patient Reviews",
      "Before & After Gallery",
      "FAQ"
    ],
    resources: [
      "Hair Loss Guide",
      "Recovery Timeline",
      "Cost Calculator",
      "Insurance Information",
      "Blog"
    ]
  },

  // Color Scheme (can be customized for different industries)
  colors: {
    primary: "blue", // Options: blue, green, purple, red, orange
    accent: "blue-600"
  },

  // Form Configuration
  contactForm: {
    title: "Book Your Consultation",
    description: "Fill out the form below and we'll contact you within 24 hours to schedule your appointment.",
    fields: {
      ageRanges: ["20-30", "30-40", "40-50", "50+"],
      procedures: [
        { value: "fue", label: "FUE Hair Transplant" },
        { value: "fut", label: "FUT Hair Transplant" },
        { value: "prp", label: "PRP Therapy" },
        { value: "consultation", label: "Not sure - Need consultation" }
      ]
    }
  }
}

// Industry-specific template variations
export const industryTemplates = {
  hairTransplant: templateConfig, // Default template

  dentalClinic: {
    ...templateConfig,
    business: {
      ...templateConfig.business,
      name: "Smile Dental Clinic",
      tagline: "#1 Dental Clinic in the Region"
    },
    hero: {
      ...templateConfig.hero,
      badge: "⭐ #1 Dental Clinic in the Region",
      title: {
        part1: "Transform Your",
        highlight1: "Smile",
        part2: "with",
        highlight2: "Professional", 
        part3: "Dental Care"
      }
    },
    colors: {
      primary: "green",
      accent: "green-600"
    }
  },

  cosmeticSurgery: {
    ...templateConfig,
    business: {
      ...templateConfig.business,
      name: "Elite Cosmetic Surgery",
      tagline: "#1 Cosmetic Surgery Practice"
    },
    hero: {
      ...templateConfig.hero,
      badge: "⭐ #1 Cosmetic Surgery Practice",
      title: {
        part1: "Enhance Your",
        highlight1: "Natural Beauty",
        part2: "with",
        highlight2: "Expert",
        part3: "Cosmetic Surgery"
      }
    },
    colors: {
      primary: "purple",
      accent: "purple-600"
    }
  },

  weightLoss: {
    ...templateConfig,
    business: {
      ...templateConfig.business,
      name: "Transform Weight Loss Center",
      tagline: "#1 Weight Loss Center"
    },
    hero: {
      ...templateConfig.hero,
      badge: "⭐ #1 Weight Loss Center",
      title: {
        part1: "Transform Your",
        highlight1: "Life",
        part2: "with",
        highlight2: "Proven",
        part3: "Weight Loss Solutions"
      }
    },
    colors: {
      primary: "orange",
      accent: "orange-600"
    }
  }
}

export default templateConfig