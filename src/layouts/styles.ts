import styled from 'styled-components';

import backgroundImg from '../assets/Cover.svg';

export const LayoutContainer = styled.div`
  height: 100vh;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 5rem;

  overflow-y: scroll;

  > img {
    width: 100%;
    height: 18.75rem;
    background-image: url(${backgroundImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
