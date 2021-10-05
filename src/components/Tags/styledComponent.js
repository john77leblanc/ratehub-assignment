import Styled from 'styled-components';


export const StyledComponent = Styled.span`
  .tagEntry {
    background-color: ${(props) => props.theme.grays.light};
    border: 1px solid ${(props) => props.theme.grays.light};

    :focus {
      background-color: ${(props) => props.theme.background.main};
    }
  }

  button {
    border: 1px solid ${(props) => props.theme.grays.light};

    :hover {
      background-color: ${(props) => props.theme.color.accent};
      color: ${(props) => props.theme.color.light};
    }
  }

  ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
    margin-top: 0.25rem;
    padding-inline-start: 0;
  }

  li {
    background-color: ${(props) => props.theme.color.accent};
    border-radius: 5px;
    color: ${(props) => props.theme.color.light};
    padding: 0 0 0 0.25rem;
    overflow: hidden;

    button {
      border-width: 0;
      border-left-width: 1px;
      color: ${(props) => props.theme.color.light};
      display: inline-block;
      height: 100%;
      margin-left: 0.25rem;

      :hover {
        background-color: ${(props) => props.theme.color.main};
      }
    }
  }
`;
