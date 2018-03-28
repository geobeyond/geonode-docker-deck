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
    code={require("raw-loader!./../../../../../assets/rancher-compose.yml.example")}
    ranges={[
      { loc: [0, 187], title: "Compose file for Rancher" },
      { loc: [0, 3], note: "GeoNode documentation link for this file" },
      {
        loc: [3, 4],
        note: "Rancher 1.6 doesn't support minor version of compose syntax"
      },
      {
        loc: [15, 16],
        note:
          "If you want to support multiple geonode on the same host then configure this affinity property accordingly with the custom label geonodehost which has to be configured before during the host provisioning"
      },
      { loc: [67, 69], note: "GeoNode public FQDN/IP of the Rancher managed host" }
    ]}
  />
);
