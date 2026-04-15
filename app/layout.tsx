export const metadata = {
  title: 'Create Your Soul Builder',
  description: 'Design the AI that knows you. Your voice. Your values. Your vision.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
