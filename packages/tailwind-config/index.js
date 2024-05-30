const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../../apps/**/*.{js,ts,jsx,tsx,mdx}", "../../sdk/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "search-modal": 'url("/search-modal-background.jpg")',
        layout: 'url("/layout-background.jpg")',
      },
      boxShadow: {
        article: "0 0 30px 3px rgba(0,0,0,0.5)",
        "search-results": "0 0 10px 3px rgba(0,0,0,0.5)",
      },
      maxHeight: {
        modal: "calc(100vh - (4rem * 2))",
      },
      maxWidth: {
        modal: "calc(100vw - (8rem * 2))",
      },
      height: {
        "search-results": "calc(100% - 49px)",
      },
      colors: {
        "ocean-blue": "#003052",
      },
      fontFamily: {
        lexend: "var(--font-lexend)",
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '[data-component="cMarkdown"] p:empty:not(:last-child)': {
          paddingTop: "1rem",
        },

        '[data-component="cMarkdown"] h2 + h3, [data-component="cMarkdown"] h3 + h4': {
          marginTop: "2rem",
        },

        '[data-component="cMarkdown"] p:not(:empty) + p:not(:empty)': {
          marginTop: "1rem",
        },

        '[data-component="cSearchModel"] mark, [data-component="cSearchModel"] span': {
          display: "inline",
        },

        '[data-component="AlgoliaHit"] em': {
          "background-color": "yellow",
          "font-style": "normal",
        },
      });
    }),
  ],
  safelist: [
    "overflow-y-hidden",

    /** widths */
    "w-full",
    "w-4",
    "w-6",
    "w-8",
    "w-10",
    "w-12",
    "w-14",
    "w-16",
    "w-18",
    "w-20",

    /** heights */
    "h-4",
    "h-6",
    "h-8",
    "h-10",
    "h-12",
    "h-14",
    "h-16",
    "h-18",
    "h-20",
  ],
};
