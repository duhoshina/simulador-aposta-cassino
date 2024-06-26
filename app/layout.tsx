import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sidebar";
import { Providers } from "../providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simulador | Cassino",
  description: "Sistema para entender a matemática por trás dos cassinos, com gráficos e simulações reais de partidas/ganhos/perdas e entre outras.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
        <body 
          className={`${inter.className} antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900`}
        >
          <Providers>
            <div className="flex">
              <SideBar />
              {children}
            </div>
          </Providers>
        </body>
    </html>
  );
}
