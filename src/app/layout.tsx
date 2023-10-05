// main library
import React from "react";

// font
import { Poppins } from "next/font/google";

// main css styles
import '@/styles/globals.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
};

export default RootLayout;