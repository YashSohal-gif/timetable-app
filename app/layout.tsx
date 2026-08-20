import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Timetable — Batch 1",
  description: "A clean, interactive weekly class timetable.",
  manifest: "manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Timetable",
  },
  icons: {
    icon: "icon-192.png",
    apple: "apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#0f172a",
};

// Avoid a flash of the wrong theme before our client script runs.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = stored ? stored === 'dark' : prefersDark;
    if (isDark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
