import React from 'react';
import { Container, Spacer, FollowUsStack, FollowUsLinks } from './styles';
import TwitterIcon from '../../assets/twitter.svg';
import InstagramIcon from '../../assets/instagram.svg';
import FacebookIcon from '../../assets/facebook.svg';

const Footer = () => {
  return (
    <Container>
      <span>@ 2021, fruit salad inc.</span>
      <Spacer />
      <span>read me</span>
      <FollowUsStack>
        <span>follow us</span>
        <FollowUsLinks>
          <a href="https://www.facebook.com/kenckocom/">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/kencko/">
            <InstagramIcon />
          </a>
          <a href="https://twitter.com/kenckofoods">
            <TwitterIcon />
          </a>
        </FollowUsLinks>
      </FollowUsStack>
    </Container>
  );
};

export default Footer;
