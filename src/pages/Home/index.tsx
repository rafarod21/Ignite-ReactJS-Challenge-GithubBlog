import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MainCard } from '../../components/MainCard';
import { PostCard } from '../../components/PostCard';

import { HomeContainer, PostCardWrapper, PostsContainer } from './styles';

const DESCRIPTION =
  'Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu         viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.';

export function Home() {
  return (
    <HomeContainer>
      <MainCard
        githubLink='https://github.com/rafarod21'
        image='https://github.com/rafarod21.png'
        title='Cameron Williamson'
        description={DESCRIPTION}
        infos={[
          {
            icon: <FontAwesomeIcon icon={faGithub} />,
            label: 'cameronwll',
          },
          {
            icon: <FontAwesomeIcon icon={faBuilding} />,
            label: 'Rocketseat',
          },
          {
            icon: <FontAwesomeIcon icon={faUserFriends} />,
            label: '32 seguidores',
          },
        ]}
      />

      <PostsContainer>
        <div>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </div>

        <input type='text' placeholder='Buscar conteúdo' />

        <PostCardWrapper>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </PostCardWrapper>
      </PostsContainer>
    </HomeContainer>
  );
}
