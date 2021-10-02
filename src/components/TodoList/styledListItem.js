import styled from 'styled-components';


export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 0;

  background-color: ${props => props.theme.background.main};
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.grays.medium};
  padding: 0.25rem 0.5rem;

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
    background-color: ${props => props.theme.background.accent};
  }

  :focus-within {
    bottom: 0.25rem;
    border-radius: 5px;
    background-color: ${props => props.theme.background.main} !important;
    box-shadow: 0 0 4px ${props => props.theme.color.main};
    z-index: 9999;
  }

  input {
    border-right: 1px solid ${props => props.theme.grays.medium};
    width: 50%;
  }
`;
