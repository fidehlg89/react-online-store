import { styled } from "../index";

const Item = styled.ul`
  padding: 20px 20px 20px 1.5rem;
  //color: #ddd;
  &:hover {
    background-color: #f2f2f2;
    cursor: pointer;
  }
`;

const NavItem = ({ item }) => {
  return <Item>{item}</Item>;
};

export default NavItem;
