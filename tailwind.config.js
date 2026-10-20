/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Page background is now red — everything else is drawn in the
        // former background tone (off-white) or red is kept only as a
        // small "pop" detail on top of light surfaces (buttons, cards).
        primary: "#F5F2EC",
        secondary: "#E7D3D3",
        dark: "#111111",
        light: "#D90404",
        paper: "#D90404",
        ink: "#F5F2EC",
        surface: "#A80303",
        metal: "#F5F2EC",
        cream: "#FAF9F6",
        accent: "#F5F2EC",
        "accent-dark": "#E3DCCF",
        pop: "#D90404",
        "pop-dark": "#A80303",
        intelligence: "#D90404"
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
