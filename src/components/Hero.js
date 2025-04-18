import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    #2e7d32;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding-top: 80px;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const CTAButton = styled.button`
  background-color: #2e7d32;
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    background-color: #1b5e20;
  }
`;

const TrustBadge = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Badge = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  backdrop-filter: blur(5px);
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Title>Get High-Quality Graded Machinery, Tools & Supplies</Title>
        <Subtitle>
          From Farm Machinery to Workshop Tools, we've got everything you need to increase your productivity.
          Trusted by 200,000+ customers across India.
        </Subtitle>
        <CTAButton>Explore Products</CTAButton>
        <TrustBadge>
          <Badge>Trusted by 200,000+ customers across India</Badge>
        </TrustBadge>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 