import styled from 'styled-components';


export const StyledComponent = styled.li`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "name progress tags controls"
  ;
  position: relative;
  bottom: 0;

  background-color: ${(props) => props.theme.background.main};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.grays.medium};
  padding: 0.25rem 0.5rem;

  .name {
    grid-area: name;
  }

  .inProgress {
    grid-area: progress;
    align-self: center;
    justify-self: right;
    color: ${(props) => props.theme.color.accent};
    font-size: 0.9rem;
    font-weight: 600;
  }

  .tags {
    grid-area: tags;
    padding: 0 1rem;
    border-color: ${(props) => props.theme.grays.medium};
    border-style: solid;
    border-width: 0;
    border-left-width: 1px;
    border-right-width: 1px;
  }

  .controls {
    grid-area: controls;
    display: flex;
    align-items: flex-start;
    gap: 0.25rem;
    justify-content: space-between;

    button {
      background-color: ${(props) => props.theme.color.accent};
      border-radius: 0.25rem;
      color: ${(props) => props.theme.color.light};
      font-size: 0.7rem;
      font-weight: 800;
      padding: 0.25rem;
      text-transform: uppercase;
      width: 100%;

      &[disabled] {
        background-color: ${(props) => props.theme.grays.light};
      }

      :hover:not([disabled]) {
        background-color: ${(props) => props.theme.color.main};

        &.delete {
          background-color: ${(props) => props.theme.color.warning};
        }
      }
    }
  }

  @media screen and (max-width: 960px) {
    grid-template-areas:
      "name name controls controls"
      "progress tags tags tags"
    ;

    .inProgress {
      justify-self: left;
    }
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "name"
      "progress"
      "controls"
      "tags"
    ;
  }

  :not(:last-child) {
    border-bottom-width: 0;
  }

  :first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  :last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  :hover {
    bottom: 0.1rem;
    border-radius: 5px;
    background-color: ${(props) => props.theme.background.main} !important;
    box-shadow: 0 4px 8px ${(props) => props.theme.shadow.light};
    z-index: 9999;
  }
`;
