import React from "react";

import * as S from "./button.style";

interface ComponentProps extends S.ComponentStyleProps {}

const Button: React.FC<ComponentProps> = ({ theme, color }) => {
  return (
    <S.Button theme={theme} color={color}>
      Themed
    </S.Button>
  );
};

export default Button;
