const siteLogo: string = import.meta.env.VITE_SITE_LOGO || "";
const siteText: string = import.meta.env.VITE_BASE_NAME;
const apiBaseURL: string = import.meta.env.VITE_BACKEND_URL;
const credential = "LOGIN_CREDENTIAL";

export { siteLogo, siteText, credential, apiBaseURL };
