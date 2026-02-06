# API Contracts & Backend Implementation Plan

## Overview
Convert the frontend-only Qloud Tech website into a full-stack application with MongoDB backend.

## Current Mocked Data (in mockData.js)
1. **Services** - 6 service offerings
2. **Why Choose Us** - 6 benefit points
3. **Pricing Packages** - 4 pricing tiers
4. **Process Steps** - 5-step process
5. **Projects** - 6 portfolio projects with categories
6. **Testimonials** - 3 client reviews
7. **FAQs** - 6 frequently asked questions
8. **Contact Form** - Lead capture form

## Backend Implementation Strategy

### Phase 1: Static Content APIs (Read-Only)
These endpoints will serve pre-populated content that admins can manage later.

#### API Endpoints

**1. GET /api/services**
- Returns: List of all services
- Response: `{ services: [...] }`

**2. GET /api/why-choose-us**
- Returns: List of benefits
- Response: `{ benefits: [...] }`

**3. GET /api/pricing**
- Returns: Pricing packages
- Response: `{ packages: [...] }`

**4. GET /api/process**
- Returns: Process steps
- Response: `{ steps: [...] }`

**5. GET /api/projects**
- Query params: `?category=All|Home Theatre|Full Automation|Security System|Smart Lighting`
- Returns: Filtered projects
- Response: `{ projects: [...] }`

**6. GET /api/testimonials**
- Returns: Client testimonials
- Response: `{ testimonials: [...] }`

**7. GET /api/faqs**
- Returns: FAQ list
- Response: `{ faqs: [...] }`

### Phase 2: Dynamic Content APIs (Write Operations)

**8. POST /api/contact**
- Body: `{ fullName, email, phone, service, message }`
- Creates a contact inquiry
- Response: `{ success: true, inquiry: {...} }`

**9. GET /api/contact**
- Returns: All contact inquiries (for admin)
- Response: `{ inquiries: [...] }`

## MongoDB Models

### 1. Service Model
```
{
  title: String,
  description: String,
  image: String,
  icon: String,
  features: [String],
  order: Number
}
```

### 2. Benefit Model (Why Choose Us)
```
{
  title: String,
  description: String,
  icon: String,
  order: Number
}
```

### 3. PricingPackage Model
```
{
  name: String,
  description: String,
  price: String,
  popular: Boolean,
  features: [String],
  order: Number
}
```

### 4. ProcessStep Model
```
{
  title: String,
  description: String,
  order: Number
}
```

### 5. Project Model
```
{
  name: String,
  category: String,
  description: String,
  image: String,
  createdAt: Date
}
```

### 6. Testimonial Model
```
{
  name: String,
  location: String,
  service: String,
  review: String,
  avatar: String,
  createdAt: Date
}
```

### 7. FAQ Model
```
{
  question: String,
  answer: String,
  order: Number
}
```

### 8. ContactInquiry Model
```
{
  fullName: String,
  email: String,
  phone: String,
  service: String,
  message: String,
  status: String (new/contacted/closed),
  createdAt: Date
}
```

## Frontend Integration Changes

### Files to Update:
1. **mockData.js** - Remove after backend integration
2. **All component files** - Replace mock data imports with API calls
3. **Create API service file** - `/app/frontend/src/services/api.js`

### API Service Structure:
```javascript
// services/api.js
const API_URL = process.env.REACT_APP_BACKEND_URL + '/api';

export const fetchServices = () => axios.get(`${API_URL}/services`)
export const fetchBenefits = () => axios.get(`${API_URL}/why-choose-us`)
export const fetchPricing = () => axios.get(`${API_URL}/pricing`)
export const fetchProcess = () => axios.get(`${API_URL}/process`)
export const fetchProjects = (category) => axios.get(`${API_URL}/projects?category=${category}`)
export const fetchTestimonials = () => axios.get(`${API_URL}/testimonials`)
export const fetchFAQs = () => axios.get(`${API_URL}/faqs`)
export const submitContact = (data) => axios.post(`${API_URL}/contact`, data)
```

### Component Updates:
- Use `useState` and `useEffect` to fetch data on component mount
- Show loading states while fetching
- Handle errors gracefully

## Database Seeding

Create a seed script to populate initial data from mockData.js into MongoDB collections.

## Implementation Order:
1. Create MongoDB models
2. Create API routes in backend
3. Seed database with initial data
4. Create API service file in frontend
5. Update components to use API calls
6. Test all endpoints
7. Remove mockData.js

## Notes:
- All static content (services, pricing, etc.) will be pre-populated via seed script
- Contact form is the only user-facing write operation
- Future enhancement: Admin panel to manage content
