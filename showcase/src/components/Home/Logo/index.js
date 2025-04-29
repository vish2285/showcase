// Logo.js
import LogoV from '../../../assets/images/v-logo.svg'; 
import './index.scss';

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo animate" src={LogoV} alt="JavaScript, Developer" />
    </div>
  );
};

export default Logo;