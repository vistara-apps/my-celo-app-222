'use client';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { base } from 'wagmi/chains';
import { ThemeProvider } from './components/ThemeProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <OnchainKitProvider
          apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY || 'cdp_demo_key'}
          chain={base}
        >
          <ThemeProvider theme="celo">{children}</ThemeProvider>
        </OnchainKitProvider>
      </body>
    </html>
  );
}
