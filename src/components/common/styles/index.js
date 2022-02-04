import { styled } from "../index";
import MetisMenu from "react-metismenu";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";

export const HeaderCellStyle = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  background-color: #fafbfc;
  box-shadow: 0 0.46875rem 2.1875rem rgb(8 10 37 / 3%),
    0 0.9375rem 1.40625rem rgb(8 10 37 / 3%),
    0 0.25rem 0.53125rem rgb(8 10 37 / 5%),
    0 0.125rem 0.1875rem rgb(8 10 37 / 3%);
`;

export const SideNavContent = styled.div`
  grid-area: sidenav;
  display: flex;
  flex-direction: column;
  background-color: #fafbfc;
  box-shadow: 0 0.46875rem 2.1875rem rgb(8 10 37 / 3%),
    0 0.9375rem 1.40625rem rgb(8 10 37 / 3%),
    0 0.25rem 0.53125rem rgb(8 10 37 / 5%),
    0 0.125rem 0.1875rem rgb(8 10 37 / 3%);
`;

export const SideNavList = styled(MetisMenu)`
  padding: 0 0.25rem;
  margin-top: 10px;
  list-style-type: none;
`;

export const SiteNameStyle = styled.div`
  grid-area: sidenav;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 3rem;
  z-index: 1;
  cursor: pointer;
  background-color: #fafbfc;
  box-shadow: 0 0.46875rem 2.1875rem rgb(8 10 37 / 3%),
    0 0.9375rem 1.40625rem rgb(8 10 37 / 3%),
    0 0.25rem 0.53125rem rgb(8 10 37 / 5%),
    0 0.125rem 0.1875rem rgb(8 10 37 / 3%);
`;

export const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  &:hover {
    color: #033c73;
  }
`;

export const FooterCellStyle = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: #fafbfc;
  box-shadow: 0 0.46875rem 2.1875rem rgb(8 10 37 / 3%),
    0 0.9375rem 1.40625rem rgb(8 10 37 / 3%),
    0 0.25rem 0.53125rem rgb(8 10 37 / 5%),
    0 0.125rem 0.1875rem rgb(8 10 37 / 3%);
`;

const Title = styled.h3((props) => ({
  ...(props?.theme?.card?.title || {
    color: props.theme.vars.$text,
    // font: 'normal normal normal 26px/42px Work Sans',
    fontWeight: "400",
    letterSpacing: "0px",
    opacity: 1,
    marginBotton: "0",
    "@media (max-width: 1600px)": {
      fontSize: "18px",
    },
  }),
}));

export const CardContent = styled(Card)(() => {
  let finalStyle = {
    marginBottom: "1rem",
    boxShadow:
      "0 0.46875rem 2.1875rem rgb(4 9 20 / 3%) 0 0.9375rem 1.40625rem rgb(4 9 20 / 3%) 0 0.25rem 0.53125rem rgb(4 9 20 / 5%), 0 0.125rem 0.1875rem rgb(4 9 20 / 3%)",
    borderWidth: 0,
    transition: "all 0.2s",
    color: "#eee",
    borderRadius: "5px",
    backgroundImage:
      "linear-gradient(to top, #0ba360 0%, #3cba92 100%) !important",
  };

  return finalStyle;
});

export const CardWidgetHeading = styled.div`
  opacity: 0.8;
  font-weight: bold;
`;

export const CardWidgetSubHeading = styled.div`
  opacity: 0.5;
`;

export const CardWidgetPrice = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const CardContentWrapper = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
`;
