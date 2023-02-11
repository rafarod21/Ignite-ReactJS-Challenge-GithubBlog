import { useEffect, useState } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faBuilding,
  faCalendarDay,
  faComment,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { gitHubApi } from '../../lib/axios';

import { MainCard } from '../../components/MainCard';

import { MarkdownContainer, PostPageContainer } from './styles';

export interface Post {
  title: string;
  body: string;
  html_url: string;
  comments: number;
  updated_at: Date;
  number: number;
  user: {
    login: string;
    url: string;
  };
}

export function PostPage() {
  const [post, setPost] = useState<Post>();

  async function getDataPost() {
    try {
      const response = await gitHubApi.get(
        'repos/rocketseat-education/reactjs-github-blog-challenge/issues/1'
      );

      console.log(response.data);
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // getDataPost();
  }, []);

  return (
    <PostPageContainer>
      {post && (
        <>
          <MainCard
            githubLink='https://github.com/rafarod21'
            title={post?.title}
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

          <MarkdownContainer>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post?.body}
            </ReactMarkdown>
          </MarkdownContainer>
        </>
      )}
    </PostPageContainer>
  );
}
