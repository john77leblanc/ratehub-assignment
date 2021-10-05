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
    transition: background-color 0.25s, bottom 0.25s;
  }

  button:not([disabled]) {
    cursor: pointer;
  }

  input, button {
    border: none;
    background-color: transparent;

    :focus {
      border: none;
      outline: none;
    }
  }

  h1 {
    color: ${(props) => props.theme.color.accent};
    margin-top: 0;
    font-size: 1.5rem;
  }

  h2 {
    margin-top: 0;
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

  .card {
    border-radius: 1rem;
    box-shadow: 0 2px 4px ${(props) => props.theme.color.main};
    padding: 1rem;
  }
`;

export default GlobalStyle;
