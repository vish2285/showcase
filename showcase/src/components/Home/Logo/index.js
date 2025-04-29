// Logo.js
import LogoV from '../../../assets/images/v-logo.svg'; 
import './index.scss';

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo animate" src={LogoV} alt="JavaScript, Developer" />
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="274.000000pt"
        height="230.000000pt"
        viewBox="0 0 274.000000 230.000000"
        preserveAspectRatio="xMidYMid meet"
        className="svg-container"
      >
      </svg>
    </div>
  );
};

export default Logo;