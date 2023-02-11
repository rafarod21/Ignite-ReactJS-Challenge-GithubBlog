import { useEffect, useState } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { MainCard } from '../../components/MainCard';
import { PostCard } from '../../components/PostCard';

import { Post } from '../PostPage';

import { getIssues, getUserInfos } from '../../lib/axios';

import { HomeContainer, PostCardWrapper, PostsContainer } from './styles';

interface User {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  company: string | null;
  followers: number;
  html_url: string;
}

interface Posts {
  total_count: number;
  items: Post[];
}

export function Home() {
  const [user, setUser] = useState<User>();
  const [posts, setPosts] = useState<Posts>();

  async function getUser() {
    const data = await getUserInfos();
    setUser(data);
  }

  async function getPosts() {
    const data = await getIssues();
    setPosts(data);
  }

  useEffect(() => {
    getUser();
    getPosts();
  }, []);

  return (
    <HomeContainer>
      {user && (
        <>
          <MainCard
            githubLink={user.html_url}
            image={user.avatar_url}
            title={user.name}
            description={user.bio}
            infos={[
              {
                icon: <FontAwesomeIcon icon={faGithub} />,
                label: user.login,
              },
              {
                icon: <FontAwesomeIcon icon={faBuilding} />,
                label: user.company || 'Não possui',
              },
              {
                icon: <FontAwesomeIcon icon={faUserFriends} />,
                label: `${user.followers} seguidores`,
              },
            ]}
          />

          <PostsContainer>
            <div>
              <strong>Publicações</strong>
              <span>{posts?.total_count} publicações</span>
            </div>

            <input type='text' placeholder='Buscar conteúdo' />

            <PostCardWrapper>
              {posts &&
                posts.items.map((post, index) => (
                  <PostCard
                    key={`${post.title}-${index}`}
                    title={post.title}
                    number={post.number}
                    createdAt={post.updated_at}
                    description={post.body}
                  />
                ))}
            </PostCardWrapper>
          </PostsContainer>
        </>
      )}
    </HomeContainer>
  );
}
