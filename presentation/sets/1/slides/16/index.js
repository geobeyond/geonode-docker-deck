import React from "react";
import { Heading, Slide, List, ListItem, Text, Image } from "spectacle";
import CodeSlide from "spectacle-code-slide";
import ImageSlide from "spectacle-image-slide";
// Import preload
import preloader from "spectacle/lib/utils/preloader";
require("normalize.css");
const images = {
  RancherGeonodeStackImage: require("./../../../../../assets/rancher_geonode_stack.png") //,
  // kat: require("../../../assets/kat.png"),
  // logo: require("../../../assets/formidable-logo.svg"),
  // markdown: require("../../../assets/markdown.png")
};
preloader(images);
export default (
  <Slide transition={["zoom"]} bgColor="primary">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      GeoNode stack on Rancher
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1} >
    Deployed running containers
    </Text>
    <Image
      src={images.RancherGeonodeStackImage.replace("/", "")}
      margin="0px auto 40px"
    />
    {/* <ImageSlide image={images.components} title="ImageSlide demo!" /> */}
  </Slide>
);
