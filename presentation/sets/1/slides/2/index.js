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
        Support <b>native</b> based host
        <List>
          <ListItem margin={30} textSize={30}>
            Docker for Mac/Windows
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        Support <b>docker-machine</b> based host
        <List>
          <ListItem margin={30} textSize={30}>
            Docker toolbox
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        Immutability <b>==></b> Same behavior on dev/test/production
        environment. Easier developer life
      </ListItem>
    </List>
  </Slide>
);
