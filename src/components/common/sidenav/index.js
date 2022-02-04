import { SiteNameStyle, SideNavContent, SideNavList, NavLink } from "../styles";
import { NavItems } from "./navitems";

const SideNav = () => {
  return (
    <SideNavContent>
      <SiteNameStyle>
        <NavLink to="/"> Online Store </NavLink>
      </SiteNameStyle>
      <SideNavList
        content={NavItems}
        activeLinkFromLocation
        className="vertical-nav-menu"
        iconNamePrefix=""
        classNameStateIcon="pe-7s-angle-down"
      />
    </SideNavContent>
  );
};

export default SideNav;
