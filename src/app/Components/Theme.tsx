// theme.ts file
import { MantineThemeOverride } from "@mantine/core";

 

// export your theme object
export  const Theme: MantineThemeOverride = {
  colors: {
    netural: [
      "#FFFFFF",
      "#F1F4F9",
      "#E2E8F0",
      "#CBD5E0",
      "#A9B9CC",
      "#8496AE",
      "#68778D",
      "#4A5568",
      "#323A43",
      "#202327",
    ],
    primary: [
        "#fab005", "#fd7e14", "#fcc419", "#fcc419", "#fcc419", "#fcc419", "#fcc419", "#fcc419", "#fcc419", "#fcc419", "#fcc419"    ],
    secondary: [
      "#E7F4FE",
      "#C0E1FC",
      "#99D0FA",
      "#72BDF8",
      "#46A9F7",
      "#2D9EF5",
      "#0B88EA",
      "#0A7AD2",
      "#0862A9",
      "#0C2335",
    ],
    success: [
      "#E2E8F0",
      "#EEF6EE",
      "#DEEDDE",
      "#CDE4CD",
      "#BDDCBC",
      "#ACD3AC",
      "#77B776",
      "#58A758",
      "#3F753E",
      "#356435",
    ],
    error: [
      "#E2E8F0",
      "#FFE5E5",
      "#FFB0B0",
      "#FA8585",
      "#F85454",
      "#F73B3B",
      "#F62323",
      " #F50A0A",
      "#C71E1E",
      "#9F1818",
    ],
    
  },
  primaryColor: "primary",
  primaryShade: 7,
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
 
};
