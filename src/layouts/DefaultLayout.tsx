import { Outlet } from 'react-router-dom';

import backgroundImg from '../assets/Cover.svg';

import { LayoutContainer } from './styles';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <img src={backgroundImg} alt='' />

      <div>
        <Outlet />
      </div>
    </LayoutContainer>
  );
}
