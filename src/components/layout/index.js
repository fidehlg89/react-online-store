import { styled, Header, Footer, SideNav } from "../common";

const Container = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    "sidenav header"
    "sidenav main"
    "sidenav footer";
  height: 100vh;
`;

const Main = styled.div`
  grid-area: main;
  background-color: #648ca6;
`;

const Layout = () => {
  return (
    <Container>
      <Header />
      <SideNav />
      <Main />
      <Footer />
    </Container>
  );
};

export default Layout;
