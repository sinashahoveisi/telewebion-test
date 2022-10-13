import type {FC} from 'react';
import styled from 'styled-components';
import {episodes} from '@/assets/constants/data';

const ProgramEpisode: FC = () => {
  return (
    <ProgramEpisodeContainer>
      <ProgramEpisodeHeader>قسمت ها در فیلم و سریال</ProgramEpisodeHeader>
      <ProgramEpisodeList>
        {episodes.map((episode, index: number) => (
          <ProgramEpisodeListItem key={index}>
            <ProgramEpisodeListItemSeason>{episode?.season}</ProgramEpisodeListItemSeason>
            <ProgramEpisodeListItemEpisode>{episode?.episode}</ProgramEpisodeListItemEpisode>
          </ProgramEpisodeListItem>
        ))}
      </ProgramEpisodeList>
    </ProgramEpisodeContainer>
  );
};

export default ProgramEpisode;

const ProgramEpisodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 100%;
  flex: 1;
  overflow: hidden;
`;

const ProgramEpisodeHeader = styled.h2`
  color: ${(props) => props.theme?.color.neutral[400]};
  font-size: ${(props) => props.theme?.typography.bodySmall?.size};
  line-height: ${(props) => props.theme?.typography.bodySmall?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.bodySmall?.weight};
  margin-bottom: 10px;
`;

const ProgramEpisodeList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 8px;
  overflow: scroll;
`;

const ProgramEpisodeListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 160px;
  flex-basis: 160px;
  flex-shrink: 0;
  height: 60px;
  padding: 8px;
  border: 1px solid ${(props) => props.theme?.color.transWhite.xSmall};
  color: ${(props) => props.theme?.color.transWhite.xSmall};
`;

const ProgramEpisodeListItemSeason = styled.h3`
  color: ${(props) => props.theme?.color.neutral[400]};
  font-size: ${(props) => props.theme?.typography.bodySmall?.size};
  line-height: ${(props) => props.theme?.typography.bodySmall?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.bodySmall?.weight};
  margin-bottom: 10px;
`;

const ProgramEpisodeListItemEpisode = styled.span`
  color: ${(props) => props.theme?.color.neutral[400]};
  font-size: ${(props) => props.theme?.typography.bodySmall?.size};
  line-height: ${(props) => props.theme?.typography.bodySmall?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.bodySmall?.weight};
`;
