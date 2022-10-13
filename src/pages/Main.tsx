import {Link, NavLink, Outlet} from 'react-router-dom';
import type {FC} from 'react';
import styled from 'styled-components';
import UserIcon from '@/assets/svg/UserIcon';

const Main: FC = () => {
  return (
    <>
      <Header>
        <UserIcon />
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="resorts" className={({isActive}) => (isActive ? 'hidden' : 'text-blue-400')}>
                Resorts
              </NavLink>
            </li>
            <li>
              <NavLink to="buckets" className={({isActive}) => (isActive ? 'hidden' : 'text-blue-400')}>
                Buckets
              </NavLink>
            </li>
          </ul>
        </div>
      </Header>
      <Outlet />
    </>
  );
};

export default Main;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
