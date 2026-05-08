/**
 * cookie-banner.js — Quiro Salud CDMX
 * Banner de consentimiento de cookies minimalista.
 * Sin dependencias. Añadir al final del <body> en index.html.
 * 
 * USO: <script src="js/cookie-banner.js" defer></script>
 */

(function () {
    'use strict';

    const COOKIE_KEY     = 'qs_cookie_consent';
    const COOKIE_EXPIRES = 365; // días

    // ── Helpers ──────────────────────────────────────────
    function getCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? decodeURIComponent(match[2]) : null;
    }

    function setCookie(name, value, days) {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
    }

    // ── Si ya hay consentimiento, no mostrar banner ───────
    if (getCookie(COOKIE_KEY)) return;

    // ── Estilos inline (no depende de style.css) ─────────
    const style = document.createElement('style');
    style.textContent = `
        #qs-cookie-banner {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 9999;
            background: #0d2540;
            border-top: 1px solid #4A708B;
            padding: 16px 24px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 16px;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            color: rgba(255,255,255,0.82);
            box-shadow: 0 -4px 24px rgba(0,0,0,0.4);
            animation: qs-slide-up 0.3s ease;
        }
        @keyframes qs-slide-up {
            from { transform: translateY(100%); opacity: 0; }
            to   { transform: translateY(0);    opacity: 1; }
        }
        #qs-cookie-banner p {
            flex: 1 1 300px;
            margin: 0;
            line-height: 1.5;
        }
        #qs-cookie-banner a {
            color: #A2C523;
            text-decoration: underline;
        }
        #qs-cookie-banner .qs-actions {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }
        #qs-cookie-banner button {
            cursor: pointer;
            border: none;
            border-radius: 4px;
            padding: 10px 20px;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            transition: opacity 0.2s;
        }
        #qs-cookie-banner button:hover { opacity: 0.85; }
        #qs-btn-accept {
            background: #A2C523;
            color: #0B1E33;
        }
        #qs-btn-reject {
            background: transparent;
            color: rgba(255,255,255,0.6);
            border: 1px solid rgba(255,255,255,0.2) !important;
        }
    `;
    document.head.appendChild(style);

    // ── Markup del banner ─────────────────────────────────
    const banner = document.createElement('div');
    banner.id = 'qs-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Aviso de cookies');
    banner.innerHTML = `
        <p>
            Usamos cookies esenciales para el funcionamiento del sitio y de terceros (JotForm, Google Maps).
            Consulta nuestra <a href="/cookies">Política de Cookies</a> y <a href="/privacidad">Aviso de Privacidad</a>.
        </p>
        <div class="qs-actions">
            <button id="qs-btn-accept" aria-label="Aceptar cookies">Aceptar</button>
            <button id="qs-btn-reject" aria-label="Rechazar cookies opcionales">Solo esenciales</button>
        </div>
    `;
    document.body.appendChild(banner);

    // ── Eventos ───────────────────────────────────────────
    function dismiss(value) {
        setCookie(COOKIE_KEY, value, COOKIE_EXPIRES);
        banner.style.animation = 'none';
        banner.style.opacity   = '0';
        banner.style.transform = 'translateY(100%)';
        banner.style.transition = 'opacity 0.25s, transform 0.25s';
        setTimeout(() => banner.remove(), 300);
    }

    document.getElementById('qs-btn-accept').addEventListener('click', () => dismiss('accepted'));
    document.getElementById('qs-btn-reject').addEventListener('click', () => dismiss('essential'));

})();
