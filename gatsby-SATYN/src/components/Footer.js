import React from 'react';
import '../styles/global.css';
import {
  AiFillFacebook as Facebook,
  AiFillLinkedin as LinkedIn,
  AiOutlineTwitter as Twitter,
  AiFillYoutube as Youtube,
  AiFillInstagram as Instagram,
} from 'react-icons/ai';
import styled from 'styled-components';

const CreditStyles = styled.div`
  font-size: 0.6em;
`;

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 w-full py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
          <a
            href="https://www.facebook.com/Satynrb"
            className="text-gray-400 hover:text-gray-800 dark:hover:text-white hover:text-gray-800 transition-colors duration-200"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://www.linkedin.com/in/satynrb/"
            className="text-gray-400 hover:text-gray-800 dark:hover:text-white hover:text-gray-800 transition-colors duration-200"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>

          <a
            href="https://twitter.com/satynrb#"
            className="text-gray-400 hover:text-gray-800 dark:hover:text-white hover:text-gray-800 transition-colors duration-200"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter />
          </a>

          <a
            href="https://www.youtube.com/channel/UCDNcyaQamC67TPiSY6s4X5A"
            className="text-gray-400 hover:text-gray-800 dark:hover:text-white hover:text-gray-800 transition-colors duration-200"
            target="_blank"
            rel="noreferrer"
          >
            <Youtube />
          </a>

          <a
            href="https://www.instagram.com/satynrb/"
            className="text-gray-400 hover:text-gray-800 dark:hover:text-white hover:text-gray-800 transition-colors duration-200"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
        </div>
        <CreditStyles>
          <div className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
            Website by Matthew Thomas
          </div>
        </CreditStyles>
      </div>
    </footer>
  );
}
