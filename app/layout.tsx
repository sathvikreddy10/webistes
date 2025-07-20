import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PartyBook - Your Ultimate Party Destination',
  description: 'Discover, book, and enjoy the best parties and events in your city. From nightclub events to private parties, find your perfect night out.',
  keywords: 'parties, events, nightclub, booking, entertainment, nightlife',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}