import React from "react";
import { GoStar, GoRepo, GoRepoForked, GoLinkExternal } from "react-icons/go";

import * as S from "./styledComponents";

type ResultsProps = {
  data: RepositoryProps[];
};

const Results: React.FC<ResultsProps> = ({ data }) => {
  return (
    <S.ResultsWrapper column mv={10}>
      {data.map((i: RepositoryProps) => (
        <Repository key={i.id} {...i} />
      ))}
    </S.ResultsWrapper>
  );
};

type RepositoryProps = {
  nameWithOwner: string;
  id: string;
  description: string;
  stargazers: {
    totalCount: number;
  };
  forks: {
    totalCount: number;
  };
  url: string;
};

export const Repository: React.FC<RepositoryProps> = ({
  nameWithOwner,
  description,
  stargazers,
  forks,
  url
}) => {
  return (
    <S.RepositoryWrapper column pv={20} ph={30} mv={5}>
      <S.Wrapper pv={5}>
        <S.SvgWrapper>
          <GoRepo />
        </S.SvgWrapper>
        <S.Text bold>{nameWithOwner}</S.Text>
      </S.Wrapper>
      <S.Wrapper pv={5}>
        <S.Text>{description}</S.Text>
      </S.Wrapper>
      <S.GithubInfoWrapper pv={5}>
        <S.Wrapper>
          <S.SvgWrapper>
            <GoStar />
          </S.SvgWrapper>
          <S.Text>{stargazers.totalCount}</S.Text>
        </S.Wrapper>
        <S.Wrapper mh={10}>
          <S.SvgWrapper>
            <GoRepoForked />
          </S.SvgWrapper>
          <S.Text>{forks.totalCount}</S.Text>
        </S.Wrapper>
        <S.Wrapper>
          <S.Link href={url} target="_blank">
            <S.SvgWrapper>
              <GoLinkExternal />
            </S.SvgWrapper>
            <S.Text>Go to Github page</S.Text>
          </S.Link>
        </S.Wrapper>
      </S.GithubInfoWrapper>
    </S.RepositoryWrapper>
  );
};

export default Results;
