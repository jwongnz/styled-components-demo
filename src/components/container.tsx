import React from "react";
import * as S from "./container.style";

const Container: React.FC = ({ children }) => {
  return <S.Component>{children}</S.Component>;
};

export default Container;
