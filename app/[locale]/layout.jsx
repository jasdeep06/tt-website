import { Poppins } from 'next/font/google'
import './globals.css'
import {NextIntlClientProvider, useMessages} from 'next-intl';


const inter = Poppins({weight: "400", subsets: ['latin']})

export const metadata = {
  title: 'TranslateTracks',
  description: 'Premium AI Dubbing',
}

export default function RootLayout({ children, params:locale}) {
  const messages = useMessages()
  return (
    <html lang={locale}>
      <body className={inter.className}>
      
      <NextIntlClientProvider messages={messages} locale={locale}>
        
        {children}
      </NextIntlClientProvider>
        
      </body>
    </html>
  )
}
