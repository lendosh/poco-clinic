import localFont from "next/font/local";
import "./globals.css";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100vh] flex flex-col justify-center items-center`}
    >
    <header className='fixed top-0 pt-4'>
      I'm header
    </header>
    {children}
    <footer className='fixed bottom-0 pb-4'>
        I'm footer
    </footer>
    </body>
    </html>
  );
}
