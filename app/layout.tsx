'use client'

import "./globals.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>TON Connect Demo</title>
      </head>
      <body>
        <TonConnectUIProvider manifestUrl="https://violet-traditional-rabbit-103.mypinata.cloud/ipfs/QmQJJAdZ2qSwdepvb5evJq7soEBueFenHLX3PoM6tiBffm">
          {children}
          {/* Footer */}
          <div className="fixed bottom-0 left-0 right-0 bg-white shadow p-4 flex justify-around">
            <a href="https://davenova.github.io/mini-app-test/" className="text-center">
              <i className="fas fa-home text-gray-500" />
              <div className="text-sm text-gray-500">Home</div>
            </a>
            <a href="https://wonmmet.vercel.app/" className="text-center">
              <i className="fas fa-trophy text-gray-500" />
              <div className="text-sm text-gray-500">Wallet</div>
            </a>
            <a className="text-center" href="https://invos.vercel.app/">
              <i className="fas fa-user-friends text-gray-500" />
              <div className="text-sm text-gray-500">Friends</div>
            </a>
            <a href="profile.html" className="text-center">
              <i className="fas fa-cat text-gray-500" />
              <div className="text-sm text-gray-500">Profile</div>
            </a>
            <a href="airdrop.html" className="text-center">
              <i className="fas fa-gift text-gray-500" />
              <div className="text-sm text-gray-500">Airdrop</div>
            </a>
          </div>
        </TonConnectUIProvider>
      </body>
    </html>
  );
}
