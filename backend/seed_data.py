# Seed data for MongoDB collections

services_data = [
    {
        "id": 1,
        "title": "Customized Home Theatre",
        "description": "Transform your living space into a cinematic experience with immersive sound, stunning visuals, and personalized smart controls. From Dolby Atmos systems to 4K projection.",
        "image": "https://images.unsplash.com/photo-1635788798247-92a15f830a3b?w=800",
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
        "image": "https://images.pexels.com/photos/28940512/pexels-photo-28940512.jpeg?w=800",
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
        "name": "Essential",
        "description": "Perfect entry into cinema-quality entertainment",
        "price": "₹2,29,000",
        "popular": False,
        "features": [
            "Speakers & Subwoofer",
            "AVR & Upscaling 4K Projector",
            "Cables & Projector Mount",
            "HDMI Connectivity",
            "Basic Installation",
            "1 Year Warranty"
        ]
    },
    {
        "id": 2,
        "name": "Premium",
        "description": "High-end speakers with acoustic treatment",
        "price": "₹6,99,000",
        "popular": False,
        "features": [
            "High-End Speakers",
            "Basic Acoustic Wall Paneling",
            "5.1 Surround System",
            "Premium AVR",
            "Professional Calibration",
            "5 Years Warranty on Speakers"
        ]
    },
    {
        "id": 3,
        "name": "Signature",
        "description": "Dolby Atmos with complete acoustic setup",
        "price": "₹9,99,000",
        "popular": True,
        "features": [
            "5.1.2 Dolby Atmos System",
            "4K Projector with Edgeless Screen",
            "4 Layer Acoustic Treatment",
            "Premium Recliners Included",
            "Smart Lighting Integration",
            "Lifetime Support"
        ]
    },
    {
        "id": 4,
        "name": "Ultimate",
        "description": "The pinnacle of home cinema luxury",
        "price": "₹12,39,000",
        "popular": False,
        "features": [
            "7.1.2 Dolby Atmos System",
            "300 Watts Premium Speakers",
            "6 Layers Acoustic Treatment",
            "Luxury Recliners with Massage",
            "Automated Curtains & Lighting",
            "Lifetime Priority Support"
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
        "name": "Concorde Neo",
        "category": "Home Theatre",
        "description": "Premium home theatre with Dolby Atmos and acoustic treatment",
        "image": "https://images.unsplash.com/photo-1710131459450-7c384b8be18f?w=800"
    },
    {
        "id": 2,
        "name": "Sobha Crystal Meadows",
        "category": "Full Automation",
        "description": "Complete smart home automation with lighting and security",
        "image": "https://images.unsplash.com/photo-1608377205619-03a0b4c4e270?w=800"
    },
    {
        "id": 3,
        "name": "Prestige Serenity Shores",
        "category": "Security System",
        "description": "Advanced security system with 24/7 monitoring",
        "image": "https://images.pexels.com/photos/7508684/pexels-photo-7508684.jpeg?w=800"
    },
    {
        "id": 4,
        "name": "TVS Emerald Cascadia",
        "category": "Home Theatre",
        "description": "Luxury cinema room with custom seating",
        "image": "https://images.unsplash.com/flagged/photo-1572609239482-d3a83f976aa0?w=800"
    },
    {
        "id": 5,
        "name": "Godrej Lakeside Orchard",
        "category": "Smart Lighting",
        "description": "Intelligent lighting system throughout the residence",
        "image": "https://images.unsplash.com/photo-1606170033648-5d55a3edf314?w=800"
    },
    {
        "id": 6,
        "name": "Aston Park Residences",
        "category": "Full Automation",
        "description": "Integrated smart home with voice control",
        "image": "https://images.pexels.com/photos/32967485/pexels-photo-32967485.jpeg?w=800"
    }
]

testimonials_data = [
    {
        "id": 1,
        "name": "Rajesh Kumar",
        "location": "Bangalore",
        "service": "Home Theatre Installation",
        "review": "Absolutely thrilled with our home theatre! The team at IN Automations transformed our living room into a cinema experience. Professional service and transparent pricing.",
        "avatar": "R"
    },
    {
        "id": 2,
        "name": "Priya Sharma",
        "location": "Bangalore",
        "service": "Smart Home Automation",
        "review": "From consultation to installation, everything was seamless. The smart lighting system has completely changed how we use our home. Highly recommend!",
        "avatar": "P"
    },
    {
        "id": 3,
        "name": "Amit Patel",
        "location": "Bangalore",
        "service": "Security System",
        "review": "The security system gives us complete peace of mind. Installation was quick, and the lifetime support is invaluable. Best decision we made for our home.",
        "avatar": "A"
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
