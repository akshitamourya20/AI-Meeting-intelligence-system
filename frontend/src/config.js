// Dynamic configuration for local vs production environments
const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
export const BACKEND_URL = import.meta.env.VITE_API_URL || (isLocalhost ? `http://localhost:5000` : `https://online-meet-eso9.onrender.com`);
