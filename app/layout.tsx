import type { Metadata } from "next";
import "@rudra-app/globals.css";
import Config from "@rudra/config";
import { ThemeProvider } from "@rudra-comp/theme-provider";
import { FloatingNav } from "./components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";


export const metadata: Metadata = {
  title: Config.getTitle(),
  description: Config.getSiteDescription(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          <main className="rudra-content">
            <div className="rudra-container">
              {/* <FloatingNav navItems={[
                  {name: 'Home', link: '/', icon: <FaHome/>}
                ]} /> */}
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
