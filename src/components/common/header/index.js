import { HeaderCellStyle } from "../styles";

const Header = () => {
  return (
    <HeaderCellStyle data-testid="header">
      <span> </span>
      <div>
        <img
          src="https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
          width="80px"
        />
      </div>
    </HeaderCellStyle>
  );
};

export default Header;
