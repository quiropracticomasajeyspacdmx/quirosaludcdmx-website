# 🚀 Guía de Despliegue — Quiro Salud CDMX

**Instrucciones paso a paso para publicar tu sitio web en GitHub Pages**

---

## ✅ Requisitos Previos

1. **Cuenta de GitHub** (gratuita en [github.com](https://github.com))
2. **Git instalado** en tu computadora ([descargar](https://git-scm.com/download))
3. **Terminal/CMD** (Windows: PowerShell o CMD; Mac/Linux: Terminal)

---

## 📋 Paso 1: Crear el Repositorio en GitHub

### 1.1 Accede a GitHub

1. Ve a [github.com](https://github.com) e inicia sesión con tu cuenta
2. Haz clic en el **+** en la esquina superior derecha
3. Selecciona **New repository**

### 1.2 Configura el Repositorio

| Campo | Valor |
|-------|-------|
| **Repository name** | `quiro-salud-cdmx` |
| **Description** | Sitio web oficial de Quiro Salud CDMX |
| **Visibility** | **Public** ✓ |
| **Initialize with README** | ❌ NO (ya lo tenemos) |
| **Add .gitignore** | ✓ (opcional, ya incluido) |

### 1.3 Crea el Repositorio

Haz clic en **Create repository**. Verás una pantalla con instrucciones.

---

## 💻 Paso 2: Configurar Git en Tu Computadora

### 2.1 Abre Terminal/CMD

**Windows:**
- Presiona `Win + R`
- Escribe `powershell` y presiona Enter

**Mac/Linux:**
- Abre la aplicación Terminal

### 2.2 Configura Git (primera vez)

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@gmail.com"
```

### 2.3 Crea una Carpeta para el Proyecto

```bash
mkdir -p ~/Proyectos
cd ~/Proyectos
```

---

## 📥 Paso 3: Clonar el Repositorio

### 3.1 Copia la URL del Repositorio

1. Ve a tu repositorio en GitHub
2. Haz clic en el botón verde **Code**
3. Selecciona **HTTPS** (por defecto)
4. Copia la URL (ejemplo: `https://github.com/TU_USUARIO/quiro-salud-cdmx.git`)

### 3.2 Clona el Repositorio

```bash
git clone https://github.com/TU_USUARIO/quiro-salud-cdmx.git
cd quiro-salud-cdmx
```

---

## 📁 Paso 4: Copiar los Archivos del Sitio

### 4.1 Copia Todos los Archivos

Copia los siguientes archivos a la carpeta `quiro-salud-cdmx`:

- `index.html`
- `servicios.html`
- `instinto.html`
- `privacidad.html`
- `cookies.html`
- `aviso-legal.html`
- `404.html`
- `style.css`
- `app.js`
- `cookie-banner.js`
- `robots.txt`
- `sitemap.xml`
- `logo-escudo.webp`
- `og-image.webp`
- `og-instinto.webp`
- `servicio-*.webp` (todas las imágenes de servicios)
- `testimonial-*.webp` (todas las imágenes de testimonios)
- `favicon-32.png`
- `apple-touch-icon.png`
- `.gitignore`
- `README.md`

### 4.2 Verifica que los Archivos Estén

```bash
ls -la
```

Deberías ver todos los archivos listados.

---

## 🔄 Paso 5: Hacer Commit y Push

### 5.1 Agrega Todos los Archivos

```bash
git add .
```

### 5.2 Crea un Commit

```bash
git commit -m "Inicial: Sitio web Quiro Salud CDMX"
```

### 5.3 Sube a GitHub

```bash
git push -u origin main
```

**Nota:** Si pide contraseña, usa un **Personal Access Token** en lugar de tu contraseña:
1. Ve a GitHub → Settings → Developer settings → Personal access tokens
2. Crea un nuevo token con permisos `repo`
3. Copia el token y úsalo como contraseña

---

## 🌐 Paso 6: Habilitar GitHub Pages

### 6.1 Ve a los Ajustes del Repositorio

1. En tu repositorio, haz clic en **Settings** (pestaña)
2. En el menú izquierdo, selecciona **Pages**

### 6.2 Configura GitHub Pages

| Opción | Valor |
|--------|-------|
| **Source** | Deploy from a branch |
| **Branch** | `main` |
| **Folder** | `/ (root)` |

### 6.3 Guarda los Cambios

Haz clic en **Save**. GitHub Pages se activará automáticamente.

---

## ✨ Paso 7: Accede a Tu Sitio

### 7.1 Espera 1-2 Minutos

GitHub Pages necesita un momento para procesar tu sitio.

### 7.2 Tu URL será:

```
https://TU_USUARIO.github.io/quiro-salud-cdmx/
```

**Ejemplo:** Si tu usuario es `juanperez`, la URL será:
```
https://juanperez.github.io/quiro-salud-cdmx/
```

### 7.3 Verifica que Funcione

1. Abre la URL en tu navegador
2. Verifica que todas las imágenes se carguen
3. Prueba los botones de WhatsApp y JotForm

---

## 🔗 Paso 8: Dominio Personalizado (Opcional)

Si quieres usar `quirosaludcdmx.site` en lugar de `github.io`:

### 8.1 Compra el Dominio

1. Ve a un registrador como [Namecheap](https://www.namecheap.com) o [GoDaddy](https://www.godaddy.com)
2. Compra el dominio `quirosaludcdmx.site`

### 8.2 Configura el DNS

1. En tu registrador, busca **DNS Settings** o **Nameservers**
2. Añade estos registros:

| Tipo | Nombre | Valor |
|------|--------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | TU_USUARIO.github.io |

### 8.3 Configura en GitHub

1. Ve a tu repositorio → Settings → Pages
2. Bajo **Custom domain**, escribe `quirosaludcdmx.site`
3. Haz clic en **Save**
4. Marca **Enforce HTTPS** (espera 5 minutos)

---

## 📝 Paso 9: Actualizar Contenido en el Futuro

Cada vez que quieras hacer cambios:

### 9.1 Edita los Archivos

Abre cualquier archivo `.html` con un editor de texto (VS Code, Sublime, etc.)

### 9.2 Sube los Cambios

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

Los cambios se reflejarán en tu sitio en segundos.

---

## 🐛 Solución de Problemas

### Problema: "404 Not Found"

**Solución:**
1. Verifica que `index.html` esté en la raíz del repositorio
2. Espera 5 minutos después de hacer push
3. Limpia el caché del navegador (Ctrl+Shift+Del)

### Problema: Las Imágenes No Se Cargan

**Solución:**
1. Verifica que todas las imágenes estén en la carpeta raíz
2. Comprueba que los nombres de archivo sean exactos (mayúsculas/minúsculas)
3. Abre la consola del navegador (F12) para ver errores

### Problema: Los Estilos No Se Ven

**Solución:**
1. Verifica que `style.css` esté en la raíz
2. Limpia el caché (Ctrl+Shift+Del)
3. Abre la consola (F12) y busca errores 404

---

## 📊 Verificar el Despliegue

### Usa Google PageSpeed Insights

1. Ve a [pagespeed.web.dev](https://pagespeed.web.dev)
2. Escribe tu URL: `https://TU_USUARIO.github.io/quiro-salud-cdmx/`
3. Verifica que obtengas 95-100/100

### Usa Google Search Console

1. Ve a [search.google.com/search-console](https://search.google.com/search-console)
2. Añade tu sitio
3. Verifica que Google pueda rastrearlo

---

## 🎉 ¡Listo!

Tu sitio web está en vivo. Ahora puedes:

- ✅ Compartir la URL con pacientes
- ✅ Agregar el sitio a Google My Business
- ✅ Monitorear el tráfico con Google Analytics
- ✅ Actualizar contenido en cualquier momento

---

## 📞 Soporte

Si tienes problemas:

1. Revisa la [Documentación de GitHub Pages](https://docs.github.com/en/pages)
2. Abre un issue en tu repositorio
3. Contacta a soporte de GitHub

---

**¡Éxito con tu sitio web!** 🚀
