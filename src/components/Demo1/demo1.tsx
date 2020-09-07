import React from "react";

import Container from "../container";
import Button from "./button";

function Demo1() {
  const [primarytheme, setUsePrimaryTheme] = React.useState(false);
  const [colour, setColour] = React.useState<string | undefined>(undefined);

  return (
    <Container>
      <button onClick={() => setUsePrimaryTheme(!primarytheme)}>
        Control for Theme
      </button>
      <button onClick={() => setColour(colour ? undefined : "pink")}>
        Control for Pink Text
      </button>
      <Button theme={primarytheme ? "primary" : undefined} color={colour}>
        Themed
      </Button>
    </Container>
  );
}

export default Demo1;
