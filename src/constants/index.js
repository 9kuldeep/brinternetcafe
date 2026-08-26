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

export const portalServices = [
  { id: "aadhaar", category: "Government & Digital Services", name: "Aadhaar Assistance", description: "Guidance for eligible online Aadhaar-related services.", required: ["Details for the requested service"], optional: ["Supporting address proof, if requested"], keywords: "aadhaar aadhar identity government" },
  { id: "pan", category: "Government & Digital Services", name: "PAN Card Assistance", description: "Support with online PAN application and documentation.", required: ["Aadhaar Card", "Mobile Number"], optional: ["Passport-size photograph, if required"], keywords: "pan card government tax" },
  { id: "voter", category: "Government & Digital Services", name: "Voter ID Assistance", description: "Online assistance for voter ID services and applications.", required: ["Details for the requested service"], optional: ["Address proof, if requested"], keywords: "voter id election government" },
  { id: "income", category: "Government & Digital Services", name: "Income Certificate", description: "Help preparing and submitting an online income certificate request.", required: ["Applicant details"], optional: ["Supporting income or address documents"], keywords: "income certificate government" },
  { id: "caste", category: "Government & Digital Services", name: "Caste Certificate", description: "Digital application support for caste certificate requests.", required: ["Applicant details"], optional: ["Supporting documents, if requested"], keywords: "caste certificate government" },
  { id: "residence", category: "Government & Digital Services", name: "Residence Certificate", description: "Assistance with an online residence certificate application.", required: ["Applicant details"], optional: ["Address proof, if requested"], keywords: "residence domicile certificate government" },
  { id: "birth", category: "Government & Digital Services", name: "Birth Certificate Assistance", description: "Support navigating an online birth certificate request.", required: ["Details for the requested service"], optional: ["Supporting documents, if requested"], keywords: "birth certificate government" },
  { id: "death", category: "Government & Digital Services", name: "Death Certificate Assistance", description: "Guidance for an online death certificate request.", required: ["Details for the requested service"], optional: ["Supporting documents, if requested"], keywords: "death certificate government" },
  { id: "ayushman", category: "Government & Digital Services", name: "Ayushman Card", description: "Online application support for Ayushman Card services.", required: ["Applicant details"], optional: ["Supporting documents, if requested"], keywords: "ayushman health government" },
  { id: "eshram", category: "Government & Digital Services", name: "e-Shram", description: "Assistance with online e-Shram registration.", required: ["Applicant details"], optional: ["Supporting documents, if requested"], keywords: "eshram labour government" },
  { id: "pm-kisan", category: "Government & Digital Services", name: "PM Kisan", description: "Online application support for PM Kisan services.", required: ["Applicant details"], optional: ["Supporting documents, if requested"], keywords: "pm kisan farmer government" },
  { id: "scholarship", category: "Government & Digital Services", name: "Scholarship Assistance", description: "Help filling and submitting scholarship forms.", required: ["Student details"], optional: ["Academic documents, if requested"], keywords: "scholarship student government" },
  { id: "government-forms", category: "Government & Digital Services", name: "Government Online Forms", description: "Assistance navigating other government online forms.", required: ["Details for the requested service"], optional: ["Supporting documents, if requested"], keywords: "government form online application" },
  { id: "other-government", category: "Government & Digital Services", name: "Other Government Services", description: "Tell us what government service you need help finding.", required: ["Details for the requested service"], optional: [], keywords: "government other service" },
  { id: "printing", category: "Document Services", name: "Printing", description: "Clear black-and-white or colour printout assistance.", required: ["File to print"], optional: [], keywords: "print printout document" },
  { id: "photocopy", category: "Document Services", name: "Photocopy", description: "Quick photocopy assistance for everyday documents.", required: ["Document to copy"], optional: [], keywords: "photocopy copy document" },
  { id: "scanning", category: "Document Services", name: "Scanning", description: "Create digital scans ready to share or submit.", required: ["Document to scan"], optional: [], keywords: "scan scanning document" },
  { id: "pdf", category: "Document Services", name: "PDF Preparation", description: "Help preparing documents into a clean PDF.", required: ["Source documents"], optional: [], keywords: "pdf document" },
  { id: "upload", category: "Document Services", name: "Document Upload Assistance", description: "Upload documents to the correct online portal.", required: ["Documents for the selected application"], optional: [], keywords: "upload document online form" },
  { id: "passport-photo", category: "Document Services", name: "Passport Photo", description: "Convenient passport-size photo assistance.", required: ["Photo requirement details"], optional: [], keywords: "passport photo photograph" },
  { id: "resize", category: "Document Services", name: "Photo/Signature Resize", description: "Resize files to meet online form requirements.", required: ["Photo or signature file"], optional: [], keywords: "photo signature resize" },
  { id: "railway", category: "Booking & Other Services", name: "Railway Ticket Assistance", description: "Assistance with online railway ticket bookings.", required: ["Journey details"], optional: ["Passenger details"], keywords: "railway train ticket booking" },
  { id: "bus", category: "Booking & Other Services", name: "Bus Ticket Assistance", description: "Find and book bus travel online.", required: ["Journey details"], optional: ["Passenger details"], keywords: "bus ticket booking" },
  { id: "flight", category: "Booking & Other Services", name: "Flight Ticket Assistance", description: "Support comparing and booking flight tickets.", required: ["Journey details"], optional: ["Passenger details"], keywords: "flight ticket booking" },
  { id: "lic-insurance", category: "Booking & Other Services", name: "LIC / Insurance Assistance", description: "Digital assistance for LIC and insurance-related services.", required: ["Details for the requested service"], optional: ["Existing policy details, if relevant"], keywords: "lic insurance financial" },
  { id: "recharge-bills", category: "Booking & Other Services", name: "Recharge & Bill Payment", description: "Assistance with online recharge and bill payment services.", required: ["Bill or recharge details"], optional: [], keywords: "recharge bill payment" },
  { id: "driving-licence", category: "Booking & Other Services", name: "Driving Licence Assistance", description: "Guidance for online driving licence applications.", required: ["Details for the requested service"], optional: ["Supporting documents, if requested"], keywords: "driving licence license" },
  { id: "passport", category: "Booking & Other Services", name: "Passport Assistance", description: "Online application support for passport-related services.", required: ["Details for the requested service"], optional: ["Supporting documents, if requested"], keywords: "passport application" },
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