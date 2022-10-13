import type {FC} from 'react';
import styled from 'styled-components';
import {episodesData} from '@/assets/constants/data';
import LinkButton from '@/components/button/LinkButton';
import ArrowUpLeftIcon from '@/assets/svg/ArrowUpLeftIcon';

const ProgramEpisode: FC = () => {
  return (
    <>
      <MobileLinkButton to="/live" text="قسمت ها در فیلم و سریال" icon={<ArrowUpLeftIcon />} />
      <ProgramEpisodeContainer>
        <ProgramEpisodeHeader>قسمت ها در فیلم و سریال</ProgramEpisodeHeader>
        <ProgramEpisodeList>
          {episodesData.map((episode, index: number) => (
            <ProgramEpisodeListItem key={index}>
              <ProgramEpisodeListItemSeason>{episode?.season}</ProgramEpisodeListItemSeason>
              <ProgramEpisodeListItemEpisode>{episode?.episode}</ProgramEpisodeListItemEpisode>
            </ProgramEpisodeListItem>
          ))}
        </ProgramEpisodeList>
      </ProgramEpisodeContainer>
    </>
  );
};

export default ProgramEpisode;

const ProgramEpisodeContainer = styled.div`
  display: none;
  flex-basis: 100%;
  flex-shrink: 0;
  width: 100%;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 100%;
  @media screen and (min-width: ${(props) => props.theme.screen.tablet}) {
    display: flex;
    flex: 1;
    width: unset;
    overflow: hidden;
  }
`;

const MobileLinkButton = styled(LinkButton)`
  display: flex;
  @media screen and (min-width: ${(props) => props.theme.screen.tablet}) {
    display: none;
  }
`;

const ProgramEpisodeHeader = styled.h2`
  color: ${(props) => props.theme?.color.neutral[400]};
  font-size: ${(props) => props.theme?.typography.bodySmall?.size};
  line-height: ${(props) => props.theme?.typography.bodySmall?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.bodySmall?.weight};
  margin-bottom: 10px;
`;

const ProgramEpisodeList = styled.ul`
  display: none;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 8px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: ${(props) => props.theme.screen.tablet}) {
    display: flex;
  }
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
