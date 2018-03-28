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
    code={require("raw-loader!./../../../../../assets/docker-compose.example")}
    ranges={[
      { loc: [0, 146], title: "GeoNode docker-compose!" },
      { loc: [3, 19], note: "PostgreSQL service" },
      { loc: [18, 28], note: "Elasticsearch service" },
      { loc: [28, 38], note: "RabbitMQ service" },
      { loc: [38, 51], note: "Actually GeoNode service" },
      { loc: [51, 57], note: "I want to focus here!" },
      { loc: [57, 76], note: "Celery service" },
      { loc: [76, 95], note: "Consumers service for new notification system" },
      { loc: [95, 108], note: "GeoServer service!" },
      { loc: [108, 112], note: "and GeoServer Data Directory!" },
      { loc: [112, 127], note: "The entrypoint for all GeoNode components" },
      { loc: [127, 138], note: "GeoServer Data Directory as a data container" },
      { loc: [138, 146], note: "Finally all the volumes for persistence" }
    ]}
  />
);
