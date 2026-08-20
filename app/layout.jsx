import '../src/scss/v4/main.scss'
import './portal.css'

export const metadata = {
  title: 'NEEPCO Procurement Portal',
  description: 'SIH1508 real-time procurement and vendor payment data portal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  )
}
