from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import List, Optional
from models import (
    Service, Benefit, PricingPackage, ProcessStep, 
    Project, Testimonial, FAQ, ContactInquiry, ContactInquiryResponse
)
from seed_data import (
    services_data, benefits_data, pricing_data, process_data,
    projects_data, testimonials_data, faqs_data
)
from datetime import datetime
import uuid


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

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
async def create_contact_inquiry(inquiry: ContactInquiry):
    try:
        inquiry_dict = inquiry.dict()
        inquiry_dict["id"] = str(uuid.uuid4())
        inquiry_dict["status"] = "new"
        inquiry_dict["createdAt"] = datetime.utcnow()
        
        # Create a copy for response (without MongoDB _id)
        response_inquiry = inquiry_dict.copy()
        
        result = await db.contact_inquiries.insert_one(inquiry_dict)
        
        if result.inserted_id:
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

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()