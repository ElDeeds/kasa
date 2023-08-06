import logoWhite from '../assets/logoWhite.png';

function Footer() {
    return  (
        <footer className="footer">
        <div className="footerLogo">
            <img src={logoWhite} alt="Logo Blanc" />
          </div>
          <p className='footerText'>© 2020 Kasa. All rights reserved</p>
        </footer>
      );
    }
    

export default Footer;
