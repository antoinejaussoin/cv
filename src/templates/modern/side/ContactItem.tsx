import styled from "styled-components";

type ContactItemProps = {
  icon: React.ReactNode;
  label: string;
};

export default function ContactItem({ icon, label }: ContactItemProps) {
  return <Container>{icon}</Container>;
}

const Container = styled.div``;
