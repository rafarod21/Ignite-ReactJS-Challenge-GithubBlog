import styled from 'styled-components';

export const HomeContainer = styled.div``;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    strong {
      color: ${(props) => props.theme.subtitle};
      font-size: 1.125rem;
      line-height: 160%;
    }

    span {
      color: ${(props) => props.theme.span};
      font-size: 0.875rem;
      line-height: 160%;
    }
  }

  input {
    width: 100%;
    background: ${(props) => props.theme.input};
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 6px;

    padding: 0.5rem 1rem;

    color: ${(props) => props.theme.text};

    &::placeholder {
      color: ${(props) => props.theme.label};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
    }
  }
`;

export const PostCardWrapper = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 2rem;
`;
