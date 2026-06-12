import styled from "styled-components";

const Header = styled.div`
  background: #111;
  color: #f4ecd8;
  text-align: center;
  padding: 1rem;
  font-size: 2rem;
  font-weight: bold;
  border-bottom: 4px solid #c9a227;
`;

export default function DartboardHeader() {
  return <Header>RAILWAY DARTS CHALLENGE</Header>;
}
