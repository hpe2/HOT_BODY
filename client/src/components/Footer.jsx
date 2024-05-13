import "../style/footer.css";
import MailIcon from '/images/mail.svg';
import TelIcon from '/images/phone.svg';
import {useNavigate} from 'react-router-dom';

const links = [
  {list: '커뮤니티', link: '/community'},
  {list: 'PT', link: '/pt'},
  {list: '모임', link: '/group'},
  {list: '구독', link: '/sub'},
  {list: '마이페이지', link: '/profile/account'}
]

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer-wrap">
      <div className="footer-container">
        <div className='footer-left'>
          <h1>HOT BODY</h1>

          <div className="footer-mid">
            <ul className="footer-menu-lists">
              {links.map(link => (
                <li onClick={() => navigate(`${link.link}`)}>{link.list}</li>
              ))}
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
