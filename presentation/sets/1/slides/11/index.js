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
    lang="python"
    code={require("raw-loader!./../../../../../assets/entrypoint.sh.example")}
    ranges={[
      { loc: [0, 51], title: "Running the container" },
      { loc: [3, 4], note: "Update task is executed" },
      { loc: [5, 13], note: "Load overridden variables" },
      { loc: [13, 17], note: "Wait for databases availability" },
      { loc: [17, 19], note: "Migrations task is executed" },
      { loc: [21, 23], note: "Fixtures task is executed" },
      { loc: [35, 50], note: "Define the command to run" },
      { loc: [50, 51], note: "Run the container" }
    ]}
  />
);
