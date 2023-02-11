import { NavLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { PostCardContainer } from './styles';
import { calculateHowManyDaysAgoItWasEdited } from '../../utils/calculateHowManyDaysAgoItWasEdited';

interface PostCardProps {
  title: string;
  number: number;
  description: string;
  createdAt: Date;
}

export function PostCard({
  title,
  number,
  description,
  createdAt,
}: PostCardProps) {
  const howManyDaysAgo = calculateHowManyDaysAgoItWasEdited(createdAt);

  return (
    <PostCardContainer to={`/post/${number}`}>
      <span>Há {howManyDaysAgo} dias</span>
      <h3>{title}</h3>
      <div>
        <ReactMarkdown remarkPlugins={[remarkGfm]} disallowedElements={['a']}>
          {description}
        </ReactMarkdown>
      </div>
    </PostCardContainer>
  );
}
