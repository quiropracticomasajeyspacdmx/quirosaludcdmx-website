/**
 * app.js — Quiro Salud CDMX
 * Lógica de conversión y trazabilidad.
 * Vanilla JS puro. Sin dependencias. Sin frameworks.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ─────────────────────────────────────────
  // CONFIGURACIÓN BASE
  // ─────────────────────────────────────────
  const CONFIG = {
    jotformBase:  'https://form.jotform.com/quirosaludcdmx/formulario',
    jotformParam: 'input_57',
    waLink:       'https://wa.me/message/3QR6Q7MVVOGBN1',
    waNumber:     '525541826900',
    waCatalog:    'https://wa.me/c/5215541826900',
  };

  // ─────────────────────────────────────────
  // ID DE TRAZABILIDAD
  // Captura ?cuestionariohumano=X de la URL
  // Si no existe, asigna 'organico'
  // ─────────────────────────────────────────
  const params  = new URLSearchParams(window.location.search);
  const humanId = params.get('cuestionariohumano') || generarId();

  function generarId() {
    // ID corto basado en timestamp para sesiones sin parámetro
    return 'org-' + Date.now().toString(36);
  }

  // ─────────────────────────────────────────
  // BOTONES DE TRIAJE (JotForm)
  // Inyecta el ID en la URL del formulario
  // ─────────────────────────────────────────
  const triageButtons = document.querySelectorAll(
    '#btn-hero-triage, #btn-triage, #btn-servicios-triage, .btn-triage'
  );

  triageButtons.forEach(btn => {
    btn.href   = `${CONFIG.jotformBase}?${CONFIG.jotformParam}=${humanId}`;
    btn.target = '_blank';
    btn.rel    = 'noopener noreferrer';
  });

  // ─────────────────────────────────────────
  // BOTONES DE WHATSAPP (Contextuales)
  // Genera mensaje con contexto de sección + ID
  // ─────────────────────────────────────────
  const waButtons = document.querySelectorAll('.btn-whatsapp');

  waButtons.forEach(btn => {
    const ctx     = btn.getAttribute('data-context') || 'general';
    const mensaje = mensajeWA(ctx, humanId);
    btn.href      = `https://wa.me/${CONFIG.waNumber}?text=${encodeURIComponent(mensaje)}`;
    btn.target    = '_blank';
    btn.rel       = 'noopener noreferrer';
  });

  function mensajeWA(contexto, id) {
    const textos = {
      hero:     'Hola, me interesa agendar una valoración. Vengo del sitio web.',
      servicios:'Hola, tengo dudas sobre los servicios. Vengo del sitio web.',
      ubicacion:'Hola, ¿cómo puedo agendar una cita? Vi su ubicación.',
      general:  'Hola, me interesa información sobre Quiro Salud CDMX.',
    };
    const base = textos[contexto] || textos.general;
    return `${base} (Ref: ${id})`;
  }

  // ─────────────────────────────────────────
  // BOTÓN FLOTANTE WHATSAPP
  // Aparece después del 60% del primer viewport
  // ─────────────────────────────────────────
  const waFloat = document.getElementById('wa-float');
  if (waFloat) {
    let visible = false;
    const umbral = window.innerHeight * 0.6;

    window.addEventListener('scroll', () => {
      if (!visible && window.scrollY > umbral) {
        waFloat.classList.add('visible');
        visible = true;
      }
    }, { passive: true });
  }

  // ─────────────────────────────────────────
  // SMOOTH SCROLL PARA ANCHORS INTERNOS
  // ─────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ─────────────────────────────────────────
  // INTERSECTION OBSERVER — Animación entrada
  // Aplica clase .visible cuando el elemento entra al viewport
  // ─────────────────────────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.card, .honesty__item, .testimonial-card, .faq-item').forEach(el => {
    el.classList.add('observe');
    observer.observe(el);
  });

});
