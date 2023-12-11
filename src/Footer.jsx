import faIcon from "./assets/icon-facebook.svg";
import instaIcon from "./assets/icon-instagram.svg";
import pintIcon from "./assets/icon-pinterest.svg";

function Footer() {
  return (
    <>
      <a className="links" href="https://facebook.com">
        <img src={faIcon} alt="facebook-icon" />
      </a>

      <a className="links" href="https://instagram.com">
        <img src={pintIcon} alt="pinterest-icon" />
      </a>

      <a className="links" href="https://pinterest.com">
        <img src={instaIcon} alt="instagram-icon" />
      </a>
    </>
  );
}

export default Footer;
