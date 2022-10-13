import type {FC} from 'react';
import styled from 'styled-components';
import {ClipItemProps, ClipSectionProps} from '@/types/clip';
import ClipItem from '@/components/listItem/ClipItem';

const ClipSection: FC<ClipSectionProps> = ({title, clips}) => {
  return (
    <ClipContainer>
      <ClipHeader>{title}</ClipHeader>
      <ClipListContainer>
        {clips?.map((clip: ClipItemProps, index: number) => (
          <ClipItem
            key={index}
            image={clip?.image}
            type={clip?.type}
            title={clip?.title}
            program={clip.program}
            date={clip.date}
            viewCount={clip.viewCount}
            time={clip?.time}
          />
        ))}
      </ClipListContainer>
    </ClipContainer>
  );
};

export default ClipSection;

const ClipContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0;
  gap: 24px;
  margin-top: 50px;
`;

const ClipHeader = styled.h2`
  color: ${(props) => props.theme?.color.neutral[200]};
  font-size: ${(props) => props.theme?.typography.body?.size};
  line-height: ${(props) => props.theme?.typography.body?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.body?.weight};
  padding-left: 0.5rem;
`;

const ClipListContainer = styled.div`
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
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: ${(props) => props.theme.screen.laptop}) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
