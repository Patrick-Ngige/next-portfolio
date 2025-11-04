/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Glass morphism classes
    "card-glass",
    "card-glass-light",
    "hover-glow",
    "button-ghost",
    "progress-fill",
    "badge-glow",
    "hover-lift",

    // Gradient text classes
    "gradient-text",
    "gradient-text-subtle",

    // Custom animations
    "animate-gradient-x",
    "animate-gradient-y",
    "animate-gradient-xy",
    "animate-shimmer",
    "animate-float",
    "animate-pulse-glow",

    // Custom shadows
    "shadow-glow-xs",
    "shadow-glow-sm",
    "shadow-glow-md",
    "shadow-glow-lg",
    "shadow-glow-xl",
    "shadow-glow-2xl",
    "shadow-glow-cyan",
    "shadow-glow-magenta",
    "shadow-glow-intense",
    "shadow-inner-glow",
    "text-glow",

    // Custom scrollbars
    "scrollbar-thin",
    "scrollbar-thumb-accent-cyan",
    "scrollbar-track-background-page",

    // Backdrop blur
    "backdrop-blur-enhanced",
    "backdrop-blur-glass",

    // Section and layout classes
    "section-padding",
    "container-max",
    "section-bg",
    "section-divider",
    "section-bg",

    // Button classes
    "button-primary",
    "button-secondary",

    // Typography classes
    "text-hero",
    "text-section",
    "text-card",
    "text-body",
    "text-small",

    // Dynamic gradient backgrounds that might be purged
    "bg-[length:200%_auto]",
    "bg-gradient-to-r",
    "bg-gradient-to-br",
    "bg-gradient-to-b",

    // Additional utility classes found in components
    "bg-[#0A0A0A]",
    "bg-[#141414]",
    "text-[#E4E4E7]",
    "border-[#262626]",

    // Flex utility classes
    "flex-center",
    "flex-between",
    "flex-start",
    "flex-col-center",
    "section-container",
    "justify-items-center",
    "max-w-none",
  ],
  theme: {
    extend: {
      colors: {
        // Custom portfolio colors (your existing theme)
        "background-page": "#0A0A0A",
        "background-surface": "#141414",
        "border-subtle": "#262626",
        "text-primary": "#E4E4E7",
        "text-secondary": "#A1A1AA",
        "accent-cyan": "#00D1FF",
        "accent-magenta": "#E84DFF",
        "semantic-success": "#34D399",
        "semantic-warning": "#FBBF24",

        // Light theme
        "background-page-light": "#F8F9FA",
        "background-surface-light": "#FFFFFF",
        "border-subtle-light": "#E5E7EB",
        "text-primary-light": "#18181B",
        "text-secondary-light": "#71717A",

        // Standard shadcn/ui colors (map to your custom colors)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        hero: ["72px", { lineHeight: "1.1" }],
        section: ["48px", { lineHeight: "1.2" }],
        card: ["24px", { lineHeight: "1.3" }],
        body: ["18px", { lineHeight: "1.6" }],
        small: ["14px", { lineHeight: "1.4" }],
      },
      spacing: {
        // Custom spacing
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "32px",
        xl: "48px",
        "2xl": "64px",
        "3xl": "96px",
        section: "128px",
        "my-section": "128px",
        "py-section": "128px",
        "px-section": "32px",
        "section-gap": "128px",
        "content-gap": "64px",
        "element-gap": "32px",
      },
      backdropBlur: {
        enhanced: "16px",
        glass: "20px",
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      borderRadius: {
        card: "12px",
        small: "8px",
        large: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 50%, #0A0A0A 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(0, 209, 255, 0.05) 0%, rgba(232, 77, 255, 0.05) 100%)",
      },
      boxShadow: {
        "glow-md": "0px 0px 24px rgba(0, 209, 255, 0.15)",
        "glow-lg": "0px 0px 48px rgba(0, 209, 255, 0.15)",
        "glow-xl": "0px 0px 64px rgba(0, 209, 255, 0.2)",
        "glow-2xl": "0px 0px 80px rgba(0, 209, 255, 0.25)",
        "glow-xs": "0px 0px 8px rgba(0, 209, 255, 0.1)",
        "glow-sm": "0px 0px 16px rgba(0, 209, 255, 0.12)",
        "glow-cyan": "0 0 20px rgba(0, 209, 255, 0.4)",
        "glow-magenta": "0 0 20px rgba(232, 77, 255, 0.4)",
        "glow-intense": "0 0 40px rgba(0, 209, 255, 0.6)",
        "inner-glow": "inset 0 0 20px rgba(0, 209, 255, 0.1)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
        shimmer: "shimmer 2s linear infinite",
        "bounce-slow": "bounce 3s infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-y": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center bottom",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left top",
          },
          "25%": {
            "background-size": "200% 200%",
            "background-position": "right top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right bottom",
          },
          "75%": {
            "background-size": "200% 200%",
            "background-position": "left bottom",
          },
        },
        shimmer: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(0, 209, 255, 0.4)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(0, 209, 255, 0.8)",
          },
        },
      },
    },
  },
  plugins: [],
}
