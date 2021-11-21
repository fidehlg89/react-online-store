import { styled } from "../index";

const FooterArea = styled.footer`
  grid-area: footer;
  background-color: #648ca6;
`;

const FooterContent = styled(FooterArea)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: #648ca6;
`;

const Footer = () => {
  return (
    <FooterContent>
      <div class="footer__copyright">&copy; 2018 MTH</div>
      <div class="footer__signature">Made with love by pure genius</div>
    </FooterContent>
  );
};

export default Footer;
