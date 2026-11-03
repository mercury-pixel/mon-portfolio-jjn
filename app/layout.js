import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";


export const metadata = {
  metadataBase: new URL("https://www.ton-domaine.com"),

  title: {
    default: "Jean Jacques N'DJORE | Développeur Géospatial Full-Stack",
    template: "%s | Jean Jacques N'DJORE",
  },

  description:
    "Portfolio de Jean Jacques N'DJORE, développeur géospatial Full-Stack spécialisé en développement web, SIG, géomatique, topographie et irrigation.",

  keywords: [
    "Jean Jacques N'DJORE",
    "Développeur géospatial",
    "Développeur Full-Stack",
    "Développement Web",
    "SIG",
    "Géomatique",
    "Topographie",
    "Irrigation",
    "Next.js",
    "React",
    "PostGIS",
  ],

  authors: [
    {
      name: "Jean Jacques N'DJORE",
    },
  ],

  openGraph: {
    title: "Jean Jacques N'DJORE | Portfolio",
    description:
      "Développeur Géospatial passionné par React, Next.js Python et le développement web. Découvrez mes réalisations en développement web, géomatique et ingénierie.",
    url: "https://www.ton-domaine.com",
    siteName: "Portfolio Jean Jacques N'DJORE",
    locale: "fr_FR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Configurer Poppins pour les titres
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
