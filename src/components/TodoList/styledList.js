import styled from "styled-components";


export const StyledList = styled.div`
  background-color: ${props => props.theme.background.light};
  padding: 1rem;

  h1 {
    margin-top: 0;
    font-size: 1.5rem;
  }

  ul {
    list-style: none;
    padding-inline-start: 0;

    li {
      display: block;
    }
  }
`;
