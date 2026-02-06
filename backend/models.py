from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime

class Service(BaseModel):
    id: int
    title: str
    description: str
    image: str
    icon: str
    features: List[str]

class Benefit(BaseModel):
    id: int
    title: str
    description: str
    icon: str

class PricingPackage(BaseModel):
    id: int
    name: str
    description: str
    price: str
    popular: bool
    features: List[str]

class ProcessStep(BaseModel):
    id: int
    title: str
    description: str

class Project(BaseModel):
    id: int
    name: str
    category: str
    description: str
    image: str

class Testimonial(BaseModel):
    id: int
    name: str
    location: str
    service: str
    review: str
    avatar: str

class FAQ(BaseModel):
    id: int
    question: str
    answer: str

class ContactInquiry(BaseModel):
    fullName: str
    email: EmailStr
    phone: str
    service: str
    message: Optional[str] = ""

class ContactInquiryResponse(ContactInquiry):
    id: str
    status: str = "new"
    createdAt: datetime = Field(default_factory=datetime.utcnow)
