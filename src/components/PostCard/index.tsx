import { NavLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { PostCardContainer } from './styles';
import { calculateHowManyDaysAgoItWasEdited } from '../../utils/calculateHowManyDaysAgoItWasEdited';

interface PostCardProps {
  title: string;
  description: string;
  createdAt: Date;
}

export function PostCard({ title, description, createdAt }: PostCardProps) {
  const howManyDaysAgo = calculateHowManyDaysAgoItWasEdited(createdAt);

  return (
    <PostCardContainer to='/post'>
      <span>
        Há {howManyDaysAgo} {howManyDaysAgo === 1 ? 'dia' : 'dias'}
      </span>
      <h3>{title}</h3>
      <p>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
      </p>
    </PostCardContainer>
  );
}
