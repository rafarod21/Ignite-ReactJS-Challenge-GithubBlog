import { NavLink } from 'react-router-dom';

import { PostCardContainer } from './styles';

interface PostCardProps {
  title: string;
  description: string;
  createdAt: Date;
}

export function PostCard() {
  return (
    <PostCardContainer to='/post'>
      <span>Há 1 dia</span>
      <h3>JavaScript data types and data structures</h3>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </p>
    </PostCardContainer>
  );
}
