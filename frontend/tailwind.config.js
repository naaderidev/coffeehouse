/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Dana: "Dana",
        DanaMedium: "Dana Medium",
        DanaDemiBold: "Dana DemiBold",
        MorabbaLight: "Morabba Light",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
      },
      letterSpacing: {
        tightest: "-.065em",
      },
      boxShadow: {
        custom: "0px 1px 10px rgba(0, 0, 0, 0.05)",
      },
      backgroundImage: {
        "home-baner": "url('/images/baners/36.jpg')",
        "store-baner": "url('/images/baners/33.jpg')",
        "cafe-baner": "url('/images/baners/17.jpg')",
        "blog-baner": "url('/images/baners/31.jpg')",
        "contact-baner": "url('/images/baners/1.jpg')",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem",
        },
      },
      screens: {
        xxs: "360px",
        xs: "480px",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
