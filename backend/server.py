from fastapi import FastAPI, APIRouter, HTTPException, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import json
import logging
from pathlib import Path
from typing import List, Optional
from models import (
    Service, Benefit, PricingPackage, ProcessStep, 
    Project, Testimonial, FAQ, ContactInquiry, ContactInquiryResponse,
    ShopEnquiry
)
from seed_data import (
    services_data, benefits_data, pricing_data, process_data,
    projects_data, testimonials_data, faqs_data
)
from datetime import datetime
import uuid
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

SHOP_CATALOG_PATH = ROOT_DIR / "shop_catalog.json"

def load_shop_catalog():
    if not SHOP_CATALOG_PATH.exists():
        return {"version": "missing", "categories": [], "products": []}
    return json.loads(SHOP_CATALOG_PATH.read_text(encoding="utf-8"))

SHOP_CATALOG = load_shop_catalog()

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Email configuration
SMTP_EMAIL = os.environ.get('SMTP_EMAIL', '')
SMTP_PASSWORD = os.environ.get('SMTP_PASSWORD', '')
NOTIFICATION_EMAIL = os.environ.get('NOTIFICATION_EMAIL', '')

# Configure logging early
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

def send_contact_email(fullName: str, email: str, phone: str, service: str, message: str):
    """Send email notification for new contact form submission"""
    try:
        if not all([SMTP_EMAIL, SMTP_PASSWORD, NOTIFICATION_EMAIL]):
            logger.warning("Email configuration missing, skipping email notification")
            return False
        
        # Create email content
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'🏠 New Contact Inquiry from {fullName} - Qloud Tech'
        msg['From'] = SMTP_EMAIL
        msg['To'] = NOTIFICATION_EMAIL
        
        # Plain text version
        text_content = f"""
New Contact Form Submission

Name: {fullName}
Email: {email}
Phone: {phone}
Service Interested: {service}

Message:
{message if message else 'No message provided'}

---
This inquiry was submitted via the Qloud Tech website contact form.
        """
        
        # HTML version
        html_content = f"""
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background: linear-gradient(135deg, #0a0e1a 0%, #1a2332 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }}
                .header h1 {{ margin: 0; color: #00bcd4; }}
                .content {{ background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }}
                .field {{ margin-bottom: 15px; }}
                .label {{ font-weight: bold; color: #00bcd4; }}
                .value {{ margin-top: 5px; }}
                .message-box {{ background: white; padding: 15px; border-left: 4px solid #00bcd4; margin-top: 10px; }}
                .footer {{ background: #0a0e1a; color: #888; padding: 15px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🏠 New Contact Inquiry</h1>
                    <p style="margin: 10px 0 0 0; color: #ccc;">Someone is interested in your services!</p>
                </div>
                <div class="content">
                    <div class="field">
                        <div class="label">👤 Name</div>
                        <div class="value">{fullName}</div>
                    </div>
                    <div class="field">
                        <div class="label">📧 Email</div>
                        <div class="value"><a href="mailto:{email}">{email}</a></div>
                    </div>
                    <div class="field">
                        <div class="label">📱 Phone</div>
                        <div class="value"><a href="tel:{phone}">{phone}</a></div>
                    </div>
                    <div class="field">
                        <div class="label">🎯 Service Interested</div>
                        <div class="value">{service}</div>
                    </div>
                    <div class="field">
                        <div class="label">💬 Message</div>
                        <div class="message-box">{message if message else 'No message provided'}</div>
                    </div>
                </div>
                <div class="footer">
                    <p>This inquiry was submitted via the Qloud Tech website contact form.</p>
                    <p style="color: #00bcd4;">Qloud Tech - Smart Home & Theatre Solutions</p>
                </div>
            </div>
        </body>
        </html>
        """
        
        msg.attach(MIMEText(text_content, 'plain'))
        msg.attach(MIMEText(html_content, 'html'))
        
        # Send email via Gmail SMTP
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(SMTP_EMAIL, SMTP_PASSWORD)
            server.sendmail(SMTP_EMAIL, NOTIFICATION_EMAIL, msg.as_string())
        
        logger.info(f"Email notification sent successfully for inquiry from {fullName}")
        return True
        
    except Exception as e:
        logger.error(f"Failed to send email notification: {e}")
        return False

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Seed database on startup
@app.on_event("startup")
async def seed_database():
    try:
        # Check if collections are empty and seed if needed
        if await db.services.count_documents({}) == 0:
            await db.services.insert_many(services_data)
            logger.info("Seeded services collection")
        
        if await db.benefits.count_documents({}) == 0:
            await db.benefits.insert_many(benefits_data)
            logger.info("Seeded benefits collection")
        
        if await db.pricing.count_documents({}) == 0:
            await db.pricing.insert_many(pricing_data)
            logger.info("Seeded pricing collection")
        
        if await db.process.count_documents({}) == 0:
            await db.process.insert_many(process_data)
            logger.info("Seeded process collection")
        
        if await db.projects.count_documents({}) == 0:
            await db.projects.insert_many(projects_data)
            logger.info("Seeded projects collection")
        
        if await db.testimonials.count_documents({}) == 0:
            await db.testimonials.insert_many(testimonials_data)
            logger.info("Seeded testimonials collection")
        
        if await db.faqs.count_documents({}) == 0:
            await db.faqs.insert_many(faqs_data)
            logger.info("Seeded faqs collection")

        catalog_version = SHOP_CATALOG.get("version")
        stored = await db.shop_meta.find_one({"key": "catalogVersion"}, {"_id": 0})
        if not stored or stored.get("value") != catalog_version:
            await db.shop_products.delete_many({})
            await db.shop_categories.delete_many({})
            if SHOP_CATALOG.get("categories"):
                await db.shop_categories.insert_many(SHOP_CATALOG["categories"])
            if SHOP_CATALOG.get("products"):
                await db.shop_products.insert_many(SHOP_CATALOG["products"])
            await db.shop_meta.update_one(
                {"key": "catalogVersion"},
                {"$set": {"key": "catalogVersion", "value": catalog_version}},
                upsert=True,
            )
            logger.info("Seeded shop catalog %s (%s products)", catalog_version, len(SHOP_CATALOG.get("products") or []))
        
        logger.info("Database seeding completed")
    except Exception as e:
        logger.error(f"Error seeding database: {e}")

# API Routes
@api_router.get("/")
async def root():
    return {"message": "Qloud Tech API v1.0"}

@api_router.get("/services", response_model=dict)
async def get_services():
    try:
        services = await db.services.find({}, {"_id": 0}).sort("id", 1).to_list(100)
        return {"services": services}
    except Exception as e:
        logger.error(f"Error fetching services: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch services")

@api_router.get("/why-choose-us", response_model=dict)
async def get_benefits():
    try:
        benefits = await db.benefits.find({}, {"_id": 0}).sort("id", 1).to_list(100)
        return {"benefits": benefits}
    except Exception as e:
        logger.error(f"Error fetching benefits: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch benefits")

@api_router.get("/pricing", response_model=dict)
async def get_pricing():
    try:
        packages = await db.pricing.find({}, {"_id": 0}).sort("id", 1).to_list(100)
        return {"packages": packages}
    except Exception as e:
        logger.error(f"Error fetching pricing: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch pricing")

@api_router.get("/process", response_model=dict)
async def get_process():
    try:
        steps = await db.process.find({}, {"_id": 0}).sort("id", 1).to_list(100)
        return {"steps": steps}
    except Exception as e:
        logger.error(f"Error fetching process: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch process")

@api_router.get("/projects", response_model=dict)
async def get_projects(category: Optional[str] = "All"):
    try:
        query = {} if category == "All" else {"category": category}
        projects = await db.projects.find(query, {"_id": 0}).to_list(100)
        return {"projects": projects}
    except Exception as e:
        logger.error(f"Error fetching projects: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch projects")

@api_router.get("/testimonials", response_model=dict)
async def get_testimonials():
    try:
        testimonials = await db.testimonials.find({}, {"_id": 0}).to_list(100)
        return {"testimonials": testimonials}
    except Exception as e:
        logger.error(f"Error fetching testimonials: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch testimonials")

@api_router.get("/faqs", response_model=dict)
async def get_faqs():
    try:
        faqs = await db.faqs.find({}, {"_id": 0}).sort("id", 1).to_list(100)
        return {"faqs": faqs}
    except Exception as e:
        logger.error(f"Error fetching FAQs: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch FAQs")

@api_router.post("/contact", response_model=dict)
async def create_contact_inquiry(inquiry: ContactInquiry, background_tasks: BackgroundTasks):
    try:
        inquiry_dict = inquiry.dict()
        inquiry_dict["id"] = str(uuid.uuid4())
        inquiry_dict["status"] = "new"
        inquiry_dict["createdAt"] = datetime.utcnow()
        
        # Create a copy for response (without MongoDB _id)
        response_inquiry = inquiry_dict.copy()
        
        result = await db.contact_inquiries.insert_one(inquiry_dict)
        
        if result.inserted_id:
            # Send email notification in background
            background_tasks.add_task(
                send_contact_email,
                inquiry.fullName,
                inquiry.email,
                inquiry.phone,
                inquiry.service,
                inquiry.message or ""
            )
            
            return {
                "success": True,
                "message": "Thank you for contacting us! We'll get back to you within 24 hours.",
                "inquiry": response_inquiry
            }
        else:
            raise HTTPException(status_code=500, detail="Failed to create inquiry")
    except Exception as e:
        logger.error(f"Error creating contact inquiry: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

@api_router.get("/shop/catalog", response_model=dict)
async def get_shop_catalog():
    return SHOP_CATALOG

@api_router.get("/shop/categories", response_model=dict)
async def get_shop_categories():
    try:
        categories = await db.shop_categories.find({}, {"_id": 0}).to_list(50)
        if not categories:
            categories = SHOP_CATALOG.get("categories", [])
        return {"categories": categories}
    except Exception as e:
        logger.error(f"Error fetching shop categories: {e}")
        return {"categories": SHOP_CATALOG.get("categories", [])}

@api_router.get("/shop/products", response_model=dict)
async def get_shop_products(category: Optional[str] = None):
    try:
        query = {"category": category} if category else {}
        products = await db.shop_products.find(query, {"_id": 0}).to_list(200)
        if not products:
            products = SHOP_CATALOG.get("products", [])
            if category:
                products = [p for p in products if p.get("category") == category]
        return {"products": products, "version": SHOP_CATALOG.get("version")}
    except Exception as e:
        logger.error(f"Error fetching shop products: {e}")
        products = SHOP_CATALOG.get("products", [])
        if category:
            products = [p for p in products if p.get("category") == category]
        return {"products": products, "version": SHOP_CATALOG.get("version")}

@api_router.get("/shop/products/{slug}", response_model=dict)
async def get_shop_product(slug: str):
    try:
        product = await db.shop_products.find_one({"slug": slug}, {"_id": 0})
        if not product:
            product = next((p for p in SHOP_CATALOG.get("products", []) if p.get("slug") == slug), None)
        if not product:
            raise HTTPException(status_code=404, detail="Product not found")
        return {"product": product}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching shop product {slug}: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch product")

@api_router.post("/shop/enquiries", response_model=dict)
async def create_shop_enquiry(enquiry: ShopEnquiry, background_tasks: BackgroundTasks):
    try:
        payload = enquiry.dict()
        payload["id"] = str(uuid.uuid4())
        payload["status"] = "new"
        payload["createdAt"] = datetime.utcnow()
        payload["source"] = "shop"
        await db.shop_enquiries.insert_one({**payload})
        lines = "\n".join(
            f"- {item.name} ({item.sku}) x{item.quantity} — ₹{item.mrp:,}"
            for item in enquiry.items
        )
        background_tasks.add_task(
            send_contact_email,
            enquiry.fullName,
            enquiry.email or "shop@qloudsmarthomes.com",
            enquiry.phone,
            "Digital Door Locks Shop",
            f"{enquiry.message or ''}\n\nCart:\n{lines}".strip()
        )
        response = {k: v for k, v in payload.items() if k != "_id"}
        return {
            "success": True,
            "message": "Quote request received. We will confirm stock and installation on WhatsApp.",
            "enquiry": response
        }
    except Exception as e:
        logger.error(f"Error creating shop enquiry: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit shop enquiry")

@api_router.get("/contact", response_model=dict)
async def get_contact_inquiries():
    try:
        inquiries = await db.contact_inquiries.find({}, {"_id": 0}).sort("createdAt", -1).to_list(1000)
        return {"inquiries": inquiries}
    except Exception as e:
        logger.error(f"Error fetching contact inquiries: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch inquiries")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()