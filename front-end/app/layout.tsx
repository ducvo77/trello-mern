import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import ContainLayout from './components/ContainLayout'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Trello App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ContainLayout>{children}</ContainLayout>
      </body>
    </html>
  )
}
