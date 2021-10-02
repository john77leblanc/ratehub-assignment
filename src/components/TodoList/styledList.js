import styled from "styled-components";


export const StyledList = styled.div`
  background-color: ${props => props.theme.background.main};
  padding: 1rem;

  h1 {
    color: ${props => props.theme.color.accent};
    margin-top: 0;
    font-size: 1.5rem;
  }

  h2 {
    margin-top: 0;
  }

  section {
    border-radius: 1rem;
    box-shadow: 0 2px 4px ${props => props.theme.color.main};
    padding: 1rem;
    margin-bottom: 1rem;
  }

  ul.incompleteTasks {
    list-style: none;
    margin-top: 0;
    padding-inline-start: 0;

    :focus-within {
      li {
        background-color: ${props => props.theme.grays.light};
      }
    }
  }

  button.addTask {
    background-color: ${props => props.theme.color.accent};
    border-radius: 5px;
    color: ${props => props.theme.color.light};
    padding: 0.5rem 1rem;

    :hover {
      background-color: ${props => props.theme.color.main};
    }
  }
`;
