import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

import { getOneIssue, gitHubApi } from '../../lib/axios';

import { MainCard } from '../../components/MainCard';

import { calculateHowManyDaysAgoItWasEdited } from '../../utils/calculateHowManyDaysAgoItWasEdited';

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
  const { issueNumber } = useParams();
  const [post, setPost] = useState<Post>();

  async function getDataPost() {
    if (issueNumber) {
      const data = await getOneIssue(issueNumber);
      setPost(data);
    }
  }

  useEffect(() => {
    getDataPost();
  }, []);

  return (
    <PostPageContainer>
      {post && (
        <>
          <MainCard
            githubLink={post.html_url}
            title={post.title}
            infos={[
              {
                icon: <FontAwesomeIcon icon={faGithub} />,
                label: post.user.login,
              },
              {
                icon: <FontAwesomeIcon icon={faCalendarDay} />,
                label: `Há ${calculateHowManyDaysAgoItWasEdited(
                  post.updated_at
                )} dias`,
              },
              {
                icon: <FontAwesomeIcon icon={faComment} />,
                label: `${post.comments} comentários`,
              },
            ]}
          />

          <MarkdownContainer>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.body}
            </ReactMarkdown>
          </MarkdownContainer>
        </>
      )}
    </PostPageContainer>
  );
}
