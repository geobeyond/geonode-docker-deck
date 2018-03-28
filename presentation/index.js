// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  SlideSet,
  Image,
  Text
} from "spectacle";

// Import Terminal
import Terminal from "spectacle-terminal";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import preloader
import preloader from "spectacle/lib/utils/preloader";

// Require CSS
require("normalize.css");

// Require images
const images = {
  ComponentsImage: require("./../assets/components.svg") //,
  // kat: require("../../../assets/kat.png"),
  // logo: require("../../../assets/formidable-logo.svg"),
  // markdown: require("../../../assets/markdown.png")
};
preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

// Import distributed slides for set 1
const slideSet_1 = [
  import("./sets/1/slides/1"),
  import("./sets/1/slides/2"),
  import("./sets/1/slides/3"),
  import("./sets/1/slides/4"),
  import("./sets/1/slides/5"),
  import("./sets/1/slides/6"),
  import("./sets/1/slides/7"),
  import("./sets/1/slides/8"),
  import("./sets/1/slides/9"),
  import("./sets/1/slides/11"),
  import("./sets/1/slides/12"),
  import("./sets/1/slides/13"),
  import("./sets/1/slides/14"),
  import("./sets/1/slides/15"),
  import("./sets/1/slides/16"),
  import("./sets/1/slides/17"),
  import("./sets/1/slides/18")
];

export default class Presentation extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { slideSet_1: Array(slideSet_1.length).fill(<Slide key="loading" />) };
    // A placeholder for slides once they're loaded.
  }

  componentDidMount() {
    const importedSlideSet_1 = [];
    Promise.all(slideSet_1).then((slidesImportsResolved) => {
      slidesImportsResolved.forEach((slideSet_1) => {
        importedSlideSet_1.push(slideSet_1.default);
      });
      this.setState({ slideSet_1: importedSlideSet_1 });
    });
  }

  render() {
    const { slideSet_1 } = this.state;
    return <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <SlideSet>
          {slideSet_1.length ? slideSet_1.map((slideSet_1, index) => {
              return React.cloneElement(slideSet_1, { key: index });
            }) : <Slide />}
        </SlideSet>
      </Deck>;
  }
}
