import { Cv } from "../../types";

import styled from "styled-components";
import { MaterialUI as mui } from "@jeact/colors";
import SideBar from "./side/SideBar";

type ModernProps = {
  cv: Cv;
};

export default function Modern({ cv }: ModernProps) {
  return (
    <Page>
      <Padding />
      <Side>
        <SideBar cv={cv} />
      </Side>
      <Main>
        <Header>
          <h1>{cv.name}</h1>
          <h2>{cv.title}</h2>
        </Header>
        <Content>Content</Content>
      </Main>
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  -webkit-print-color-adjust: exact !important;
`;

const Main = styled.div`
  flex: 1;
`;

const Padding = styled.div`
  height: 250px;
  background-color: ${mui.grey[800]};
  width: 10px;
`;

const Header = styled.header`
  height: 250px;
  background-color: ${mui.grey[800]};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    font-weight: 100;
    text-transform: uppercase;
    font-size: 5rem;
    margin: 0;
  }

  h2 {
    font-weight: 300;
    font-size: 1rem;
    margin: 0;
  }
`;

const Side = styled.nav`
  width: 250px;
  height: 100vh;
  background-color: ${mui.teal[200]};
`;

const Content = styled.main``;
