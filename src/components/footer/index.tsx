import React from 'react';
import { Container, Spacer, FollowUsStack, FollowUsLinks } from './styles';
import TwitterIcon from '../../assets/twitter.svg';
import InstagramIcon from '../../assets/instagram.svg';
import FacebookIcon from '../../assets/facebook.svg';

const Footer = () => {
  return (
    <Container>
      <span>@ 2021, fruit salad inc.</span>
      <Spacer aria-hidden="true" />
      <a href="https://github.com/LeonardoVizzotto/Fruityvice#readme">
        Read me
      </a>
      <FollowUsStack>
        <span>follow us</span>
        <FollowUsLinks>
          <a
            aria-label="facebook-link"
            href="https://www.facebook.com/kenckocom/"
          >
            <FacebookIcon aria-hidden="true" />
          </a>
          <a
            aria-label="instagram-link"
            href="https://www.instagram.com/kencko/"
          >
            <InstagramIcon aria-hidden="true" />
          </a>
          <a aria-label="twitter-link" href="https://twitter.com/kenckofoods">
            <TwitterIcon aria-hidden="true" />
          </a>
        </FollowUsLinks>
      </FollowUsStack>
    </Container>
  );
};

export default Footer;
