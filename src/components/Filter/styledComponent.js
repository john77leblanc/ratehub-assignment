import Styled from 'styled-components';


export const StyledComponent = Styled.div`
  select {
    border: 1px solid ${(props) => props.theme.grays.medium};
    border-radius: 0.5rem;
    color: ${(props) => props.theme.grays.dark};
    padding: 0.5rem;
    width: 20rem;

    :focus {
      outline: none;
    }
  }
`;
