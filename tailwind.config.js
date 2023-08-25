/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        circleStar: 'url("/circle-star.svg")',
      },
      flex: {
        "auto-0": "0 0 auto",
      },
      spacing: {
        "120px": "120px",
      },
      maxWidth: {
        "33rem": "33rem",
        "62rem": "62.1rem",
      },
      gap: {
        17: "4.3rem",
      },
      screens: {
        mb: "360px",
        tb: "940px",
        dk: "1440px",
      },
    },
    container: {
      center: true,
    },
    animation: {
      "spin-slow": "spin 6s linear infinite",
    },

    colors: {
      blue: "#006CB6",
      "blue-dark": "#385072",
      "blue-additional": "#222C41",
      green: "#6DBF5A",
      "green-dark": "#26A570",
      black: "#27282C",
      dark: "#0D0D0E",
      "gray-1": "#484A4E",
      "gray-2": "#626770",
      "gray-3": "#90949D",
      "gray-4": "#CDD3DE",
      "gray-5": "#F7F8FA",
      "gray-6": "#8B8E9A",
      "gray-7": "#3B3C3F",

      white: "#FFFFFF",
      red: "#835b5b",
      "red-white": "#ff0000",
      purple: "#260830",
      "purple-white": "#704a70",
    },
    fontSize: {
      h1: [
        "7.5rem",
        {
          lineHeight: "7.75rem",
          fontWeight: "600",
        },
      ],
      tb_h1: [
        "5.875rem",
        {
          lineHeight: "6.125rem",
          fontWeight: "600",
        },
      ],
      mb_h1: [
        "3.5rem",
        {
          lineHeight: "3.75rem",
          fontWeight: "600",
        },
      ],
      h2: [
        "5.75rem",
        {
          lineHeight: "6.25rem",
          fontWeight: "600",
        },
      ],
      tb_h2: [
        "4.25rem",
        {
          lineHeight: "4.25rem",
          fontWeight: "600",
        },
      ],
      mb_h2: [
        "2.625rem",
        {
          lineHeight: "2.875rem",
          fontWeight: "600",
        },
      ],
      h3: [
        "4.875rem",
        {
          lineHeight: "4.375rem",
          fontWeight: "400",
        },
      ],
      tb_h3: [
        "3.875rem",
        {
          lineHeight: "3.5rem",
          fontWeight: "400",
        },
      ],
      mb_h3: [
        "2.625rem",
        {
          lineHeight: "2.5rem",
          fontWeight: "400",
        },
      ],
      titleX: [
        "2.5rem",
        {
          lineHeight: "3rem",
          fontWeight: "600",
        },
      ],
      titleY: [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "600",
        },
      ],
      titleL: [
        "1.75rem",
        {
          lineHeight: "2.125rem",
          fontWeight: "600",
        },
      ],
      titleM: [
        "1.5rem",
        {
          lineHeight: "2rem",
          fontWeight: "600",
        },
      ],
      titleS: [
        "0.875rem",
        {
          lineHeight: "1.25rem",
          fontWeight: "600",
        },
      ],
      textX: [
        "1.25rem",
        {
          lineHeight: "2rem",
          fontWeight: "400",
        },
      ],
      textM: [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "400",
        },
      ],
      textS: [
        "0.875rem",
        {
          lineHeight: "1.375rem",
          fontWeight: "400",
        },
      ],
      caption12: [
        "0.75rem",
        {
          lineHeight: "1rem",
          fontWeight: "400",
        },
      ],
      textButton: [
        "0.875rem",
        {
          lineHeight: "1.25rem",
          fontWeight: "600",
        },
      ],
      textButtonCaps: [
        "1rem",
        {
          lineHeight: "1.5rem",
          fontWeight: "400",
        },
      ],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen mb": {
            maxWidth: "345px",
          },
          "@screen tb": {
            maxWidth: "880px",
          },
          "@screen dk": {
            maxWidth: "1220px",
          },
        },
      });
    },
  ],
};
