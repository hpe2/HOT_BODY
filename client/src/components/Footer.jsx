import "../style/footer.css";
import MailIcon from '/images/mail.svg';
import TelIcon from '/images/phone.svg';

const Footer = () => {
  return (
    <div className="footer-wrap">
      <div className="footer-container">
        <div className='footer-left'>
          <h1>HOT BODY</h1>

          <div className="footer-mid">
            <ul className="footer-menu-lists">
              <li>About</li>
              <li>Community</li>
              <li>PT</li>
              <li>Group</li>
              <li>Subscribe</li>
              <li>Profile</li>
            </ul>
            <p>&copy; 2024 All right reserved by hot body</p>
          </div>
        </div>

        <ul className='footer-right'>
          <li>
            <img src={TelIcon} alt="tel" />
            TEL : +82 ) 010-XXXX-XXXX
          </li>
          <li>
            <img src={MailIcon} alt="mail" />
            E-Mail : hotbody@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
