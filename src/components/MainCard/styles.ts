import styled from 'styled-components';

export const MainCardContainer = styled.div`
  background-color: ${(props) => props.theme.profile};
  width: 100%;
  max-height: 13.25rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  margin-top: -5rem;
  padding: 2rem;

  display: flex;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const MainCardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  > div {
    h2 {
      color: ${(props) => props.theme.title};

      font-weight: 700;
      font-size: 1.5rem;
      line-height: 130%;

      max-width: 85%;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p {
      margin-top: 0.5rem;

      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

interface MainCardLinksWrapper {
  absolute: boolean;
}

export const MainCardLinksWrapper = styled.div<MainCardLinksWrapper>`
  position: ${(props) => (props.absolute ? 'absolute' : 'relative')};

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: ${(props) => (props.absolute ? 0 : '1.25rem')};

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    background: transparent;
    border-bottom: 1px solid transparent;

    color: ${(props) => props.theme.blue};
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
    text-decoration: none;

    cursor: pointer;

    transition: border-bottom 0.2s;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`;

export const MainCardFooter = styled.footer`
  display: flex;
  gap: 1.5rem;

  color: ${(props) => props.theme.subtitle};
  margin-top: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme.label};
    }
  }
`;
