import { styled } from "../index";

const FooterCell = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: #fafbfc;
  box-shadow: 0 0.46875rem 2.1875rem rgb(8 10 37 / 3%), 0 0.9375rem 1.40625rem rgb(8 10 37 / 3%), 0 0.25rem 0.53125rem rgb(8 10 37 / 5%), 0 0.125rem 0.1875rem rgb(8 10 37 / 3%);
`;

const Footer = () => {
  return (
    <FooterCell>
      <div class="footer__copyright">&copy; 2018 MTH</div>
      <div class="footer__signature">Made with love by pure genius</div>
    </FooterCell>
  );
};

export default Footer;
