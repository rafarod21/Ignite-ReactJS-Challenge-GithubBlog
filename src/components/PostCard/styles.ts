import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const PostCardContainer = styled(NavLink)`
  width: 416px;
  height: 260px;

  background: ${(props) => props.theme.post};
  border-radius: 10px;
  border: 2px solid transparent;

  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.25rem;

  cursor: pointer;

  position: relative;

  transition: border-color 0.2s;

  text-decoration: none;
  color: unset;

  &:hover {
    border: 2px solid ${(props) => props.theme.label};
  }

  span {
    position: absolute;
    top: 2.3rem;
    right: 2rem;

    color: ${(props) => props.theme.span};
    font-size: 0.875rem;
    line-height: 160%;
  }

  h3 {
    width: 17.5rem;
    color: ${(props) => props.theme.title};

    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
