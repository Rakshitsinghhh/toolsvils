import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1b5e20;
  color: white;
  padding: 4rem 2rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  padding: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: white;
`;

const FooterText = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const PartnerLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 1rem;
`;

const PartnerLogo = styled.div`
  color: white;
  font-weight: bold;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    opacity: 1;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>About ToolsVils</FooterTitle>
          <FooterText>
            We provide high-quality graded machinery, tools & supplies all in one place.
            Trusted by 200,000+ customers across India, we're your one-stop solution for
            all farming and industrial equipment needs.
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <ContactItem>
            <FaPhone />
            <FooterText>+91 1234567890</FooterText>
          </ContactItem>
          <ContactItem>
            <FaEnvelope />
            <FooterText>contact@toolsvils.com</FooterText>
          </ContactItem>
          <ContactItem>
            <FaMapMarkerAlt />
            <FooterText>123 Industrial Area, Mumbai, Maharashtra, India</FooterText>
          </ContactItem>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Connect With Us</FooterTitle>
          <FooterText>
            Follow us on social media for the latest updates on new products and special offers.
          </FooterText>
          <SocialLinks>
            <SocialIcon href="#" aria-label="Facebook">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <FaInstagram />
            </SocialIcon>
          </SocialLinks>
          <FooterTitle style={{ marginTop: '2rem', fontSize: '1.2rem' }}>We are backed by</FooterTitle>
          <PartnerLogos>
            <PartnerLogo>Techstars</PartnerLogo>
            <PartnerLogo>Miller Center</PartnerLogo>
            <PartnerLogo>Turas Mara</PartnerLogo>
            <PartnerLogo>B&B Ventures</PartnerLogo>
          </PartnerLogos>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 