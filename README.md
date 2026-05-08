# Quiro Salud CDMX — Sitio Web Oficial

**Ajuste Humano. Solución Lógica.**

---

## 📋 Descripción del Proyecto

Sitio web profesional para **Quiropráctico Quiro Salud CDMX**, especializado en biomecánica vertebral, honestidad radical y atención sin paquetes comerciales.

### Características Técnicas

- **Rendimiento:** Optimizado para 100/100 en PageSpeed Insights
- **SEO:** Schema Markup completo (MedicalClinic, FAQPage, LocalBusiness)
- **Responsivo:** Mobile-first, compatible con todos los dispositivos
- **Conversión:** Integración con JotForm y WhatsApp Business
- **Trazabilidad:** Sistema de ID único para cada paciente (`cuestionariohumano`)
- **Honestidad Radical:** Contenido basado en empatía y transparencia

---

## 🚀 Despliegue en GitHub Pages

### Paso 1: Crear el Repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Nombre del repositorio: `quiro-salud-cdmx` (o el que prefieras)
3. Descripción: "Sitio web oficial de Quiro Salud CDMX"
4. Selecciona **Public** (para que sea accesible)
5. **NO** inicialices con README (ya lo tenemos)
6. Haz clic en "Create repository"

### Paso 2: Clonar y Configurar Localmente

```bash
# En tu computadora, abre Terminal/CMD
cd /ruta/donde/quieras/el/proyecto
git clone https://github.com/TU_USUARIO/quiro-salud-cdmx.git
cd quiro-salud-cdmx
```

### Paso 3: Copiar los Archivos

Copia todos los archivos de este proyecto (`.html`, `.css`, `.js`, imágenes, etc.) al directorio clonado.

### Paso 4: Hacer Commit y Push

```bash
git add .
git commit -m "Inicial: Sitio web Quiro Salud CDMX"
git push -u origin main
```

### Paso 5: Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings**
3. En el menú izquierdo, selecciona **Pages**
4. Bajo "Source", selecciona **main** (rama)
5. Selecciona **/ (root)**
6. Haz clic en **Save**

**Tu sitio estará disponible en:** `https://TU_USUARIO.github.io/quiro-salud-cdmx/`

---

## 📁 Estructura de Archivos

```
quiro-salud-cdmx/
├── index.html              # Página principal (Hero + Servicios + FAQs)
├── servicios.html          # Detalle de servicios
├── instinto.html           # Herramienta de valoración (Cuestionario Humano)
├── privacidad.html         # Aviso de Privacidad
├── cookies.html            # Política de Cookies
├── aviso-legal.html        # Aviso Legal
├── 404.html                # Página de error
├── style.css               # Estilos (Montserrat + Inter)
├── app.js                  # Lógica de conversión y trazabilidad
├── cookie-banner.js        # Banner de cookies
├── robots.txt              # Instrucciones para buscadores
├── sitemap.xml             # Mapa del sitio
├── logo-escudo.webp        # Logo principal
├── og-image.webp           # Imagen para redes sociales
├── servicio-*.webp         # Imágenes de servicios
├── testimonial-*.webp      # Testimonios (hasta 1000+)
└── README.md               # Este archivo
```

---

## 🎨 Diseño y Marca

### Paleta de Colores (Design Tokens)

| Token | Hex Code | Uso |
|-------|----------|-----|
| Primary (Abisal) | `#0B1E33` | Fondos, autoridad clínica |
| Secondary (Gold) | `#D4AF37` | Acentos, títulos |
| Accent (Vital) | `#A2C523` | Botones de acción, CTA |
| Structure (Steel) | `#4A708B` | Bordes, iconos |
| Light (White) | `#FFFFFF` | Tipografía principal |

### Tipografía

- **Headings:** Montserrat (600, 700, 900)
- **Body:** Inter (400, 500)

---

## 🔗 Integración con Servicios Externos

### JotForm (Cuestionario Humano)

El sitio inyecta dinámicamente un ID único (`cuestionariohumano`) en cada enlace a JotForm. Esto permite:

- Trazabilidad de pacientes
- Análisis de comportamiento
- Personalización de la experiencia

**Configuración en `app.js`:**
```javascript
const CONFIG = {
  jotformBase:  'https://form.jotform.com/quirosaludcdmx/formulario',
  jotformParam: 'input_57',
  // ...
};
```

### WhatsApp Business

Los botones de WhatsApp generan mensajes contextuales basados en la sección donde se hace clic.

**Ejemplo:**
- Desde Hero: "Hola, me interesa agendar una valoración..."
- Desde Servicios: "Hola, tengo dudas sobre los servicios..."

---

## 📊 SEO y Optimización

### Schema Markup Implementado

1. **MedicalClinic + LocalBusiness:** Información de la clínica
2. **FAQPage:** Las 12 preguntas frecuentes
3. **AggregateRating:** Calificación agregada (4.9/5)

### Palabras Clave Principales

- Quiropráctico CDMX
- Dolor de espalda
- Ciática
- Hernia de disco
- Ajuste vertebral
- Biomecánica

### Optimización para SGE (Search Generative Experience)

El contenido está estructurado para aparecer en los resultados de búsqueda generados por IA de Google.

---

## 🔐 Seguridad y Privacidad

- **HTTPS:** GitHub Pages proporciona SSL/TLS automáticamente
- **Cookies:** Banner de consentimiento implementado
- **Privacidad:** Aviso de Privacidad completo
- **Aviso Legal:** Protección legal incluida

---

## 📱 Responsividad

El sitio es **100% responsivo**:

- **Desktop:** Experiencia completa
- **Tablet:** Optimizado para pantallas medianas
- **Mobile:** Diseño mobile-first

---

## ⚡ Rendimiento

### Optimizaciones Implementadas

- **WebP:** Todas las imágenes en formato WebP (menor tamaño)
- **Lazy Loading:** Carga diferida de imágenes
- **Minificación:** CSS y JS optimizados
- **DNS Prefetch:** Precarga de dominios externos
- **Preconnect:** Conexión previa a Google Fonts

### Métricas Esperadas

- **PageSpeed Insights:** 95-100/100
- **Tiempo de carga:** < 1.5 segundos
- **First Contentful Paint:** < 0.8 segundos

---

## 🛠️ Mantenimiento

### Actualizar Contenido

1. Edita los archivos `.html` directamente
2. Haz commit y push:
   ```bash
   git add .
   git commit -m "Descripción del cambio"
   git push
   ```
3. Los cambios se reflejarán en el sitio en segundos

### Agregar Testimonios

1. Agrega la imagen WebP a la carpeta raíz
2. Añade la referencia en `index.html`:
   ```html
   <img src="testimonial-XXXX.webp" alt="Testimonial">
   ```
3. Commit y push

---

## 📞 Contacto y Soporte

- **Teléfono:** 55 4182 6900
- **WhatsApp:** https://wa.me/5215541826900
- **Email:** quirosaludcdmx@gmail.com
- **Ubicación:** Ing. Antonio Narro Acuña 205-int. 3, Gustavo A. Madero, CDMX

---

## 📄 Licencia

© 2026 Quiropráctico Quiro Salud CDMX. Todos los derechos reservados.

---

**Última actualización:** Mayo 2026  
**Versión:** 1.0  
**Estado:** Producción
