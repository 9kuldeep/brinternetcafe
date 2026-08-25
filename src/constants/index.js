import { send, shield, star } from "../assets";
import { businessContact, PHONE_NUMBER, WHATSAPP_NUMBER } from "../config/business";
import { openWhatsApp } from "../utils/whatsapp";

export { PHONE_NUMBER, WHATSAPP_NUMBER, openWhatsApp };

export const businessInfo = {
  name: "B.R Internet Cafe",
  subtitle: "& Jan Seva Kendra",
  phone: businessContact.phone,
  whatsapp: businessContact.whatsapp,
  address: businessContact.address,
  hours: businessContact.hours,
  mapsUrl: businessContact.mapsUrl,
};

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Services",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "how-it-works",
    title: "How It Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Fast Service",
    content: "Quick, careful support for everyday online and documentation needs.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Reliable Assistance",
    content: "Clear guidance through forms, documents and digital applications.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Multiple Services",
    content: "Government assistance, printing, bookings and more under one roof.",
  },
];

export const aboutTrustPoints = ["Multiple Services", "Quick Assistance", "Customer Friendly"];

export const whyChooseUs = [
  { id: "multiple-services", icon: star, title: "Multiple Services", content: "Access online applications, documentation, printing, booking and other digital services at one place." },
  { id: "quick-assistance", icon: send, title: "Quick Assistance", content: "Get practical assistance with online forms, document preparation and digital applications." },
  { id: "convenient", icon: shield, title: "Convenient", content: "Save time by getting multiple digital services handled at your nearby service center." },
  { id: "customer-support", icon: star, title: "Customer Support", content: "Get clear guidance and assistance whenever you need help with a digital service." },
];

export const processSteps = [
  { id: "choose", number: "01", title: "Choose Your Service", content: "Tell us what online or digital service you need." },
  { id: "documents", number: "02", title: "Share Your Documents", content: "Provide the required documents or information for the selected service." },
  { id: "complete", number: "03", title: "Get Your Work Done", content: "We assist you with the online process and help complete your service request." },
];

export const requestServices = [
  "PAN Card Assistance", "Ayushman Card", "PM Kisan Services", "Ration Card Assistance", "Income Certificate", "Caste Certificate", "Residence/Domicile Certificate", "Scholarship Forms", "Online Form Filling", "Printout", "Photocopy", "Scanning", "Lamination", "Passport Photo", "Railway Ticket Booking", "Bus Ticket Booking", "Flight Ticket Booking", "LIC Assistance", "Insurance Assistance", "Driving Licence Assistance", "Other Digital Service",
];

export const serviceGroups = [
  { id: "government", icon: "◎", title: "Government & Jan Seva Services", services: [["PAN Card Assistance", "Get help with online PAN application and documentation."], ["Ayushman Card", "Support with online application and document submission."], ["PM Kisan Services", "Online application support for PM Kisan services."], ["Ration Card Assistance", "Guidance for online ration card-related applications."], ["Income Certificate", "Assistance preparing and submitting the online form."], ["Caste Certificate", "Digital application support for certificate requests."], ["Residence / Domicile Certificate", "Help with online residence certificate applications."], ["Disability Certificate", "Support with the online application process."], ["Scholarship Forms", "Assistance filling scholarship forms accurately."], ["e-Shram Card", "Online registration and document assistance."], ["Labour Card", "Support with labour card applications and updates."], ["Voter ID Assistance", "Guidance for online voter ID services."]] },
  { id: "documentation", icon: "▣", title: "Online & Documentation Services", services: [["Online Form Filling", "Careful assistance with online applications."], ["Document Upload", "Upload documents to the correct online portal."], ["Printout", "Clear black-and-white or colour printouts."], ["Photocopy", "Quick copies for forms and everyday needs."], ["Scanning", "Digital scans ready to share or submit."], ["Lamination", "Protect important documents with lamination."], ["Passport Size Photo", "Convenient passport-size photo service."], ["Photo & Signature Resize", "Resize files to meet online form requirements."], ["Document Formatting", "Neat formatting for digital documents."], ["Resume / CV Making", "Simple, professional resume preparation."]] },
  { id: "booking", icon: "◫", title: "Ticket & Booking Services", services: [["Railway Ticket Booking", "Assistance with online railway ticket bookings."], ["Bus Ticket Booking", "Find and book bus travel online."], ["Flight Ticket Booking", "Support comparing and booking flight tickets."]] },
  { id: "other", icon: "◌", title: "Financial & Other Services", services: [["LIC Assistance", "Digital assistance for LIC-related services."], ["Insurance Assistance", "Support with online insurance-related processes."], ["Driving Licence Assistance", "Guidance for online licence applications."], ["Online Application Assistance", "Help navigating other online applications."], ["Other Digital Services", "Ask us about a service not listed here."]] },
];

export const stats = [
  { id: "stats-1", title: "Service categories", value: "04" },
  { id: "stats-2", title: "Everyday support", value: "01" },
  { id: "stats-3", title: "Helpful team", value: "24/7" },
];

export const footerLinks = [
  { title: "Explore", links: [{ name: "Services", link: "#features" }, { name: "About Us", link: "#about" }, { name: "How It Works", link: "#how-it-works" }] },
  { title: "Get In Touch", links: [{ name: "Contact", link: "#contact" }, { name: "WhatsApp", link: "#whatsapp" }] },
];

// Kept for compatibility with the starter component barrel.
export const clients = [];
export const socialMedia = [];
export const feedback = [];