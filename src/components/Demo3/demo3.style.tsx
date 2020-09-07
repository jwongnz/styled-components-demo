import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--font-size-normal: 10px;
	}
	@media (min-width: 1024px) {
		:root {
			--font-size-normal: 24px;
		}
	}
`;

export const Outer = styled.div`
  --font-size-normal: 50px;
`;

export const Inner = styled.h3`
  font-size: var(--font-size-normal);
`;
