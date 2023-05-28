import { Metadata } from "next"
import Footer from "./componses/footer"
import Header from "./componses/header"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "國際3510地區扶輪少年服務團",
  description: "",
  metadataBase: new URL("https://22-23-3501.github.io"),
  openGraph: {
    title: "國際3510地區扶輪少年服務團",
    images: "/logo.png",
    description: "",
    url: "https://22-23-3501.github.io",
    siteName: "國際3510地區扶輪少年服務團",
    type: "website",
  },
  twitter: {
    title: "國際3510地區扶輪少年服務團",
    description: "",
    creator: "@XiguaXiao"
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
