import { Poppins } from 'next/font/google'
import './globals.css'
import {NextIntlClientProvider, useMessages} from 'next-intl';


const inter = Poppins({weight: "400", subsets: ['latin']})

export const metadata = {
  title: 'Globalize Your Content with Cost Effective Premium AI Dubbing and Video Translation Services',
  description: "Unlock global audience engagement with TranslateTracks' high quality AI-powered dubbing and video translation services. Expert-verified for accuracy and seamless lip sync, our platform offers premium dubbing at a fraction of the cost.",
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
