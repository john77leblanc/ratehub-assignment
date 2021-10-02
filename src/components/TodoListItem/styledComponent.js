import styled from 'styled-components';


export const StyledComponent = styled.li`
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 0;

  background-color: ${props => props.theme.background.main};
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.grays.medium};
  padding: 0.25rem 0.5rem;

  .w25 {
    display: flex;
    justify-content: flex-start;
    width: 25%;
    padding: 0 0.5rem;
  }

  .tags {
    color: ${props => props.theme.grays.dark};

    ul.items {
      list-style: none;
      padding-inline-start: 0;

      li {
        display: block;
        background-color: ${props => props.theme.color.accent};
        border-radius: 3px;
        color: ${props => props.theme.color.light};
        padding: 0 0.25rem;
      }
    }
  }

  .controls {
    width: 25%;
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
    bottom: 0.25rem;
    border-radius: 5px;
    background-color: ${props => props.theme.background.main} !important;
    box-shadow: 0 4px 8px ${props => props.theme.shadow.light};
    z-index: 9999;
  }

  input {
    border-right: 1px solid ${props => props.theme.grays.medium};
    width: 50%;
  }
`;
