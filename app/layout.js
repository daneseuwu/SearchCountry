import "./globals.css";
import { Poppins } from "next/font/google";
import Providers from "./providers";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets:["latin"],
  weight:["200","300","400","500"]
 });

export const metadata = {
  title: "SearchCoutry",
  description: "Search  what is your Coutry? ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="flex flex-col justify-between min-h-screen px-4 dark:bg-[#0d1117]">
        <Providers>
          <Nav />
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
