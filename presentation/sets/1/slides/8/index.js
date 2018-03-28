import React from "react";
import { Heading, Slide, List, ListItem, Text, Image } from "spectacle";
import CodeSlide from "spectacle-code-slide";
import ImageSlide from "spectacle-image-slide";
// Import theme
import createTheme from "spectacle/lib/themes/default";
// Import preload
import preloader from "spectacle/lib/utils/preloader";
require("normalize.css");
const codetheme = createTheme(
  {
    primary: "black",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);
const images = {
  ComponentsImage: require("./../../../../../assets/components.svg") //,
  // kat: require("../../../assets/kat.png"),
  // logo: require("../../../assets/formidable-logo.svg"),
  // markdown: require("../../../assets/markdown.png")
};
preloader(images);
export default (
  <CodeSlide
    theme={codetheme}
    transition={["fade"]}
    bgColor="tertiary"
    lang="yaml"
    code={require("raw-loader!./../../../../../assets/django.env.example")}
    ranges={[
      { loc: [0, 19], title: "ENV variables for Django" },
      { loc: [1, 3], note: "If filled then they drive FQDN and all URLs for GeoNode" },
      { loc: [12, 13], note: "Define the deployment strategy" },
      { loc: [13, 14], note: "Define the command for running the django container process" }
    ]}
  />
);
