import './globals.css'

export const metadata = {
  title: 'Church Health Dashboard',
  description: 'Multi-location church health and insights dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}