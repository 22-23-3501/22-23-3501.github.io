import { Metadata } from "next"
import Footer from "./componses/footer"
import Header from "./componses/header"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "國際3510地區扶輪少年服務團",
  description: "",
  openGraph: {
    title: "國際3510地區扶輪少年服務團",
    images: "/logo.png",
    description: ""
  } 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
