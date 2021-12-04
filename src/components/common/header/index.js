import {
  styled
} from "../index";

const HeaderCell = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  background-color: #fafbfc;
  box-shadow: 0 0.46875rem 2.1875rem rgb(8 10 37 / 3%), 0 0.9375rem 1.40625rem rgb(8 10 37 / 3%), 0 0.25rem 0.53125rem rgb(8 10 37 / 5%), 0 0.125rem 0.1875rem rgb(8 10 37 / 3%);
`;

const Header = () => {
  return (
    <HeaderCell>
      <div className="header__search" > Search... </div>
      <div className="header__avatar" > Your face </div>
    </HeaderCell>
  );
};

export default Header;