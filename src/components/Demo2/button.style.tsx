import styled, { css } from "styled-components";
// Uncomment the line below and remove the original import,
// to activate the plugin defined in .babelrc which will show off debugging
// import styled, { css } from "styled-components/macro";

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
