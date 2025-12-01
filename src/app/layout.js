import React from 'react';
import './globals.css'; // **यह लाइन डिज़ाइन के लिए ज़रूरी है**

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
