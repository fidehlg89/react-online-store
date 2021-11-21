import { styled } from "../index";

const HeaderArea = styled.header`
  grid-area: header;
  background-color: #648ca6;
`;

const HeaderContent = styled(HeaderArea)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: #648ca6;
`;

const Header = () => {
  return (
    <HeaderContent>
      <div class="header__search">Search...</div>
      <div class="header__avatar">Your face</div>
    </HeaderContent>
  );
};

export default Header;
