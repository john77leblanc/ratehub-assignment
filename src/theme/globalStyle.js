import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.font.primary};
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  *,
  *:before,
  *:after {
    font-size: inherit;
    box-sizing: border-box;
    transition: background-color 0.25s;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes floatin {
    from {
      bottom: -2rem;
      opacity: 0;
    }
    to {
      opacity {
        bottom: 0;
        opacity: 1;
      }
    }
  }

  .fade-in {
    animation: fadein 0.5s;
  }

  .float-in {
    position: relative;
    bottom: 0;
    animation: floatin 1s;
  }
`;

export default GlobalStyle;
