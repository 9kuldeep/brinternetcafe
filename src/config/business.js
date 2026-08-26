const environment = import.meta.env;

export const BUSINESS_NAME = "B.R Internet Cafe & Jan Seva Kendra";
export const PHONE_NUMBER = environment.VITE_PHONE_NUMBER || "8171091690";
export const WHATSAPP_NUMBER = environment.VITE_WHATSAPP_NUMBER || "8171091690";
export const ADDRESS = environment.VITE_ADDRESS || "Nawabganj Road, Balaji Market, Kundra Kothi, 262406";
export const OPENING_HOURS = environment.VITE_OPENING_HOURS || "REPLACE_WITH_OPENING_HOURS";
export const GOOGLE_MAPS_URL = environment.VITE_GOOGLE_MAPS_URL || "https://www.google.com/maps/dir/28.6642467,79.6087063/B.R+Internet+Cafe+%26+Jan+Seva+Kendra,+Kundra+Kothi,+Balaji+Market,+Nawabganj+Road,+262406,+Bareilly,+Uttar+Pradesh+262406/@28.6639251,79.606067,828m/data=!3m2!1e3!4b1!4m18!1m7!3m6!1s0x39a06d10d864d6b1:0x55c1c95d24f20272!2sB.R+Internet+Cafe+%26+Jan+Seva+Kendra!8m2!3d28.6636176!4d79.6085227!16s%2Fg%2F11nvh5h7k7!4m9!1m1!4e1!1m5!1m1!1s0x39a06d10d864d6b1:0x55c1c95d24f20272!2m2!1d79.6085227!2d28.6636176!3e0?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D";
export const GOOGLE_MAPS_EMBED_URL = environment.VITE_GOOGLE_MAPS_EMBED_URL || "";
export const SITE_URL = environment.VITE_SITE_URL || "https://REPLACE_WITH_DOMAIN";
export const FORM_ENDPOINT = environment.VITE_FORM_ENDPOINT || "";
export const LOGO_PATH = "/images/br-logo.svg";

export const businessContact = {
  name: BUSINESS_NAME,
  phone: PHONE_NUMBER,
  whatsapp: WHATSAPP_NUMBER,
  address: ADDRESS,
  hours: OPENING_HOURS,
  mapsUrl: GOOGLE_MAPS_URL,
};