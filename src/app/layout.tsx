import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verona Bike Loop - Building a Bike-Friendly Community",
  description: "A vision for bike-friendly, pedestrian-safe neighborhoods in Verona, NJ. Join us in creating a protected bike loop connecting all corners of our town.",
  keywords: "Verona NJ, bike loop, cycling, pedestrian safety, bike infrastructure, bike lanes, community advocacy",
  openGraph: {
    title: "Verona Bike Loop - Building a Bike-Friendly Community",
    description: "A vision for bike-friendly, pedestrian-safe neighborhoods in Verona, NJ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}
