import { styled } from "../index";
import MetisMenu from 'react-metismenu';

import { NavItems } from "./navitems"

const SideNavContent = styled.div`
  grid-area: sidenav;
  display: flex;
  flex-direction: column;
  background-color: #fafbfc;
  box-shadow: 0 0.46875rem 2.1875rem rgb(8 10 37 / 3%), 0 0.9375rem 1.40625rem rgb(8 10 37 / 3%), 0 0.25rem 0.53125rem rgb(8 10 37 / 5%), 0 0.125rem 0.1875rem rgb(8 10 37 / 3%);
`;

const SideNavList = styled(MetisMenu)`
  padding: 0 0.25rem;
  margin-top: 10px;
  list-style-type: none;
`;

const SiteName = styled.div`
  grid-area: sidenav;
  padding: 20px 20px 20px 1.5rem;
  //color: #eee;
  z-index: 1;
  cursor: pointer;
  background-color: #fafbfc;
  box-shadow: 0 0.46875rem 2.1875rem rgb(8 10 37 / 3%), 0 0.9375rem 1.40625rem rgb(8 10 37 / 3%), 0 0.25rem 0.53125rem rgb(8 10 37 / 5%), 0 0.125rem 0.1875rem rgb(8 10 37 / 3%);
`;

const SideNav = () => {
  return (
    <SideNavContent>
      <SiteName>Online Store</SiteName>
      <SideNavList content={NavItems} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down" />
    </SideNavContent>
  );
};

export default SideNav;
