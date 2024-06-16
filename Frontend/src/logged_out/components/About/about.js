import React, { useEffect, useRef } from 'react';

import styled from 'styled-components';
import vectorFileImage from './../../../assets/vector-file.png';
import Ted from './../../../assets/Team/TED.png';
import Paul from  './../../../assets/Team/Paul.png';
import Esther from  './../../../assets/Team/Esther.png';
import Hannah from  './../../../assets/Team/Hannah.png';
import Ansty from  './../../../assets/Team/Ansty.png';

// Styled components
const AboutSection = styled.section`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutLeft = styled.div``;

const AboutImage = styled.img`
  max-width: 100%;
  height: auto;
  opacity: 0;
  transform: translateX(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;

  &.fadeIn {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const AboutRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
`;

const Header = styled.div`
  max-width: 600px;
  font-weight: bolder;
  font-size: 60px;
  color: rgb(15, 210, 210);
`;

const Body = styled.div`
  width: 450px;
  font-size: 20px;
  color: rgb(127, 127, 127);

  @media screen and (max-width: 1200px) {
    width: 80%;
  }
`;



const TeamSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 50px;
`;

const TeamCard = styled.div`
  background-color: #fcf0f1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const TeamImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const TeamName = styled.h3`
  font-size: 20px;
  margin-bottom: 5px;
`;

const TeamPosition = styled.p`
  font-size: 16px;
  color: #6c757d;
`;
const TeamData = [
{
  name: "Ted Otieno",
  position: "Director",
  image: Ted
},
{
  name: "Paul Lucas",
  position: "Project Manager",
  image: Paul
},
{
  name: "Ansty Kemey",
  position: "Business development lead",
  image: Ansty
},
{
  name: "Esther Akinyi",
  position: "Animal Scientist",
  image: Esther
},
{
  name: "Hannah Olukoye",
  position: "Software Developer",
  image: Hannah
}

];
const AboutPage = () => {

    return (
      <AboutSection className='aboutSection'>
        <AboutRight>
          <Header>About Us</Header>
          <Body>
          Welcome to Advanced Metering Solutions East Africa, where we specialize in providing cutting-edge technology solutions for urban livestock farmers and small-scale crop farmers. Our innovative products leverage AI and data analytics to optimize farming practices and enhance productivity in challenging environments.
          </Body>
        </AboutRight>
  
        <TeamSection>
          {TeamData.map((member, index) => (
            <TeamCard key={index}>
              <TeamImage src={member.image} alt={member.name} />
              <TeamName>{member.name}</TeamName>
              <TeamPosition>{member.position}</TeamPosition>
            </TeamCard>
          ))}
        </TeamSection>
      </AboutSection>
    );
  };
  
  export default AboutPage;