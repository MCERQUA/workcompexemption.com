import type { Config } from "tailwindcss";

/* ============================================================
   WORK COMP EXEMPTION — "Professional Blue" palette
   Token NAMES are inherited from the shared component architecture;
   VALUES are remapped to compliance blue (primary) / slate gray
   (secondary) / trust blue (accent).
   clay = compliance blue · sage = slate gray · gold = trust blue
   cream = clean white · sand = light blue-gray
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F8FAFC",
        sand: "#EFF4FB",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#1E3A8A",
          dark: "#1E2D6B",
          light: "#2E52B2",
          50: "#EFF4FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E3A8A",
          900: "#1E2D6B",
        },
        sage: {
          DEFAULT: "#475569",
          dark: "#334155",
          light: "#64748B",
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
        },
        gold: {
          DEFAULT: "#2563EB",
          dark: "#1D4ED8",
          light: "#3B82F6",
          50: "#EFF4FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
        },
        espresso: "#0F172A",
        cocoa: "#1E293B",
        mocha: "#64748B",
        adobe: "#CBD5E1",
        adobeDark: "#94A3B8",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #F8FAFC 0%, #EFF4FB 40%, #EEF4FF 70%, #F8FAFC 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(30,58,138,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(71,85,105,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #1E3A8A 0%, #2E52B2 100%)",
        "sage-gradient": "linear-gradient(135deg, #475569 0%, #64748B 100%)",
        "gold-gradient": "linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(30, 58, 138, 0.22), 0 4px 12px -6px rgba(15, 23, 42, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(30, 58, 138, 0.28), 0 10px 30px -10px rgba(15, 23, 42, 0.10)",
        card: "0 2px 8px -2px rgba(15, 23, 42, 0.06), 0 1px 3px -1px rgba(15, 23, 42, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(30, 58, 138, 0.24), 0 8px 20px -8px rgba(15, 23, 42, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(30, 58, 138, 0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
