import type { Preview } from '@storybook/react'
import { Provider} from "../src/components/ui/provider"
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

const preview: Preview = {
  decorators: [
      withThemeFromJSXProvider({
        // themes: { light: lightTheme, dark: darkTheme },
        // defaultTheme: "light",
        Provider: Provider,
      }),
    ],
  parameters: {
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;


// import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import { withThemeFromJSXProvider } from "@storybook/addon-themes";
// import type { Preview } from "@storybook/react";

// // Define Chakra UI themes
// const lightTheme = extendTheme({ config: { initialColorMode: "light" } });
// const darkTheme = extendTheme({ config: { initialColorMode: "dark" } });

// export const decorators = [
//   withThemeFromJSXProvider({
//     themes: { light: lightTheme, dark: darkTheme },
//     defaultTheme: "light",
//     Provider: ChakraProvider,
//   }),
// ];

// export const parameters: Preview["parameters"] = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: { expanded: true },
// };