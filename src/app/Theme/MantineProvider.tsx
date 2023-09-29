
import '@mantine/core/styles.css';
import {HeaderMegaMenu}  from '../Components/Header';
import { MantineProvider, ColorSchemeScript, Button,MantineThemeProvider } from '@mantine/core';
import Footer from '../Components/Footer'
import { Theme } from './Theme';
import {Montserrat,Homemade_Apple} from "next/font/google";
// import{useColorScheme }from'@mantine/hooks';


// core styles are required for all packages
import '@mantine/core/styles.css';
const montserrat =Montserrat({
  subsets:['latin'],
  display:'swap',
  weight: ["100","200","300","400","500","600","700","800","900"],
})

// const homemade_Apple =Homemade_Apple({
//   subsets:['latin'],
//   display:'swap',
//   weight: ["100","200","300","400","500","600","700","800","900"],
// })


export const metadata = {
  title: 'mantine',
  description: 'Learning Next js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 
  return (
    <html lang="en">
      <head>
        
      </head>
      <body>
        <MantineProvider theme={{
          // preferredColorScheme:"light",
          // colorScheme:"light",
        //   defaultColorScheme: 'light' ,
          // body:{
          //   defaultProps: {
          //     background: 'white',
          //   },

          // },
          // defaultProps: {
          //   background: 'white',
          // },
          // (theme)=>({
          //   track: {
          //     backgroundColor:
          //       theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1],
          //   }
          // }),
          ...Theme}}
          > 
        <HeaderMegaMenu/>
        {children}
        <Footer />

        </MantineProvider>
        
      </body>
    </html>
  );
}