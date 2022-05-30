import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

function SocialIcons() {
    return(
        <React.Fragment>
            <a target="_blank" rel="noopener noreferrer" href="https://google.com">
                <FaFacebookF className="white-text mx-2" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://youtube.com">
                <FaInstagram className="white-text mx-2" />
            </a>
        </React.Fragment>
    );
};

export default SocialIcons;