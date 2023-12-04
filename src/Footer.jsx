import faIcon from "./assets/icon-facebook.svg";
import instaIcon from "./assets/icon-instagram.svg";
import pintIcon from "./assets/icon-pinterest.svg";

function Footer() {
  return (
    <>
      <a href="https://facebook.com">
        <img src={faIcon} alt="facebook-icon" />
      </a>

      <a href="https://instagram.com">
        <img src={instaIcon} alt="instagram-icon" />
      </a>

      <a href="https://pinterest.com">
        <img src={pintIcon} alt="pinterest-icon" />
      </a>
    </>
  );
}

export default Footer;
