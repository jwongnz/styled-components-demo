import styled, { css } from "styled-components/macro";

export interface ComponentStyleProps {
  theme?: "primary";
  color?: string;
}

export const Button = styled.button`
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;

  ${(props: ComponentStyleProps) =>
    css`
      color: ${props.color ? props.color : "white"};
      background: ${props.theme === "primary"
        ? "palevioletred"
        : "cornflowerblue"};
    `};
`;
