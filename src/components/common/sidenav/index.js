import { styled } from "../index";
import NavItem from "./navitem";

const items = ["Item 1", "Item 2", "Item 3"];

const SideNavArea = styled.div`
  grid-area: sidenav;
  background-color: #394263;
`;

const SideNavContent = styled(SideNavArea)`
  display: flex; /* Will be hidden on mobile */
  flex-direction: column;
  grid-area: sidenav;
  background-color: #394263;
`;

const SideNavList = styled.ul`
  padding: 0;
  margin-top: 85px;
  list-style-type: none;
`;

const SiteName = styled.div`
  grid-area: sidenav;
  padding: 16px 20px 16px 40px;
  color: white;
  background-color: #648ca6;
  z-index: 1;
  cursor: pointer;
`;

const SideNav = () => {
  return (
    <SideNavContent>
      <SiteName>Online Store</SiteName>
      <SideNavList>
        {items.length > 0
          ? items.map((element, index) => (
              <NavItem key={index} item={element} />
            ))
          : null}
      </SideNavList>
    </SideNavContent>
  );
};

export default SideNav;
