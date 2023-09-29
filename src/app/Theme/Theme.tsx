"use client"
import { MantineThemeOverride } from "@mantine/core";
// import { useColorScheme } from "@mantine/hooks";
// import { useState } from "react";

// const preferredColorScheme = useColorScheme();
// const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);
// const toggleColorScheme = (value?: ColorScheme) =>
//   setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  const myDefault ={defaultColorScheme:"light"};
// export your theme object
export  const Theme: MantineThemeOverride = {

  colors: {
   
    primary: [
        "#fab005", "#fd7e14", "#fcc419", "#fcc419", "#fcc419", "#fcc419", "#fcc419", "#fcc419", "#fcc419", "#fcc419", "#fcc419"    ],
 
  },
  fontFamily:"Roboto",
  // defaultColorScheme:"light",
  primaryColor: "primary",
  primaryShade: 7,
  // colorScheme:"light",
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
};
