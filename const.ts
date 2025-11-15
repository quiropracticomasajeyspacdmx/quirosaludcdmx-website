export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "QuiroSalud CDMX - Clínica Quiropráctica Profesional";

export const APP_LOGO = import.meta.env.VITE_APP_LOGO || "/logo.svg";

// Business information
export const BUSINESS_NAME = "QuiroSalud CDMX";
export const BUSINESS_PHONE = "+525541826900";
export const BUSINESS_PHONE_DISPLAY = "55 4182 6900";
export const BUSINESS_EMAIL = "quirosaludgam@gmail.com";
export const BUSINESS_ADDRESS = "Ing. Antonio Narro Acuña 205, interior 3, Guadalupe Insurgentes, Gustavo A. Madero, 07870 Ciudad de México, CDMX";
export const BUSINESS_HOURS = "Lunes a Domingo, 10:00 - 20:00 (previa cita)";
export const BUSINESS_FORM_URL = "https://form.jotform.com/quirosaludcdmx/formulario";
export const BUSINESS_BLOG_URL = "https://quiropracticocdmxpro.blogspot.com/";

// Coordinates for Google Maps
export const BUSINESS_LAT = 19.472850;
export const BUSINESS_LNG = -99.122190;

// Meta information
export const META_DESCRIPTION = "Clínica quiropráctica en CDMX con +20 años de experiencia. Ofrecemos tratamientos para dolor de espalda, cuello y ciática. ¡Agenda tu valoración hoy mismo!";
export const META_KEYWORDS = "quiropráctico CDMX, ajustes quiroprácticos, tratamiento ciática, dolor de espalda, clínica quiropráctica";

// Services
export const SERVICES = [
  {
    id: "terapia-integral",
    name: "Terapia Integral Sin Dolor",
    price: "$850 MXN",
    description: "Consulta, valoración, masaje profundo, estiramientos, ajuste quiropráctico completo.",
  },
  {
    id: "sesion-corta",
    name: "Sesión Corta Quiropráctica",
    price: "$650 MXN",
    description: "Versión breve de la terapia integral, ideal para mantenimiento.",
  },
  {
    id: "osteopatia",
    name: "Osteopatía",
    price: "Desde $650 MXN",
    description: "Método suave y efectivo. Primera consulta sin costo.",
  },
  {
    id: "acupuntura",
    name: "Acupuntura Fisioterapéutica",
    price: "$300 MXN",
    description: "Complemento terapéutico para alivio del dolor.",
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    name: "Mariana Romero Roy",
    rating: 5,
    text: "La ubicación no es la más bonita, pero el servicio es espectacular. Jorge es amable, profesional y su conocimiento es asombroso.",
  },
  {
    name: "Lucia Bolaños",
    rating: 5,
    text: "Llegué con dolor en la columna y el masaje y la alineación me ayudaron muchísimo. Gracias por la atención.",
  },
  {
    name: "Gisela",
    rating: 5,
    text: "Fue mi primera vez y me llevé una excelente impresión. Muy amables, cuidadosos y explican a detalle.",
  },
  {
    name: "Dante Rebolledo",
    rating: 5,
    text: "Excelente quiropráctico, lo recomiendo al 100%. Trato amable y profesional.",
  },
  {
    name: "Sally Barraza",
    rating: 5,
    text: "Por más de 10 años visité quiroprácticos, pero nunca me habían ajustado con tanto cuidado. Altamente recomendado.",
  },
];

// FAQ
export const FAQ = [
  {
    question: "¿El ajuste quiropráctico duele?",
    answer: "No. Nuestro enfoque es personalizado y cuidadoso. Buscamos el punto exacto que tu cuerpo necesita, sin agresividad ni molestias innecesarias. Muchos pacientes reportan alivio inmediato.",
  },
  {
    question: "¿Cuántas sesiones necesito?",
    answer: "Depende de tu condición. En la primera consulta gratuita evaluamos tu caso y creamos un plan de tratamiento personalizado. Algunos pacientes mejoran en pocas sesiones, otros requieren un seguimiento más prolongado.",
  },
  {
    question: "¿Puedo agendar una consulta gratuita?",
    answer: "¡Por supuesto! Ofrecemos valoraciones gratuitas para que conozcas nuestro servicio sin compromiso. Es importante que confíes plenamente en tu quiropráctico.",
  },
  {
    question: "¿Atienden emergencias o solo con cita previa?",
    answer: "Trabajamos con cita previa para garantizar una atención de calidad. Sin embargo, si tienes una emergencia, contáctanos y haremos lo posible por ayudarte.",
  },
  {
    question: "¿Qué tratamientos ofrecen además de ajustes quiroprácticos?",
    answer: "Ofrecemos masajes terapéuticos, osteopatía, acupuntura fisioterapéutica y otros servicios complementarios. Cada tratamiento se personaliza según tus necesidades.",
  },
  {
    question: "¿Aceptan seguros médicos?",
    answer: "Contáctanos directamente para consultar sobre opciones de pago y posibles convenios con seguros. Ofrecemos flexibilidad en nuestros servicios.",
  },
];

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
