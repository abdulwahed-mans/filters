import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_Arabic } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";

const notoSansArabic = Noto_Sans_Arabic({ 
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'واجهة البحث الحديثة',
  description: 'واجهة بحث وتصفية متطورة مبنية باستخدام Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={notoSansArabic.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}