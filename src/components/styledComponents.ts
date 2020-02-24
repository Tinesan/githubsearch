import styled from "styled-components";

const Input = styled.input`
  padding: 5px;
`;

const FormWrapper = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 10px 30px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
`;

const GitHubSearchWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const Form = styled.form`
  background: "#ffffff";
`;

type WrapperProps = {
  column?: boolean;
  mv?: number;
  mh?: number;
  pv?: number;
  ph?: number;
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${props => (props.column ? "column" : "row")};
  margin: ${props => `${props.mv || 0}px ${props.mh || 0}px`};
  padding: ${props => `${props.pv || 0}px ${props.ph || 0}px`};
`;

const SvgWrapper = styled.div`
  display: flex;
  align-self: center;
  margin-right: 5px;
`;

const Button = styled.button`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  line-height: 20px;
  border: none;
  color: #fff;
  border: 1px solid rgba(27, 31, 35, 0.2);
  border-radius: 0.25em;
  background-color: #28a745;
  background-image: linear-gradient(-180deg, #34d058, #28a745 90%);

  &:hover:not([disabled]) {
    background-color: #269f42;
    background-image: linear-gradient(-180deg, #2fcb53, #269f42 90%);
    background-position: -0.5em;
    border-color: rgba(27, 31, 35, 0.5);
  }

  &:disabled {
    background-color: gray;
    background-image: none;
  }
`;

type TextProps = {
  bold?: boolean;
};

const Text = styled.p<TextProps>`
  margin: 0;
  font-size: 16px;
  font-weight: ${props => (props.bold ? "bold" : "normal")};
`;

const Title = styled.h1`
  color: #fff;
  font-weight: normal;
`;

const RepositoryWrapper = styled(Wrapper)`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
`;

const ControlsWrapper = styled(Wrapper)`
  justify-content: space-between;
`;

const GithubInfoWrapper = styled(Wrapper)`
  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

const Link = styled.a`
  display: flex;
  color: currentcolor;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  Input,
  Form,
  Wrapper,
  Button,
  FormWrapper,
  Text,
  GitHubSearchWrapper,
  Title,
  RepositoryWrapper,
  SvgWrapper,
  Link,
  ControlsWrapper,
  GithubInfoWrapper
};
