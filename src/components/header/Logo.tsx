import type {FC} from 'react';
import styled from 'styled-components';
import TIcon from '@/assets/svg/TIcon';
import WIcon from '@/assets/svg/WIcon';

const Logo: FC = () => (
  <Container>
    <WIcon />
    <TIcon />
  </Container>
);

export default Logo;

const Container = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${(props) => props.theme.screen.mobile}) {
    background-color: ${(props) => props.theme.color?.brand?.brandColorRed};
  }
`;
