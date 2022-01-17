import React from 'react';
import Footer from '..';
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineCopyright,
} from 'react-icons/ai';

function FooterContainer() {

  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href="#">Story</Footer.Link>
            <Footer.Link href="#">Clients</Footer.Link>
            <Footer.Link href="#">Testimonials</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Menu</Footer.Title>
            <Footer.Link href="#">Story</Footer.Link>
            <Footer.Link href="#">Clients</Footer.Link>
            <Footer.Link href="#">Testimonials</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href="#">Outdoor Catering</Footer.Link>
            <Footer.Link href="#">Event Planning</Footer.Link>
            <Footer.Link href="#">Rentals</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Products</Footer.Title>
            <Footer.Link href="#">Story</Footer.Link>
            <Footer.Link href="#">Clients</Footer.Link>
            <Footer.Link href="#">Testimonials</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link href="#">Lagos</Footer.Link>
            <Footer.Link href="#">Abuja</Footer.Link>
            <Footer.Link href="#">Port Harcourt</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="#">
              <AiOutlineInstagram /> Instagram
            </Footer.Link>
            <Footer.Link href="#">
              <AiOutlineTwitter /> Twitter
            </Footer.Link>
            <Footer.Link href="#">
              <AiOutlineFacebook /> Facebook
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
        <Footer.Note>
          <AiOutlineCopyright /> {new Date().getFullYear()}
        </Footer.Note>
      </Footer.Wrapper>
    </Footer>
  );
}

export default FooterContainer;
