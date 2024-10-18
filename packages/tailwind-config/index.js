/** @format */
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "../../apps/**/*.{js,ts,jsx,tsx,mdx}",
    "../../sdk/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      gridTemplateColumns: {
        "user-table": "1fr, 7rem, 10rem, 10rem, 2rem",
        "user-logs": "8rem, 1fr",
        "user-activities": "8rem, 1fr",
        "activity-bundle": "6rem, 1fr",
      },
      rotate: {
        "opened-accordion-triangle": "61deg",
        "closed-accordion-triangle": "33deg",
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '[data-component="cMarkdown"] p:empty:not(:last-child)': {
          paddingTop: "1rem",
        },

        '[data-component="cMarkdown"] h2 + h3, [data-component="cMarkdown"] h3 + h4':
          {
            marginTop: "2rem",
          },

        '[data-component="cMarkdown"] p:not(:empty) + p:not(:empty)': {
          marginTop: "1rem",
        },

        '[data-component="cSearchModel"] mark, [data-component="cSearchModel"] span':
          {
            display: "inline",
          },

        '[data-component="AlgoliaHit"] em': {
          "background-color": "yellow",
          "font-style": "normal",
        },
        ".sidebar-height": {
          height: "calc(100vh - var(--header-height))",
        },
        ".hide-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none" /* Chrome, Safari, and Opera */,
        },
      });
    }),
  ],
  safelist: [
    "overflow-y-hidden",
    "grid-cols-user-table",
    "opened-accordion-triangle",
    "closed-accordion-triangle",
    "hidden",

    /** widths */
    // FRONTEND: Clean up a lot of these as none of them are custom defined.
    "w-full",
    "w-3",
    "w-4",
    "w-5",
    "w-6",
    "w-7",
    "w-8",
    "w-9",
    "w-10",
    "w-11",
    "w-12",
    "w-13",
    "w-14",
    "w-15",
    "w-16",
    "w-17",
    "w-18",
    "w-19",
    "w-20",
    "w-21",
    "w-22",
    "w-23",
    "w-24",
    "w-25",
    "w-26",
    "w-27",
    "w-28",
    "w-29",
    "w-30",
    "w-31",
    "w-32",
    "w-33",
    "w-34",
    "w-35",
    "w-36",
    "w-37",
    "w-38",
    "w-39",
    "w-40",

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

export default tailwindConfig;
