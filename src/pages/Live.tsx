import styled from 'styled-components';
import WallImage from '@/assets/image/Wall.png';

const Live = () => {
  return (
    <Container>
      <WallImg src={WallImage} alt="Wall Image" />
    </Container>
  );
};

export default Live;

const Container = styled.main`
  padding: 0.5rem 1.5rem;
`;

const WallImg = styled.img`
  height: auto;
  width: 100%;
  object-fit: contain;
`;
