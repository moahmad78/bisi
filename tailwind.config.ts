import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        surface: {
          DEFAULT: "#1A1A1A",
          light: "#2C2C2C",
          lighter: "#3D3D3D"
        },
        foreground: "#FFFFFF",
        metallic: {
          100: "#F1F5F9",
          300: "#CBD5E1",
          500: "#94A3B8",
          700: "#475569",
          900: "#1E293B",
        },
        accent: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          dark: "#1D4ED8",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        'brushed-steel': 'linear-gradient(104deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 20%, rgba(255,255,255,0.02) 40%, rgba(0,0,0,0) 60%, rgba(255,255,255,0.03) 80%, rgba(0,0,0,0) 100%)',
        'industrial-pattern': 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
