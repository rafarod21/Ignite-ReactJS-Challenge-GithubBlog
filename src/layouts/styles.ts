import styled from 'styled-components';

import backgroundImg from '../assets/Cover.svg';

export const LayoutContainer = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  > img {
    width: 100%;
    /* height: 18.75rem; */
  }

  > div {
    margin-top: -3rem;
    padding: 0 32rem 3rem;
  }
`;
