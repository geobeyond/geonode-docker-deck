import React from "react";
import { Heading, Slide, List, ListItem, Text, Image, CodePane } from "spectacle";
import CodeSlide from "spectacle-code-slide";
import ImageSlide from "spectacle-image-slide";
import Terminal from "spectacle-terminal";
// Import theme
import createTheme from "spectacle/lib/themes/default";
// Import preload
import preloader from "spectacle/lib/utils/preloader";
require("normalize.css");
// const codetheme = createTheme(
//   {
//     primary: "dark",
//     secondary: "#1F2022",
//     tertiary: "#03A9FC",
//     quarternary: "#CECECE"
//   },
//   {
//     primary: "Montserrat",
//     secondary: "Helvetica"
//   }
// );
const images = {
  ComponentsImage: require("./../../../../../assets/components.svg") //,
  // kat: require("../../../assets/kat.png"),
  // logo: require("../../../assets/formidable-logo.svg"),
  // markdown: require("../../../assets/markdown.png")
};
preloader(images);
export default (
  <Slide transition={["spin", "slide"]} bgColor="primary">
    <Heading size={1} caps fit textColor="tertiary">
      See it in action
    </Heading>
    <Terminal
      title="1. geonode@geonode: ~(zsh)"
      output={[
        "docker-compose up --build",
        "=== after a while ===",
        "docker ps -a",
        <div style={{ color: "#33B969" }}>LIST OF CONTAINERS</div>,
        <div>
          <div>CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES</div>
          <div style={{ color: "#EE5057" }}>
            973b91d26780 geobeyond/nginx:geonode "nginx -g 'daemon of…" 41 hours ago
            Up 41 hours 0.0.0.0:80->80/tcp nginx4geonode
          </div>
          <div style={{ color: "#DEC612" }}>
            421f0bdfff88 geobeyond/geonode:2.7.x "/usr/src/app/entryp…" 41 hours
            ago Up 41 hours 8000/tcp django4geonode
          </div>
          <div style={{ color: "#EE5057" }}>
            26da12e4755f geobeyond/geonode:2.7.x "/usr/src/app/entryp…" 41 hours
            ago Up 41 hours 8000/tcp celery4geonode
          </div>
          <div style={{ color: "#DEC612" }}>
            c73e4c31397e geobeyond/geonode:2.7.x "/usr/src/app/entryp…" 41 hours
            ago Up 41 hours 8000/tcp consumers4geonode
          </div>
          <div style={{ color: "#EE5057" }}>
            d6914d41ce0b geonode/geoserver:2.10.x "/usr/local/tomcat/t…" 41
            hours ago Up 41 hours 8080/tcp geoserver4geonode
          </div>
          <div style={{ color: "#DEC612" }}>
            1d7800eb7332 elasticsearch "/docker-entrypoint.…" 41 hours ago Up 41
            hours 9200/tcp, 9300/tcp elasticsearch4geonode
          </div>
          <div style={{ color: "#EE5057" }}>
            a8400c42081a geonode/geoserver_data:2.10.x "/bin/true" 41 hours ago
            Exited (0) 41 hours ago gsconf4geonode
          </div>
          <div style={{ color: "#DEC612" }}>
            ac8f74580e70 rabbitmq "docker-entrypoint.s…" 41 hours ago Up 41
            hours 4369/tcp, 5671-5672/tcp, 25672/tcp rabbitmq4geonode
          </div>
          <div style={{ color: "#EE5057" }}>
            b7697b4d2f9e geonode/postgis:9.6 "docker-entrypoint.s…" 41 hours ago
            Up 41 hours 5432/tcp db4geonode
          </div>
        </div>
      ]}
    />
  </Slide>
);
