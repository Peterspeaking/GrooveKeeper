// app/theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'BoecklinsUniverse', sans-serif", // For headings
    body: "'BoecklinsUniverse', sans-serif",    // For body text
  },
});

export default theme;
