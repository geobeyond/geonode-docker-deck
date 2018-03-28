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
  ComponentsImage: require("../../../../../assets/components.svg") //,
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
    code={require("raw-loader!./../../../../../assets/tasks.py.example")}
    ranges={[
      { loc: [0, 184], title: "Where the magic happens" },
      { loc: [77, 93], note: "Getting the Docker daemon IP" },
      { loc: [18, 35], note: "Task for updating variables" },
      { loc: [35, 50], note: "Update and override of default variables from .env files" },
      { loc: [50, 58], note: "Task for applying migrations" },
      { loc: [59, 65], note: "Prepare any required fixture" },
      { loc: [66, 74], note: "Task for running fixtures" }
    ]}
  />
);
