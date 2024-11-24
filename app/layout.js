import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "POCO-Clinic",
  description: "A modern clinic at in Switzerland",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body
        className={`
        ${geistSans.variable} ${geistMono.variable} 
        antialiased h-[100vh] 
        flex flex-col
        justify-center 
        items-center
        `}
    >
      <Header/>
      <div className='pt-28 h-full w-full px-20'>
        {children}
      </div>
      <Footer />
      </body>
    </html>
  );
}
