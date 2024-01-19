import { Poppins } from 'next/font/google'
import './globals.css'
import Nav from './ui/landing/NavBar/nav'

const inter = Poppins({weight: "400", subsets: ['latin']})

export const metadata = {
  title: 'TranslateTracks',
  description: 'Premium AI Dubbing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
