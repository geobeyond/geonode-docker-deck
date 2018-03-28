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
        Faster development process
        <List>
          <ListItem margin={30} textSize={30}>
            No need to install 3rd parties, run their containers (PostgreSQL,
            Rabbitmq, Elasticsearch, etc)
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        Easier integration and testing
        <List>
          <ListItem margin={30} textSize={30} fit bold>
            Docker Compose
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        Scale easier to native infrastructure
        <List>
          <ListItem margin={30} textSize={30} fit bold>
            Docker Swarm
          </ListItem>
        </List>
      </ListItem>
    </List>
  </Slide>
);
