import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import {
  MainCardContainer,
  MainCardContent,
  MainCardFooter,
  MainCardLinksWrapper,
} from './styles';

interface Info {
  icon: ReactNode;
  label: string;
}

interface MainCardProps {
  githubLink: string;
  image?: string;
  title: string;
  description?: string;
  infos: Info[];
}

export function MainCard({
  githubLink,
  image,
  title,
  description,
  infos,
}: MainCardProps) {
  return (
    <MainCardContainer>
      {image && <img src={image} alt='' />}
      <MainCardContent>
        <div>
          <MainCardLinksWrapper absolute={description ? true : false}>
            {description ? (
              <>
                <div />
                <a href={githubLink}>
                  Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </>
            ) : (
              <>
                <NavLink to='/'>
                  <FontAwesomeIcon icon={faChevronLeft} /> Voltar
                </NavLink>
                <a href={githubLink}>
                  Ver no Github{' '}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </>
            )}
          </MainCardLinksWrapper>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>

        <MainCardFooter>
          {infos.map((info, index) => (
            <div key={`${index}_${info.label}`}>
              {info.icon}
              {info.label}
            </div>
          ))}
        </MainCardFooter>
      </MainCardContent>
    </MainCardContainer>
  );
}
