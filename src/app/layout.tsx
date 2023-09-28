
import '@mantine/core/styles.css';
import {HeaderMegaMenu}  from './Components/Header';
import { MantineProvider, ColorSchemeScript, Button,MantineThemeProvider } from '@mantine/core';
import Footer from './Components/Footer'
import { Theme } from './Components/Theme';

// core styles are required for all packages
import '@mantine/core/styles.css';


export const metadata = {
  title: 'mantine',
  description: 'Learning Next js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={Theme}
          > 
        <HeaderMegaMenu/>
        {children}
        <Footer />

        </MantineProvider>
        
      </body>
    </html>
  );
}