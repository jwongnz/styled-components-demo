import React from "react";

import Container from "../container";
import * as S from "./demo3.style";

function Demo3() {
  return (
    <Container>
      <S.GlobalStyle />
      <S.Outer>
        <S.Inner>Some text for Demo 3</S.Inner>
      </S.Outer>
    </Container>
  );
}

export default Demo3;
