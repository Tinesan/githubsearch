import React, { useState, useCallback, useEffect } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { GET_REPOSITORIES } from "../api/apollo";
import ControlsButtons from "./ControlsButtons";
import Results from "./Results";
import DualBalls from "../assets/Dualballs.svg";

import * as S from "./styledComponents";

const GitHubSearch: React.FC = () => {
  const [searchField, setSearchField] = useState<string>("");
  const [loadRepositories, { loading, data }] = useLazyQuery(GET_REPOSITORIES, {
    fetchPolicy: "network-only"
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchField) {
        loadRepositories({ variables: { name: searchField, first: 10 } });
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchField, loadRepositories]);

  const handleChangeSearchField = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchField(e.target.value);
    },
    []
  );

  const previoustButtonClick = useCallback(() => {
    loadRepositories({
      variables: {
        name: searchField,
        last: 10,
        before: data.search.pageInfo.startCursor
      }
    });
  }, [data, loadRepositories, searchField]);

  const nextButtonClick = useCallback(() => {
    loadRepositories({
      variables: {
        name: searchField,
        first: 10,
        after: data.search.pageInfo.endCursor
      }
    });
  }, [data, loadRepositories, searchField]);

  return (
    <S.GitHubSearchWrapper>
      <S.Wrapper>
        <S.LargeInput
          placeholder="Start typing to search the GitHub's repositories"
          onChange={handleChangeSearchField}
          value={searchField}
        />
      </S.Wrapper>
      <S.Wrapper column pv={10}>
        {!searchField ? null : loading || !data ? (
          <img src={DualBalls} alt="loading" />
        ) : !data.search.repositoryCount ? (
          "No repositories"
        ) : (
          <React.Fragment>
            <S.Text bold>
              Total repositories: {data.search.repositoryCount}
            </S.Text>
            <Results data={data.search.nodes} />
            <ControlsButtons
              previoustButtonClick={previoustButtonClick}
              nextButtonClick={nextButtonClick}
              previousButtonDisabled={!data.search.pageInfo.hasPreviousPage}
              nextButtonDisabled={!data.search.pageInfo.hasNextPage}
            />
          </React.Fragment>
        )}
      </S.Wrapper>
    </S.GitHubSearchWrapper>
  );
};

export default GitHubSearch;
