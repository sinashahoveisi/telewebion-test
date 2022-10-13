import {Outlet} from 'react-router-dom';
import type {FC} from 'react';
import styled from 'styled-components';
import UserIcon from '@/assets/svg/UserIcon';
import Logo from '@/components/header/Logo';

const Main: FC = () => {
  return (
    <>
      <Header>
        <Logo />
        <HeaderMenuContainer>
          <HeaderMenuItem>خانه</HeaderMenuItem>
          <HeaderMenuItem>پخش زنده</HeaderMenuItem>
          <HeaderMenuItem>فیلم و سریال</HeaderMenuItem>
          <HeaderMenuImportantItem>پویش</HeaderMenuImportantItem>
        </HeaderMenuContainer>
        <UserIcon />
      </Header>
      <Outlet />
    </>
  );
};

export default Main;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => props.theme?.sizing.hug};
  border-bottom: 1px solid ${(props) => props.theme?.color.neutral?.base};
`;

const HeaderMenuContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

const HeaderMenuItem = styled.li`
  color: ${(props) => props.theme?.color.neutral[200]};
  font-size: ${(props) => props.theme?.typography.body?.size};
  line-height: ${(props) => props.theme?.typography.body?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.body?.weight};
  padding: 0 0.5rem;
  cursor: pointer;
`;

const HeaderMenuImportantItem = styled.li`
  color: ${(props) => props.theme?.color.neutral?.pureWhite};
  font-size: ${(props) => props.theme?.typography.strongBody?.size};
  line-height: ${(props) => props.theme?.typography.strongBody?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.strongBody?.weight};
  padding: 0 0.5rem;
  cursor: pointer;
`;
