import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { PlanProvider } from "./contexts/PlanContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description: "A modern workout library and daily workout planning application.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"

      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-black`}
    >
      <body className="min-h-full flex flex-col  dark:text-white">
        <PlanProvider>
          <Navbar></Navbar>

          <main className="flex-1">
            {children}
          </main>
          <Footer></Footer>
        </PlanProvider>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          theme="dark"
        />
      </body>
    </html>
  );
}
