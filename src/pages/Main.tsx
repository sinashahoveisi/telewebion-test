import {Outlet} from 'react-router-dom';
import type {FC} from 'react';
import styled from 'styled-components';
import UserIcon from '@/assets/svg/UserIcon';
import Logo from '@/components/header/Logo';
import SearchIcon from '@/assets/svg/SearchIcon';

const Main: FC = () => {
  return (
    <Container>
      <Header>
        <Logo />
        <HeaderMenuContainer>
          <HeaderMenuItem>خانه</HeaderMenuItem>
          <HeaderMenuItem>پخش زنده</HeaderMenuItem>
          <HeaderMenuItem>فیلم و سریال</HeaderMenuItem>
          <HeaderMenuImportantItem>پویش</HeaderMenuImportantItem>
        </HeaderMenuContainer>
        <ActionContainer>
          <SearchHeaderIcon />
          <UserIcon />
        </ActionContainer>
      </Header>
      <Outlet />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  max-width: 1500px;
  margin: auto;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 8px;
  border-bottom: 1px solid ${(props) => props.theme?.color.neutral?.base};
`;

const HeaderMenuContainer = styled.ul`
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${(props) => props.theme.screen.mobile}) {
    display: flex;
  }
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

const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`;

const SearchHeaderIcon = styled(SearchIcon)`
  display: block;
  @media screen and (min-width: ${(props) => props.theme.screen.mobile}) {
    display: none;
  }
`;
