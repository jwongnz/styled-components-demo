import styled, { css } from "styled-components";

export interface ComponentStyleProps {
  active: boolean;
}

export const Button = styled.button`
  ${(props: ComponentStyleProps) =>
    css`
      background: ${props.active ? "pink" : "white"};
      color: ${props.active ? "white" : "red"};
    `};
`;
