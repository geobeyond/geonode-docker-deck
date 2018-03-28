import React from "react";
import { Heading, Slide, List, ListItem, Text, Link } from "spectacle";
import CodeSlide from "spectacle-code-slide";
export default (
  <Slide transition={["zoom"]} bgColor="primary">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      Challenges and next to come
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
      Follow up with a technical roundtable with core developers and stakeholders
    </Text>
    <List>
      <ListItem>
        GeoServer is not scaling, it needs
        <List>
          <ListItem margin={30} textSize={30}>
            Containers clustering
          </ListItem>
          <ListItem margin={30} textSize={30}>
            What should be the cluster strategy for Docker/Rancher?
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        Next improvements with Rancher
        <List>
          <ListItem margin={30} textSize={30}>
            Adapt the deploy to the next version 2.0 (now in beta)
          </ListItem>
          <ListItem margin={30} textSize={30}>
            Support the NFS plugin to have named volumes on a NFS server
          </ListItem>
          <ListItem margin={30} textSize={30}>
            Build a GeoNode catalogue for Rancher
          </ListItem>
        </List>
      </ListItem>
    </List>
  </Slide>
);
