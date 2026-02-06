import axios from 'axios';

const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const fetchServices = async () => {
  const response = await axios.get(`${API_URL}/services`);
  return response.data.services;
};

export const fetchBenefits = async () => {
  const response = await axios.get(`${API_URL}/why-choose-us`);
  return response.data.benefits;
};

export const fetchPricing = async () => {
  const response = await axios.get(`${API_URL}/pricing`);
  return response.data.packages;
};

export const fetchProcess = async () => {
  const response = await axios.get(`${API_URL}/process`);
  return response.data.steps;
};

export const fetchProjects = async (category = 'All') => {
  const response = await axios.get(`${API_URL}/projects`, {
    params: { category }
  });
  return response.data.projects;
};

export const fetchTestimonials = async () => {
  const response = await axios.get(`${API_URL}/testimonials`);
  return response.data.testimonials;
};

export const fetchFAQs = async () => {
  const response = await axios.get(`${API_URL}/faqs`);
  return response.data.faqs;
};

export const submitContact = async (data) => {
  const response = await axios.post(`${API_URL}/contact`, data);
  return response.data;
};
