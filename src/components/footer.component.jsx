import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
            <span>made on</span>
            <FontAwesomeIcon icon={faMugHot} />
        </footer>
    );
};

export default Footer;
