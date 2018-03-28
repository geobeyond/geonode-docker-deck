import React from "react";
import { Heading, Slide, List, ListItem, Text } from "spectacle";
import CodeSlide from "spectacle-code-slide";
export default (
  <Slide transition={["zoom"]} bgColor="primary">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      Docker benefits for GeoNode
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
      Portability (at first glance) for complex application like GeoNode
    </Text>
    <List>
      <ListItem>
        Persistence, backup, recoverability
        <List>
          <ListItem margin={30} textSize={30}>
            Data containers, volumes
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        Ship GeoNode images rather than packages
        <List>
          <ListItem margin={30} textSize={30} fit bold>
            Docker Hub
          </ListItem>
        </List>
      </ListItem>
      <ListItem>Easier and cleaner monitoring</ListItem>
    </List>
  </Slide>
);
