import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Contacts App',
  description: 'Store your contacts.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;1,100&family=Didact+Gothic&family=Inconsolata:wght@200&family=Lato:wght@300;400&family=Montserrat:wght@100;200;300;400&family=Noto+Sans+JP:wght@100;300&family=Noto+Sans+KR:wght@100;300&family=Poppins:wght@100;200&family=Reem+Kufi+Ink&family=Staatliches&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
