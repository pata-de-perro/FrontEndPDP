import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pata de Perro",
  description: "Somos PatadePerro, estamos desarrollando una aplicación con la finalidad de facilitar la planificaciones de viajes y reuniones en grupo. Ofreciendo una plataforma donde se pueda centralizar ubicaciones y fechas de tu viaje.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
