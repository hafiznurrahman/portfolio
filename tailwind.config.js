/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
        darkMode: "selector",
    theme: {
        extend: {
            colors: {
                dark: "rgb(var(--dark) / 1)",
                light: "rgb(var(--light) / 1)",
                primary: "rgb(var(--primary) / 1)",
                secondary: "rgb(var(--secondary) / 1)"
            }
        }
    },
    plugins: []
};
