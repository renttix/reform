export interface GeneratedContent {
  home: {
    hero: {
      text: string;
      image: string;
    };
    about: {
      text: string;
      image: string;
    };
    priorities: string[];
    keyIssues: {
      economy: string;
      safety: string;
      housing: string;
    };
  };
  about: {
    hero: {
      title: string;
      text: string;
      image: string;
    };
    mission: {
      title: string;
      text: string;
      points: string[];
    };
    team: {
      title: string;
      text: string;
      members: Array<{
        name: string;
        role: string;
        bio: string;
        image: string;
      }>;
    };
    values: {
      title: string;
      text: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
  };
  events: {
    intro: string;
  };
  join: {
    intro: string;
    benefits: string;
    image: string;
  };
  news: {
    intro: string;
    featured: string;
  };
  contact: {
    intro: string;
    methods: string;
  };
}

const content: GeneratedContent = {
  home: {
    hero: {
      text: "Join us in making real change across Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding. We're committed to cutting taxes, reducing net migration to zero, protecting our NHS, and bringing common sense back to local governance. Together, we can build stronger, more prosperous communities where your voice matters and your vote counts.",
      image: "/images/hero.jpg"
    },
    about: {
      text: "Reform UK Erdington Branch is your local voice for national reform across Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding. We're fighting for Reform UK's plan: cutting taxes, reducing net migration to zero, reforming the NHS, tackling crime, and delivering growth. Our contract with you puts these commitments at the heart of everything we do.",
      image: "/images/about.jpg"
    },
    priorities: [
      "Cut taxes to boost local businesses and help families keep more of their money",
      "Support NHS reform to improve healthcare access across all our communities",
      "Back zero net migration to protect local services and housing",
      "Fight crime with more police on our streets in all areas",
      "Drive economic growth through tax cuts and deregulation",
      "Revitalise high streets and local centres across all our communities",
      "Protect local services from excessive demand in all areas",
      "Ensure housing development serves local needs first"
    ],
    keyIssues: {
      economy: "We're committed to cutting taxes and reducing red tape to help businesses thrive across Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding. Our plan includes a 50% business rates cut, lower income tax, and simplified regulations to boost local enterprise and create jobs through practical, common-sense policies.",
      safety: "Community safety is essential in all our areas. We're pushing for increased police presence, tougher sentencing, and effective community-led initiatives across Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding. Our approach combines Reform UK's commitment to law and order with local action to make all our communities safer.",
      housing: "Everyone deserves affordable housing. We're advocating for practical solutions that prioritise local needs across all our communities, focusing on both new housing and improving existing stock, whilst ensuring our infrastructure can support development. Our zero net migration policy will help reduce pressure on local housing in all areas."
    }
  },
  about: {
    hero: {
      title: "About Reform UK Erdington Branch",
      text: "We are your local Reform UK branch, serving Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding. We're committed to delivering our Contract with You through practical, common-sense solutions. Our focus is on cutting taxes, supporting the NHS, reducing net migration to zero, and making all our communities better places for everyone.",
      image: "/images/about-hero.jpg"
    },
    mission: {
      title: "Our Mission",
      text: "Reform UK Erdington Branch exists to implement real reform at both national and local levels across Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding. We believe in practical solutions that work for all our communities whilst delivering Reform UK's plan for positive change.",
      points: [
        "Cut taxes to boost economic growth and help families",
        "Reform the NHS to slash waiting lists",
        "Reduce net migration to zero",
        "Fight crime and support law enforcement",
        "Drive local economic growth through deregulation",
        "Protect and enhance services across all our communities"
      ]
    },
    team: {
      title: "Our Team",
      text: "Meet the dedicated individuals working to make our communities better for everyone.",
      members: [
        {
          name: "Sarah Thompson",
          role: "Branch Coordinator",
          bio: "A lifelong resident with extensive experience in community organising across all our areas.",
          image: "/images/team/sarah.jpg"
        },
        {
          name: "James Wilson",
          role: "Community Outreach",
          bio: "Former local business owner, passionate about economic regeneration in all our communities.",
          image: "/images/team/james.jpg"
        },
        {
          name: "Dr Amira Patel",
          role: "Policy Advisor",
          bio: "Healthcare professional focused on improving services across all our areas.",
          image: "/images/team/amira.jpg"
        }
      ]
    },
    values: {
      title: "Our Values",
      text: "These core principles guide everything we do in our mission to reform our communities.",
      items: [
        {
          title: "Common-Sense Solutions",
          description: "We believe in practical, straightforward approaches to solving local and national challenges across all our areas, guided by our Contract with You."
        },
        {
          title: "Accountability",
          description: "We hold ourselves and others to the highest standards of transparency and responsibility in public service across all our communities."
        },
        {
          title: "Community First",
          description: "We prioritise the needs of residents in Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding whilst supporting national reform objectives."
        },
        {
          title: "Delivery-Focused",
          description: "We focus on achievable changes that make a real difference to people's lives across all our areas, backed by clear commitments and timelines."
        }
      ]
    }
  },
  events: {
    intro: "Stay connected with Reform UK Erdington Branch's activities across Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding. Whether you're interested in national reform campaigns or local initiatives, find the perfect way to get involved and help deliver our Contract with You."
  },
  join: {
    intro: "Join Reform UK Erdington Branch and be part of the change across Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding. Together, we can implement Reform UK's plan and make a real difference in all our communities.",
    benefits: "Get involved in local and national campaigns, help deliver our Contract with You, attend exclusive events, and build a better future for all our areas.",
    image: "/images/hero.jpg"
  },
  news: {
    intro: "Stay updated with the latest news from Reform UK Erdington Branch and our national campaign for real change across all our communities.",
    featured: "Latest updates on our fight for lower taxes, NHS reform, zero net migration, and safer communities across Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding."
  },
  contact: {
    intro: "Get in touch with Reform UK Erdington Branch. We're here to listen and work together to deliver our Contract with You across all our communities.",
    methods: "Email, phone, or visit us at our local office to discuss matters affecting any of our areas."
  }
};

export function getContent(): GeneratedContent {
  return content;
}
