/**
 * Theme choice made with the header button (src/components/theme-toggle.tsx).
 * Kept outside the client component so the server layout can import the
 * script as a plain string.
 */
export const THEME_KEY = "cv-theme";

/** Runs in <head> before paint: applies a stored "light" or "dark" choice. */
export const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;
