import styled from 'styled-components';
import khandevaneWall from '@/assets/images/khandevaneWall.png';
import khandevaneLogo from '@/assets/images/khandevaneLogo.png';
import ProgramDetail from '@/containers/live/ProgramDetail';
import ProgramEpisode from '@/containers/live/ProgramEpisode';
import PouyeshSection from '@/containers/live/PouyeshSection';

const Live = () => {
  return (
    <Container>
      <WallImage src={khandevaneWall} alt="wall image" />
      <ProgramContainer>
        <ProgramLogoContainer>
          <ProgramLogo src={khandevaneLogo} alt="program image" />
        </ProgramLogoContainer>
        <ProgramDetail />
        <ProgramEpisode />
      </ProgramContainer>
      <PouyeshSection />
    </Container>
  );
};

export default Live;

const Container = styled.main`
  padding: 0.5rem 1.5rem;
`;

const WallImage = styled.img`
  height: auto;
  width: 100%;
  object-fit: contain;
`;

const ProgramContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProgramLogoContainer = styled.div`
  height: 100px;
  width: 100px;
  flex-basis: 100px;
  padding: 10px;
`;

const ProgramLogo = styled.img`
  height: fit-content;
  width: fit-content;
  border-radius: 50px;
`;
