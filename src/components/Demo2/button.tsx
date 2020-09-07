import React from "react";

import * as S from "./button.style";

const Button2: React.FC = () => {
  const [active, setActive] = React.useState(false);

  return (
    <S.Button active={active} onClick={() => setActive(!active)}>
      {active ? "Active" : "Inactive"} Button
    </S.Button>
  );
};

export default Button2;
