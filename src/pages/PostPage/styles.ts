import styled from 'styled-components';

export const PostPageContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MarkdownContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: justify;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.blue};
    margin-top: 1rem;
  }

  a {
    color: ${(props) => props.theme.blue};
  }

  ul {
    margin-top: 0.75rem;
    padding-left: 1.25rem;
  }

  img {
    width: 100%;
    border-radius: 8px;
    margin-top: 1rem;
  }
`;
