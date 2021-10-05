import styled from 'styled-components';


export const StyledComponent = styled.div`
  ul {
    list-style: none;
    padding-inline-start: 0;
  }

  li {
    background-color: ${(props) => props.theme.grays.medium};
    border-radius: 0.25rem;
    color: ${(props) => props.theme.color.light};
    padding: 0.25rem 0.5rem;

    :not(:last-child) {
      margin-bottom: 0.25rem;
    }
  }
`;
