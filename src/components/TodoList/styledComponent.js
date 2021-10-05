import styled from 'styled-components';


export const StyledComponent = styled.div`
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

  main {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      "tasks tasks tasks actions"
    ;
  }

  .tasks {
    grid-area: tasks;
  }

  .actionLog {
    grid-area: actions;
    background-color: ${(props) => props.theme.grays.dark};
    color: ${(props) => props.theme.color.light};
  }

  ul.incompleteTasks {
    list-style: none;
    margin-top: 0;
    padding-inline-start: 0;
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

  .completeTags {
    display: flex;
    justify-content: flex-start;
    gap: 0.25rem;

    span {
      background-color: ${props => props.theme.grays.medium};
      border-radius: 3px;
      color: ${props => props.theme.color.light};
      padding: 0 0.25rem;
    }
  }
`;
