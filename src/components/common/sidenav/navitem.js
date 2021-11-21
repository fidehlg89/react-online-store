import { styled } from "../index";

const Item = styled.ul`
  padding: 20px 20px 20px 40px;
  color: #ddd;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;

const NavItem = ({ item }) => {
  return <Item>{item}</Item>;
};

export default NavItem;
