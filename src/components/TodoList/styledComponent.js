import styled from 'styled-components';


export const StyledComponent = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header  header  header"
    "main   main    main    actions"
    "footer footer  footer  actions"
  ;
  background-color: ${(props) => props.theme.background.main};
  padding: 1rem;

  header {
    grid-area: header;

    span:first-child {
      font-size: 0.9rem;
    }
  }

  main {
    grid-area: main;
  }

  .actionLog {
    grid-area: actions;
    background-color: ${(props) => props.theme.grays.dark};
    color: ${(props) => props.theme.color.light};
  }

  footer {
    grid-area: footer;
    height: 100%;
  }

  ul.incompleteTasks {
    list-style: none;
    margin-top: 0;
    padding-inline-start: 0;
  }

  button.addTask {
    background-color: ${(props) => props.theme.color.accent};
    border-radius: 5px;
    color: ${(props) => props.theme.color.light};
    padding: 0.5rem 1rem;

    :hover {
      background-color: ${(props) => props.theme.color.main};
    }
  }

  .completeTasks {
    list-style: none;
    padding-inline-start: 0;

    li {
      background-color: ${(props) => props.theme.grays.light};
      border-radius: 0.25rem;
      padding: 0.25rem 0.5rem;

      :not(:last-child) {
        margin-bottom: 0.25rem;
      }
    }
  }

  .completeTags {
    display: flex;
    justify-content: flex-start;
    gap: 0.25rem;

    span {
      background-color: ${(props) => props.theme.grays.medium};
      border-radius: 3px;
      color: ${(props) => props.theme.color.light};
      padding: 0 0.25rem;
    }
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main"
      "footer"
      "actions"
    ;
  }
`;
