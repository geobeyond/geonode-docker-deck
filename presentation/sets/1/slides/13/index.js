import React from "react";
import { Heading, Slide, List, ListItem, Text, Link } from "spectacle";
import CodeSlide from "spectacle-code-slide";
export default (
  <Slide transition={["zoom"]} bgColor="primary">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      GeoServer and data directory images
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
      All versions are covered by available tags for their images
    </Text>
    <List>
      <ListItem>
        GeoServer
        <List>
          <ListItem margin={30} textSize={30}>
            GeoNode 2.6 <b>==></b> 2.9.x-oauth2
          </ListItem>
          <ListItem margin={30} textSize={30}>
            GeoNode 2.7 <b>==></b> 2.10.x
          </ListItem>
          <ListItem margin={30} textSize={30}>
            GeoNode master <b>==></b> 2.12.x
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        Data directory
        <List>
          <ListItem margin={30} textSize={30}>
            GeoNode 2.6 <b>==></b> 2.9.x-oauth2
          </ListItem>
          <ListItem margin={30} textSize={30}>
            GeoNode 2.7 <b>==></b> 2.10.x
          </ListItem>
          <ListItem margin={30} textSize={30}>
            GeoNode master <b>==></b> 2.12.x
          </ListItem>
        </List>
      </ListItem>
    </List>
  </Slide>
);
