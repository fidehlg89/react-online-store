import { styled, Header, Footer, SideNav } from "../common";

const Container = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: 60px 1fr 60px;
  grid-template-areas:
    "sidenav header"
    "sidenav main"
    "sidenav footer";
  height: 100vh;
`;

const Main = styled.div`
  grid-area: main;
  background-color: #fafbfc;
  padding: 30px 30px 0;
  box-shadow: 0 0.46875rem 2.1875rem rgb(8 10 37 / 3%), 0 0.9375rem 1.40625rem rgb(8 10 37 / 3%), 0 0.25rem 0.53125rem rgb(8 10 37 / 5%), 0 0.125rem 0.1875rem rgb(8 10 37 / 3%);
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <SideNav />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default Layout;
