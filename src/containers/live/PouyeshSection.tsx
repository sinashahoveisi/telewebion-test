import type {FC} from 'react';
import styled from 'styled-components';
import {pouyeshsData} from '@/assets/constants/data';
import {PouyeshItemProps} from '@/types/pouyesh';
import PouyeshItem from '@/components/listItem/PouyeshItem';

const PouyeshSection: FC = () => {
  return (
    <PouyeshContainer>
      <PouyeshHeader>پویش های فعال</PouyeshHeader>
      <PouyeshListContainer>
        {pouyeshsData?.map((pouyesh: PouyeshItemProps, index: number) => (
          <PouyeshItem key={index} image={pouyesh?.image} type={pouyesh?.type} title={pouyesh?.title} />
        ))}
      </PouyeshListContainer>
    </PouyeshContainer>
  );
};

export default PouyeshSection;

const PouyeshContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0;
  gap: 24px;
  margin-top: 50px;
`;

const PouyeshHeader = styled.h2`
  color: ${(props) => props.theme?.color.neutral[200]};
  font-size: ${(props) => props.theme?.typography.body?.size};
  line-height: ${(props) => props.theme?.typography.body?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.body?.weight};
  padding-left: 0.5rem;
`;

const PouyeshListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: ${(props) => props.theme.screen.tablet}) {
    display: grid;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${(props) => props.theme.screen.laptop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
