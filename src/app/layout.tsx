
import '@mantine/core/styles.css';
import {HeaderMegaMenu}  from './Components/Header';
import { MantineProvider,useMantineColorScheme } from '@mantine/core';
import Footer from './Components/Footer'
import { Theme } from './Theme/Theme';
import {Roboto,Homemade_Apple} from "next/font/google";


// core styles are required for all packages
import '@mantine/core/styles.css';
  // const roboto =Roboto({
  //   subsets:['latin'],
  //   display:'swap',
  //   weight: ["100","300","400","500","600","700","800","900"],
  // })

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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300;1,400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <MantineProvider defaultColorScheme='light'  theme={{
          // preferredColorScheme:"light",
          // colorScheme:"light",
          // defaultColorScheme: 'light' ,
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