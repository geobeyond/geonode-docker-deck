import React from "react";
import { Heading, Slide, List, ListItem, Text, Link } from "spectacle";
import CodeSlide from "spectacle-code-slide";
export default (
  <Slide transition={["zoom"]} bgColor="primary">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      Thanks
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
      Francesco Bartoli
    </Text>
    <List>
      <ListItem textColor="tertiary" size={1} fit bold>
        francesco.bartoli@geobeyond.it
      </ListItem>
      <ListItem textColor="tertiary" size={1} fit bold>
        github: @francbartoli
      </ListItem>
    </List>
  </Slide>
);
