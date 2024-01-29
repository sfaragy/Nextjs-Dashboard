import '@/app/ui/global.css';
import { inter } from '@/app/ui/assets/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}  suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
