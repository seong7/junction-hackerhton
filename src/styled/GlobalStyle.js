import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { normalize } from 'styled-normalize';

import { media } from './theme';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${normalize}
  ${media.lessThan('sm')`
    html {
      font-size: 12px;
    }
  `}
  ${media.between('sm', 'lg')`
    html {
      font-size: 13px;
    }
  `}
  html, body {
    font-family: Noto Sans, sans-serif;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  
  a, a:link, a:visited, a:hover, a:active {
    color: inherit;
    cursor: pointer;
    text-decoration: inherit;
    font-weight: inherit;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
