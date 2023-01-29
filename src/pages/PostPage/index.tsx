import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faBuilding,
  faCalendarDay,
  faComment,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { MainCard } from '../../components/MainCard';

import { PostPageContainer } from './styles';

export function PostPage() {
  return (
    <PostPageContainer>
      <h1>PostPage</h1>

      <MainCard
        githubLink='https://github.com/rafarod21'
        title='JavaScript data types and data structures'
        infos={[
          {
            icon: <FontAwesomeIcon icon={faGithub} />,
            label: 'cameronwll',
          },
          {
            icon: <FontAwesomeIcon icon={faCalendarDay} />,
            label: 'Há 1 dia',
          },
          {
            icon: <FontAwesomeIcon icon={faComment} />,
            label: '5 comentários',
          },
        ]}
      />
      <br />
      <br />
      <br />
      <br />
    </PostPageContainer>
  );
}
