#!/usr/bin/env python3
"""
Comprehensive Backend API Testing for Qloud Tech
Tests all API endpoints to verify functionality and data integrity
"""

import requests
import json
import sys
from datetime import datetime

# Backend URL from frontend environment
BACKEND_URL = "https://theatre-ops.preview.emergentagent.com/api"

class QloudTechAPITester:
    def __init__(self):
        self.base_url = BACKEND_URL
        self.test_results = []
        self.failed_tests = []
        
    def log_test(self, test_name, success, message, response_data=None):
        """Log test results"""
        result = {
            "test": test_name,
            "success": success,
            "message": message,
            "timestamp": datetime.now().isoformat(),
            "response_data": response_data
        }
        self.test_results.append(result)
        
        if not success:
            self.failed_tests.append(result)
            
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}: {message}")
        
    def test_root_endpoint(self):
        """Test GET /api/ - Root endpoint"""
        try:
            response = requests.get(f"{self.base_url}/", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "message" in data and "Qloud Tech API" in data["message"]:
                    self.log_test("Root Endpoint", True, f"API version message returned: {data['message']}", data)
                else:
                    self.log_test("Root Endpoint", False, f"Unexpected response format: {data}", data)
            else:
                self.log_test("Root Endpoint", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Root Endpoint", False, f"Request failed: {str(e)}")
    
    def test_services_endpoint(self):
        """Test GET /api/services - Should return 6 services"""
        try:
            response = requests.get(f"{self.base_url}/services", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "services" in data:
                    services = data["services"]
                    if len(services) == 6:
                        # Verify service structure
                        required_fields = ["id", "title", "description", "image", "icon", "features"]
                        first_service = services[0]
                        missing_fields = [field for field in required_fields if field not in first_service]
                        
                        if not missing_fields:
                            self.log_test("Services Endpoint", True, f"6 services returned with correct structure", {"count": len(services), "sample": first_service})
                        else:
                            self.log_test("Services Endpoint", False, f"Missing fields in service: {missing_fields}", data)
                    else:
                        self.log_test("Services Endpoint", False, f"Expected 6 services, got {len(services)}", data)
                else:
                    self.log_test("Services Endpoint", False, f"No 'services' key in response: {data}", data)
            else:
                self.log_test("Services Endpoint", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Services Endpoint", False, f"Request failed: {str(e)}")
    
    def test_benefits_endpoint(self):
        """Test GET /api/why-choose-us - Should return benefits"""
        try:
            response = requests.get(f"{self.base_url}/why-choose-us", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "benefits" in data:
                    benefits = data["benefits"]
                    if len(benefits) >= 6:
                        # Verify benefit structure
                        required_fields = ["id", "title", "description", "icon"]
                        first_benefit = benefits[0]
                        missing_fields = [field for field in required_fields if field not in first_benefit]
                        
                        if not missing_fields:
                            self.log_test("Benefits Endpoint", True, f"{len(benefits)} benefits returned with correct structure", {"count": len(benefits), "sample": first_benefit})
                        else:
                            self.log_test("Benefits Endpoint", False, f"Missing fields in benefit: {missing_fields}", data)
                    else:
                        self.log_test("Benefits Endpoint", False, f"Expected at least 6 benefits, got {len(benefits)}", data)
                else:
                    self.log_test("Benefits Endpoint", False, f"No 'benefits' key in response: {data}", data)
            else:
                self.log_test("Benefits Endpoint", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Benefits Endpoint", False, f"Request failed: {str(e)}")
    
    def test_pricing_endpoint(self):
        """Test GET /api/pricing - Should return 4 pricing packages"""
        try:
            response = requests.get(f"{self.base_url}/pricing", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "packages" in data:
                    packages = data["packages"]
                    if len(packages) == 4:
                        # Verify package structure
                        required_fields = ["id", "name", "description", "price", "popular", "features"]
                        first_package = packages[0]
                        missing_fields = [field for field in required_fields if field not in first_package]
                        
                        if not missing_fields:
                            self.log_test("Pricing Endpoint", True, f"4 pricing packages returned with correct structure", {"count": len(packages), "sample": first_package})
                        else:
                            self.log_test("Pricing Endpoint", False, f"Missing fields in package: {missing_fields}", data)
                    else:
                        self.log_test("Pricing Endpoint", False, f"Expected 4 packages, got {len(packages)}", data)
                else:
                    self.log_test("Pricing Endpoint", False, f"No 'packages' key in response: {data}", data)
            else:
                self.log_test("Pricing Endpoint", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Pricing Endpoint", False, f"Request failed: {str(e)}")
    
    def test_process_endpoint(self):
        """Test GET /api/process - Should return 5 process steps"""
        try:
            response = requests.get(f"{self.base_url}/process", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "steps" in data:
                    steps = data["steps"]
                    if len(steps) == 5:
                        # Verify step structure
                        required_fields = ["id", "title", "description"]
                        first_step = steps[0]
                        missing_fields = [field for field in required_fields if field not in first_step]
                        
                        if not missing_fields:
                            self.log_test("Process Endpoint", True, f"5 process steps returned with correct structure", {"count": len(steps), "sample": first_step})
                        else:
                            self.log_test("Process Endpoint", False, f"Missing fields in step: {missing_fields}", data)
                    else:
                        self.log_test("Process Endpoint", False, f"Expected 5 steps, got {len(steps)}", data)
                else:
                    self.log_test("Process Endpoint", False, f"No 'steps' key in response: {data}", data)
            else:
                self.log_test("Process Endpoint", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Process Endpoint", False, f"Request failed: {str(e)}")
    
    def test_projects_all_endpoint(self):
        """Test GET /api/projects?category=All - Should return all projects"""
        try:
            response = requests.get(f"{self.base_url}/projects?category=All", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "projects" in data:
                    projects = data["projects"]
                    if len(projects) >= 6:
                        # Verify project structure
                        required_fields = ["id", "name", "category", "description", "image"]
                        first_project = projects[0]
                        missing_fields = [field for field in required_fields if field not in first_project]
                        
                        if not missing_fields:
                            self.log_test("Projects All Endpoint", True, f"{len(projects)} projects returned with correct structure", {"count": len(projects), "sample": first_project})
                        else:
                            self.log_test("Projects All Endpoint", False, f"Missing fields in project: {missing_fields}", data)
                    else:
                        self.log_test("Projects All Endpoint", False, f"Expected at least 6 projects, got {len(projects)}", data)
                else:
                    self.log_test("Projects All Endpoint", False, f"No 'projects' key in response: {data}", data)
            else:
                self.log_test("Projects All Endpoint", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Projects All Endpoint", False, f"Request failed: {str(e)}")
    
    def test_projects_filtered_endpoint(self):
        """Test GET /api/projects?category=Home Theatre - Should filter by category"""
        try:
            response = requests.get(f"{self.base_url}/projects?category=Home Theatre", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "projects" in data:
                    projects = data["projects"]
                    # Verify all returned projects are Home Theatre category
                    home_theatre_projects = [p for p in projects if p.get("category") == "Home Theatre"]
                    
                    if len(home_theatre_projects) == len(projects) and len(projects) > 0:
                        self.log_test("Projects Filtered Endpoint", True, f"{len(projects)} Home Theatre projects returned", {"count": len(projects), "categories": [p.get("category") for p in projects]})
                    elif len(projects) == 0:
                        self.log_test("Projects Filtered Endpoint", False, "No Home Theatre projects found", data)
                    else:
                        self.log_test("Projects Filtered Endpoint", False, f"Filter not working properly. Expected all Home Theatre, got mixed categories", {"projects": [{"name": p.get("name"), "category": p.get("category")} for p in projects]})
                else:
                    self.log_test("Projects Filtered Endpoint", False, f"No 'projects' key in response: {data}", data)
            else:
                self.log_test("Projects Filtered Endpoint", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Projects Filtered Endpoint", False, f"Request failed: {str(e)}")
    
    def test_testimonials_endpoint(self):
        """Test GET /api/testimonials - Should return testimonials"""
        try:
            response = requests.get(f"{self.base_url}/testimonials", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "testimonials" in data:
                    testimonials = data["testimonials"]
                    if len(testimonials) >= 3:
                        # Verify testimonial structure
                        required_fields = ["id", "name", "location", "service", "review", "avatar"]
                        first_testimonial = testimonials[0]
                        missing_fields = [field for field in required_fields if field not in first_testimonial]
                        
                        if not missing_fields:
                            self.log_test("Testimonials Endpoint", True, f"{len(testimonials)} testimonials returned with correct structure", {"count": len(testimonials), "sample": first_testimonial})
                        else:
                            self.log_test("Testimonials Endpoint", False, f"Missing fields in testimonial: {missing_fields}", data)
                    else:
                        self.log_test("Testimonials Endpoint", False, f"Expected at least 3 testimonials, got {len(testimonials)}", data)
                else:
                    self.log_test("Testimonials Endpoint", False, f"No 'testimonials' key in response: {data}", data)
            else:
                self.log_test("Testimonials Endpoint", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Testimonials Endpoint", False, f"Request failed: {str(e)}")
    
    def test_faqs_endpoint(self):
        """Test GET /api/faqs - Should return FAQs"""
        try:
            response = requests.get(f"{self.base_url}/faqs", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "faqs" in data:
                    faqs = data["faqs"]
                    if len(faqs) >= 6:
                        # Verify FAQ structure
                        required_fields = ["id", "question", "answer"]
                        first_faq = faqs[0]
                        missing_fields = [field for field in required_fields if field not in first_faq]
                        
                        if not missing_fields:
                            self.log_test("FAQs Endpoint", True, f"{len(faqs)} FAQs returned with correct structure", {"count": len(faqs), "sample": first_faq})
                        else:
                            self.log_test("FAQs Endpoint", False, f"Missing fields in FAQ: {missing_fields}", data)
                    else:
                        self.log_test("FAQs Endpoint", False, f"Expected at least 6 FAQs, got {len(faqs)}", data)
                else:
                    self.log_test("FAQs Endpoint", False, f"No 'faqs' key in response: {data}", data)
            else:
                self.log_test("FAQs Endpoint", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("FAQs Endpoint", False, f"Request failed: {str(e)}")
    
    def test_contact_post_endpoint(self):
        """Test POST /api/contact - Test contact form submission"""
        try:
            contact_data = {
                "fullName": "Arjun Mehta",
                "email": "arjun.mehta@example.com",
                "phone": "+91 9876543210",
                "service": "home-theatre",
                "message": "I want to know more about home theatre solutions for my 3BHK apartment in Bangalore"
            }
            
            response = requests.post(f"{self.base_url}/contact", json=contact_data, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "message" in data:
                    # Verify response structure
                    if "inquiry" in data and data["inquiry"].get("id"):
                        self.log_test("Contact POST Endpoint", True, f"Contact form submitted successfully: {data['message']}", {"inquiry_id": data["inquiry"]["id"]})
                        return data["inquiry"]["id"]  # Return ID for GET test
                    else:
                        self.log_test("Contact POST Endpoint", False, f"Missing inquiry data in response: {data}", data)
                else:
                    self.log_test("Contact POST Endpoint", False, f"Unexpected response format: {data}", data)
            else:
                self.log_test("Contact POST Endpoint", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Contact POST Endpoint", False, f"Request failed: {str(e)}")
        
        return None
    
    def test_contact_get_endpoint(self):
        """Test GET /api/contact - Should return submitted contact inquiries"""
        try:
            response = requests.get(f"{self.base_url}/contact", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "inquiries" in data:
                    inquiries = data["inquiries"]
                    if len(inquiries) >= 0:  # Could be empty initially
                        if len(inquiries) > 0:
                            # Verify inquiry structure
                            required_fields = ["id", "fullName", "email", "phone", "service", "status", "createdAt"]
                            first_inquiry = inquiries[0]
                            missing_fields = [field for field in required_fields if field not in first_inquiry]
                            
                            if not missing_fields:
                                self.log_test("Contact GET Endpoint", True, f"{len(inquiries)} contact inquiries returned with correct structure", {"count": len(inquiries), "sample": first_inquiry})
                            else:
                                self.log_test("Contact GET Endpoint", False, f"Missing fields in inquiry: {missing_fields}", data)
                        else:
                            self.log_test("Contact GET Endpoint", True, "Contact inquiries endpoint working (empty list)", {"count": 0})
                    else:
                        self.log_test("Contact GET Endpoint", False, f"Unexpected inquiry count: {len(inquiries)}", data)
                else:
                    self.log_test("Contact GET Endpoint", False, f"No 'inquiries' key in response: {data}", data)
            else:
                self.log_test("Contact GET Endpoint", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Contact GET Endpoint", False, f"Request failed: {str(e)}")
    
    def run_all_tests(self):
        """Run all API tests"""
        print(f"🚀 Starting Qloud Tech Backend API Tests")
        print(f"📡 Testing against: {self.base_url}")
        print("=" * 60)
        
        # Test all endpoints
        self.test_root_endpoint()
        self.test_services_endpoint()
        self.test_benefits_endpoint()
        self.test_pricing_endpoint()
        self.test_process_endpoint()
        self.test_projects_all_endpoint()
        self.test_projects_filtered_endpoint()
        self.test_testimonials_endpoint()
        self.test_faqs_endpoint()
        
        # Test contact form (POST then GET)
        inquiry_id = self.test_contact_post_endpoint()
        self.test_contact_get_endpoint()
        
        # Print summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        
        total_tests = len(self.test_results)
        passed_tests = total_tests - len(self.failed_tests)
        
        print(f"Total Tests: {total_tests}")
        print(f"Passed: {passed_tests}")
        print(f"Failed: {len(self.failed_tests)}")
        print(f"Success Rate: {(passed_tests/total_tests)*100:.1f}%")
        
        if self.failed_tests:
            print("\n❌ FAILED TESTS:")
            for test in self.failed_tests:
                print(f"  • {test['test']}: {test['message']}")
        
        print("\n✅ All tests completed!")
        return len(self.failed_tests) == 0

if __name__ == "__main__":
    tester = QloudTechAPITester()
    success = tester.run_all_tests()
    sys.exit(0 if success else 1)