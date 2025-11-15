import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle } from "lucide-react";
import {
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_EMAIL,
  BUSINESS_ADDRESS,
  BUSINESS_HOURS,
  BUSINESS_FORM_URL,
  BUSINESS_BLOG_URL,
  SERVICES,
  TESTIMONIALS,
  FAQ,
} from "@/const";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt={BUSINESS_NAME} width={40} height={40} className="h-10 w-10" />
            <span className="font-bold text-lg hidden sm:inline">{BUSINESS_NAME}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#servicios" className="text-sm font-medium hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              Preguntas
            </a>
            <a href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">
              Contacto
            </a>
            <a href={BUSINESS_FORM_URL} target="_blank" rel="noopener noreferrer">
              <Button size="sm">Agendar Cita</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Clínica Quiropráctica Profesional en el Corazón de la CDMX
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Con más de 20 años de experiencia, ofrecemos tratamientos especializados para aliviar tu dolor de espalda, cuello, ciática y otros problemas de la columna vertebral. Nuestro enfoque personalizado garantiza resultados duraderos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={BUSINESS_FORM_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto">
                    Agendar Valoración Gratuita <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href={`tel:${BUSINESS_PHONE}`}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <Phone className="mr-2 h-4 w-4" /> {BUSINESS_PHONE_DISPLAY}
                  </Button>
                </a>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">+50 pacientes satisfechos</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="/hero-image.avif"
                alt="Clínica QuiroSalud CDMX"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 id="por-que" className="text-3xl md:text-4xl font-bold mb-12 text-center">
            ¿Por Qué Elegir QuiroSalud CDMX?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "+20 Años de Experiencia",
                description: "Décadas de práctica y conocimiento en tratamientos quiroprácticos especializados.",
                icon: CheckCircle,
              },
              {
                title: "Atención Personalizada",
                description: "Cada paciente recibe un plan de tratamiento único diseñado para sus necesidades específicas.",
                icon: CheckCircle,
              },
              {
                title: "Ambiente Seguro y Acogedor",
                description: "Espacio profesional, limpio y confortable donde te sentirás seguro y confiado.",
                icon: CheckCircle,
              },
            ].map((item, i) => (
              <Card key={i} className="card-hover">
                <CardHeader>
                  <item.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Nuestros Servicios Quiroprácticos</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ofrecemos una variedad de tratamientos especializados para resolver tus problemas de salud y bienestar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <Card key={service.id} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold text-base">{service.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <a href={BUSINESS_FORM_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">
                      Agendar Este Servicio
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Testimonios de Nuestros Pacientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {FAQ.map((item, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contacta con Nosotros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Ubicación</h3>
                  <p>{BUSINESS_ADDRESS}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Teléfono</h3>
                  <a href={`tel:${BUSINESS_PHONE}`} className="hover:underline">
                    {BUSINESS_PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Correo Electrónico</h3>
                  <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:underline">
                    {BUSINESS_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Horario de Atención</h3>
                  <p>{BUSINESS_HOURS}</p>
                </div>
              </div>
            </div>
            <div>
              <a href={BUSINESS_FORM_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="w-full mb-4">
                  Agendar Cita en Línea
                </Button>
              </a>
              <p className="text-sm text-primary-foreground/80">
                Completa nuestro formulario en línea para agendar tu valoración gratuita. Nos pondremos en contacto contigo para confirmar tu cita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog CTA */}
      <section className="py-12 md:py-16 bg-white border-t border-border">
        <div className="container text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Mantente Informado</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Descubre artículos, consejos y noticias sobre cómo mantener una columna vertebral sana y vivir sin dolor.
          </p>
          <a href={BUSINESS_BLOG_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              Visitar Nuestro Blog <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">QuiroSalud CDMX</h4>
              <p className="text-sm text-background/80">Clínica quiropráctica profesional en la Ciudad de México.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#servicios" className="hover:underline">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:underline">
                    Preguntas Frecuentes
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:underline">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={BUSINESS_BLOG_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href={BUSINESS_FORM_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Agendar Cita
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={`tel:${BUSINESS_PHONE}`} className="hover:underline">
                    {BUSINESS_PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:underline">
                    {BUSINESS_EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/80">
            <p>&copy; 2025 {BUSINESS_NAME}. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
