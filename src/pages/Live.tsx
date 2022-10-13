import styled from 'styled-components';
import khandevaneWall from '@/assets/images/khandevaneWall.png';
import khandevaneLogo from '@/assets/images/khandevaneLogo.png';
import ProgramDetail from '@/containers/live/ProgramDetail';
import ProgramEpisode from '@/containers/live/ProgramEpisode';
import PouyeshSection from '@/containers/live/PouyeshSection';
import ClipSection from '@/containers/live/ClipSection';
import {clipsData, interspersedClipsData, submitedClipsData} from '@/assets/constants/data';

const Live = () => {
  return (
    <Container>
      <WallImage src={khandevaneWall} alt="wall image" />
      <ContentSection>
        <ProgramContainer>
          <ProgramLogoContainer>
            <ProgramLogo src={khandevaneLogo} alt="program logo" />
          </ProgramLogoContainer>
          <ProgramDetail />
          <ProgramEpisode />
        </ProgramContainer>
        <PouyeshSection />
        <ClipSection title="کلیپ‌های برنامه‌سازان" clips={clipsData} />
        <ClipSection title="کلیپ‌های تقطیع شده" clips={interspersedClipsData} />
        <ClipSection title="کلیپ‌های ارسالی" clips={submitedClipsData} />
      </ContentSection>
    </Container>
  );
};

export default Live;

const Container = styled.main`
  padding: 0;
  @media screen and (min-width: ${(props) => props.theme.screen.tablet}) {
    padding: 0.5rem 1.5rem;
  }
`;

const WallImage = styled.img`
  height: auto;
  width: 100%;
  object-fit: contain;
`;

const ContentSection = styled.section`
  padding: 8px;
`;

const ProgramContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: ${(props) => props.theme.screen.tablet}) {
    flex-wrap: nowrap;
  }
`;

const ProgramLogoContainer = styled.div`
  height: 64px;
  width: 64px;
  flex-basis: 64px;
  padding: 10px;
  @media screen and (min-width: ${(props) => props.theme.screen.tablet}) {
    height: 100px;
    width: 100px;
    flex-basis: 100px;
  }
`;

const ProgramLogo = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50px;
`;
