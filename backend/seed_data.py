# Seed data for MongoDB collections

services_data = [
    {
        "id": 1,
        "title": "Customized Home Theatre",
        "description": "Transform your living space into a cinematic experience with immersive sound, stunning visuals, and personalized smart controls. From Dolby Atmos systems to 4K projection.",
        "image": "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif",
        "icon": "Film",
        "features": ["Dolby Atmos Sound", "4K/8K Projection", "Custom Seating", "Acoustic Treatment"]
    },
    {
        "id": 2,
        "title": "Smart Touch Switches",
        "description": "Modern touch-enabled switches that bring elegance and functionality to your home. Control lights with a simple touch, set schedules, and integrate with your smart home ecosystem.",
        "image": "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/99fx1zh1_keypads-bg-design-mob%20%281%29.webp",
        "icon": "Lightbulb",
        "features": ["Touch Control", "Scene Setting", "Timer Functions", "Smart Integration"]
    },
    {
        "id": 3,
        "title": "Security Systems",
        "description": "Protect what matters most with cutting-edge security automation—smart cameras, alarms, motion sensors, and 24/7 monitoring designed to keep your home safe.",
        "image": "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/d3e2luzr_download.avif",
        "icon": "Shield",
        "features": ["Smart Cameras", "Motion Sensors", "24/7 Monitoring", "Remote Access"]
    },
    {
        "id": 4,
        "title": "Home Automation",
        "description": "Control lights, climate, security, and appliances from anywhere. One tap, one voice command, or completely automatic—designed for your lifestyle and budget.",
        "image": "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=800",
        "icon": "Home",
        "features": ["Centralized Control", "Voice Integration", "Scenes & Routines", "Remote Access"]
    },
    {
        "id": 5,
        "title": "Networking Solutions",
        "description": "Professional mesh networks that eliminate dead zones and keep all your devices connected. Fast, reliable WiFi in every room, every corner.",
        "image": "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/by22ktly_istockphoto-1932001837-612x612.jpg",
        "icon": "Wifi",
        "features": ["Mesh Network", "No Dead Zones", "High-Speed WiFi", "Secure Connection"]
    },
    {
        "id": 6,
        "title": "Smart Office Automation",
        "description": "Boost productivity with automated lighting, climate control, meeting room booking, and energy management for modern workspaces.",
        "image": "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=800",
        "icon": "Building2",
        "features": ["Climate Control", "Energy Management", "Meeting Integration", "Smart Access"]
    },
    {
        "id": 7,
        "title": "Digital Door Locks",
        "description": "Keyless entry with fingerprint, PIN, card, or smartphone access. Monitor who enters your home and grant temporary access to guests remotely.",
        "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        "icon": "Lock",
        "features": ["Fingerprint Access", "PIN & Card Entry", "Remote Unlock", "Access Logs"]
    },
    {
        "id": 8,
        "title": "Video Door Phones",
        "description": "See and speak to visitors from anywhere with HD video doorbells. Two-way audio, motion detection, and seamless integration with your smart home.",
        "image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800",
        "icon": "Video",
        "features": ["HD Video", "Two-Way Audio", "Motion Detection", "Cloud Recording"]
    },
    {
        "id": 9,
        "title": "Motorised Gates",
        "description": "Automated gate systems with remote control, smartphone access, and integration with your home security. Smooth, silent operation with safety sensors.",
        "image": "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800",
        "icon": "DoorOpen",
        "features": ["Remote Control", "Smartphone Access", "Safety Sensors", "Intercom Integration"]
    },
    {
        "id": 10,
        "title": "Acoustic Treatment",
        "description": "Professional acoustic panels and treatments for home theatres, studios, and living spaces. Optimize sound quality and eliminate unwanted echoes.",
        "image": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800",
        "icon": "Music",
        "features": ["Sound Panels", "Bass Traps", "Diffusers", "Custom Design"]
    }
]

benefits_data = [
    {
        "id": 1,
        "title": "Consultation-First Approach",
        "description": "We begin every project with a comprehensive consultation to understand your lifestyle and design custom solutions tailored specifically for you.",
        "icon": "Users"
    },
    {
        "id": 2,
        "title": "Transparent Pricing",
        "description": "View our clear pricing packages upfront with detailed proposals and no hidden charges. What you see is what you pay.",
        "icon": "DollarSign"
    },
    {
        "id": 3,
        "title": "Multi-Brand Integration",
        "description": "We're not locked into any single brand. Our certified technicians work with all leading smart home brands to create the perfect solution.",
        "icon": "Boxes"
    },
    {
        "id": 4,
        "title": "Lifetime Support Guarantee",
        "description": "We provide lifetime technical support, regular system health checks, software updates, and training. 24/7 helpline access for your peace of mind.",
        "icon": "HeadphonesIcon"
    },
    {
        "id": 5,
        "title": "Expert Installation",
        "description": "Our certified technicians ensure professional installation with quality, precision, and minimal disruption to your daily life.",
        "icon": "Wrench"
    },
    {
        "id": 6,
        "title": "Proven Reliability",
        "description": "Your smart home should work every single time. We design systems that are rock-solid reliable with professional-grade equipment.",
        "icon": "CheckCircle"
    }
]

pricing_data = [
    {
        "id": 1,
        "name": "Essential Package",
        "description": "Perfect entry into cinema-quality entertainment",
        "price": "2,29,000",
        "popular": False,
        "features": [
            "Includes Speakers & Subwoofer",
            "AVR & Upscaling 4k Projector",
            "Cables & Projector Mount, HDMI"
        ]
    },
    {
        "id": 2,
        "name": "Budget Package",
        "description": "High-end speakers with acoustic treatment",
        "price": "6,99,000",
        "popular": False,
        "features": [
            "Includes High End Speakers",
            "Basic Acoustic ( Wall Paneling )",
            "5 Years Warranty on Speaker"
        ]
    },
    {
        "id": 3,
        "name": "Silver Package",
        "description": "Dolby Atmos with complete acoustic setup",
        "price": "9,99,000",
        "popular": True,
        "features": [
            "5.1.2 Dolby Atmos System",
            "4k Projector with Edge Less Screen",
            "4 Layer Acoustics including Recliners"
        ]
    },
    {
        "id": 4,
        "name": "Gold Package",
        "description": "The pinnacle of home cinema luxury",
        "price": "12,39,000",
        "popular": False,
        "features": [
            "7.1.2 Dolby Atmos System",
            "300 Watts Premium Speakers",
            "6 Layers Acoustic treatment with Recliners"
        ]
    }
]

process_data = [
    {
        "id": 1,
        "title": "Free Consultation & Assessment",
        "description": "Start your smart home journey with a free consultation and expert guidance. We understand your needs, lifestyle, and budget."
    },
    {
        "id": 2,
        "title": "Custom Design & Proposal",
        "description": "We create a custom smart home design with transparent pricing and detailed proposals. What you see is what you pay."
    },
    {
        "id": 3,
        "title": "Approval & Scheduling",
        "description": "After approval, we schedule installation with a dedicated project manager to ensure smooth execution."
    },
    {
        "id": 4,
        "title": "Professional Installation",
        "description": "Certified technicians install your smart home with quality, precision, and complete project manager support."
    },
    {
        "id": 5,
        "title": "Training & Lifetime Support",
        "description": "We provide comprehensive training, documentation, app access, and 24/7 support—your lifetime partner."
    }
]

projects_data = [
    {
        "id": 1,
        "name": "Adarsh Tranquil",
        "category": "Home Theatre",
        "description": "Premium home theatre with Dolby Atmos and acoustic treatment",
        "image": "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/g52fv2rb_adarsh%20tranquil.jpg"
    },
    {
        "id": 2,
        "name": "DSR Elixir",
        "category": "Full Automation",
        "description": "Complete smart home automation with lighting and security",
        "image": "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/529o4d5j_DSR%20Elixir.avif"
    },
    {
        "id": 3,
        "name": "Nikoo Homes",
        "category": "Security System",
        "description": "Advanced security system with 24/7 monitoring",
        "image": "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/vz9t4rbo_Nikoo%20Homes.jpg"
    },
    {
        "id": 4,
        "name": "NCC Retreat",
        "category": "Home Theatre",
        "description": "Luxury cinema room with custom seating",
        "image": "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/x8pg0gdw_NCC%20Retreat.jpg"
    },
    {
        "id": 5,
        "name": "Karle Zenith",
        "category": "Smart Lighting",
        "description": "Intelligent lighting system throughout the residence",
        "image": "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/rct5wa5v_Karle%20Zenith%20Residence.png"
    },
    {
        "id": 6,
        "name": "SNN Enternia",
        "category": "Full Automation",
        "description": "Integrated smart home with voice control",
        "image": "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/ybgjk63j_Snn%20eternia.jpeg"
    },
    {
        "id": 7,
        "name": "Shobha City",
        "category": "Home Theatre",
        "description": "State-of-the-art cinema with premium acoustics",
        "image": "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/7c5wola2_Shobha%20city.webp"
    },
    {
        "id": 8,
        "name": "RR Signature",
        "category": "Security System",
        "description": "Comprehensive security with AI monitoring",
        "image": "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/gfdgg2zf_RR%20Signature.jpg"
    },
    {
        "id": 9,
        "name": "Leela Residency",
        "category": "Full Automation",
        "description": "Complete home automation solution",
        "image": "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/qp4rbl2t_leela%20residency.jpg"
    },
    {
        "id": 10,
        "name": "Shriram Luxor",
        "category": "Smart Lighting",
        "description": "Advanced lighting control system",
        "image": "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/bx1r9pe4_shriram%20luxor.png"
    },
    {
        "id": 11,
        "name": "Orchid Picadilly",
        "category": "Home Theatre",
        "description": "Premium entertainment setup with Dolby Atmos",
        "image": "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/f82kgy6b_orchid%20picadily.jpg"
    },
    {
        "id": 12,
        "name": "Prestige Lake side Habitat",
        "category": "Full Automation",
        "description": "Smart home with integrated automation",
        "image": "https://customer-assets.emergentagent.com/job_8365fb75-1c5e-4d42-8737-cfeb86f573cf/artifacts/kjtm3bvq_prestige%20lake%20side%20habitat.webp"
    }
]

testimonials_data = [
    {
        "id": 1,
        "name": "Pallav Godeswar",
        "location": "Bangalore",
        "service": "Home Theatre Installation",
        "review": "Got my custom home theatre done, and it's amazing! The team was professional, listened to my needs, and delivered exactly what I envisioned. It feels like a mini-cinema at home. Highly recommend them!",
        "avatar": "P",
        "rating": 5
    },
    {
        "id": 2,
        "name": "Anju",
        "location": "Bangalore",
        "service": "Home Networking Services",
        "review": "Fantastic job on the home networking services. Everything is now up to the speed!",
        "avatar": "A",
        "rating": 5
    },
    {
        "id": 3,
        "name": "Anusha",
        "location": "Bangalore",
        "service": "Home Automation",
        "review": "The home automation solutions from Qloud Tech are impressive. They were quick and professional, and my home now has a seamless automation system. Highly recommend!",
        "avatar": "A",
        "rating": 5
    },
    {
        "id": 4,
        "name": "Soughandika",
        "location": "Bangalore",
        "service": "CCTV Installation",
        "review": "Great experience with Qloud tech for CCTV installation services. The team was efficient, and the cameras are working perfectly. My home feels much safer now.",
        "avatar": "S",
        "rating": 5
    },
    {
        "id": 5,
        "name": "Harshit",
        "location": "Bangalore",
        "service": "Smart Lighting Solutions",
        "review": "Qloud Tech really provided smart lighting solutions. The setup was also quick and the lights look amazing. Great service overall!",
        "avatar": "H",
        "rating": 5
    },
    {
        "id": 6,
        "name": "Himanshu",
        "location": "Bangalore",
        "service": "Home Theatre Installation",
        "review": "Excellent home theatre designing and installation. Professional and reliable team.",
        "avatar": "H",
        "rating": 5
    },
    {
        "id": 7,
        "name": "Mahi Sinha",
        "location": "Bangalore",
        "service": "Custom Home Automation",
        "review": "Qloud Tech's custom home automation systems were tailored perfectly to my needs. The installation was smooth, and everything is worked as expected. Their team were professional and the results are impressive.",
        "avatar": "M",
        "rating": 5
    },
    {
        "id": 8,
        "name": "Rohit",
        "location": "Bangalore",
        "service": "Home Theatre Setup",
        "review": "The team did a great job with our Home Theatre set up. Quick and efficient service😀",
        "avatar": "R",
        "rating": 5
    }
]

faqs_data = [
    {
        "id": 1,
        "question": "How long does a home theatre installation take?",
        "answer": "Installation timelines vary based on scope. Basic automation for a flat typically takes 2–3 hours, while a villa installation may require 2–3 days. For customized solutions with extensive integration, the process can take 1–2 weeks."
    },
    {
        "id": 2,
        "question": "Can I automate my existing home without rewiring?",
        "answer": "Absolutely! We specialize in retrofit solutions using wireless technologies and smart devices that don't require extensive rewiring or wall damage. Our solutions preserve your home's aesthetics while adding modern smart capabilities."
    },
    {
        "id": 3,
        "question": "Will home automation increase my electricity bill?",
        "answer": "Actually, the opposite! Smart home automation typically reduces electricity bills by 20-30% through intelligent energy management. Automated lighting turns off unused lights, smart thermostats optimize climate control, and energy monitoring helps identify wasteful consumption."
    },
    {
        "id": 4,
        "question": "Is home automation secure? Can it be hacked?",
        "answer": "Security is our top priority. We follow industry best practices including encrypted communications, secure network setup, strong authentication, and regular security updates. While no technology is 100% hack-proof, properly configured smart home systems are highly secure."
    },
    {
        "id": 5,
        "question": "Which is better: wired or wireless home automation?",
        "answer": "Both have advantages. Wired systems offer maximum reliability and are ideal for new construction. Wireless systems are perfect for existing homes, offering flexibility and easier installation. Many modern installations use a hybrid approach combining both for optimal results."
    },
    {
        "id": 6,
        "question": "Do I need internet for home automation to work?",
        "answer": "While internet enhances features like remote access and voice control, many automation functions work locally without internet. We design systems with local control capabilities so essential functions continue working even during internet outages."
    }
]
