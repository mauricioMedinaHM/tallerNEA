const configured = (import.meta.env.VITE_PUBLIC_URL as string | undefined)?.trim().replace(/\/+$/, "");

export const publicBaseUrl = configured || window.location.origin;

export const promptUrl = `${publicBaseUrl}/prompt`;

/** true cuando el QR apuntaría a una dirección que el público no puede abrir. */
export const promptUrlIsLocal = /localhost|127\.0\.0\.1|0\.0\.0\.0/.test(promptUrl);
