import { Cv } from "../../../types";
import styled from "styled-components";
import { Phone } from "@mui/icons-material";
import ContactItem from "./ContactItem";

type SideBarProps = {
  cv: Cv;
};

export default function SideBar({ cv }: SideBarProps) {
  return (
    <Container>
      <Photo src={cv.portrait[0].src} />
      <Contacts>
        <ContactItem icon={<Phone />} label={cv.phone} />
      </Contacts>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 25px;
`;

const Photo = styled.img`
  border-radius: 100px;
  width: 200px;
  height: 200px;
  object-fit: fill;
`;

const Contacts = styled.div``;
