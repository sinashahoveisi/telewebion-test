import type {FC} from 'react';
import styled from 'styled-components';
import {ClipItemProps} from '@/types/clip';
import FootnoteList from '@/components/list/Footnoteist';
import FootnoteListItem from '@/components/listItem/FootnoteItem';
import PlayIcon from '@/assets/svg/PlayIcon';

const ClipItem: FC<ClipItemProps> = ({title, type, time, program, date, viewCount, image}) => {
  return (
    <ClipContainer>
      <ClipHeaderContainer>
        <figure>
          <ClipImage src={image} />
        </figure>
        <ClipTimeContainer>
          <ClipTimeText>{time}</ClipTimeText>
          <PlayIcon />
        </ClipTimeContainer>
      </ClipHeaderContainer>
      <ClipBody>
        <ClipTitle>{title}</ClipTitle>
        <CLipFooter>
          <FootnoteList margin="5px 0">
            {!!type && <FootnoteListItem hasBackground>{type}</FootnoteListItem>}
            <FootnoteListItem>{program}</FootnoteListItem>
          </FootnoteList>
          <FootnoteList>
            <FootnoteListItem hasSeperator>{date}</FootnoteListItem>
            <FootnoteListItem hasSeperator>{viewCount}</FootnoteListItem>
          </FootnoteList>
        </CLipFooter>
      </ClipBody>
    </ClipContainer>
  );
};

export default ClipItem;

const ClipContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  flex-basis: 250px;
  flex-shrink: 0;
  padding: 5px;
  border: 1px solid ${(props) => props.theme?.color.transWhite?.xSmall};
  border-radius: 2px;
  margin-left: 8px;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  @media screen and (min-width: ${(props) => props.theme.screen.tablet}) {
    padding: unset;
    width: unset;
    flex-basis: unset;
    flex-shrink: unset;
    margin-left: unset;
  }
`;

const ClipHeaderContainer = styled.div`
  position: relative;
`;

const ClipImage = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const ClipTimeContainer = styled.div`
  position: absolute;
  left: 2px;
  bottom: 2px;
  background-color: ${(props) => props.theme?.color.neutral?.base};
  color: ${(props) => props.theme?.color.neutral?.pureWhite};
  font-size: ${(props) => props.theme?.typography.footnote?.size};
  line-height: ${(props) => props.theme?.typography.footnote?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.footnote?.weight};
  padding: 4px;
  gap: 2px;
  z-index: 2;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ClipTimeText = styled.span`
  color: ${(props) => props.theme?.color.neutral?.pureWhite};
  font-size: ${(props) => props.theme?.typography.footnote?.size};
  line-height: ${(props) => props.theme?.typography.footnote?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.footnote?.weight};
`;

const ClipBody = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 10px 5px;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const ClipTitle = styled.span`
  color: ${(props) => props.theme?.color.neutral?.pureWhite};
  font-size: ${(props) => props.theme?.typography.caption?.size};
  line-height: ${(props) => props.theme?.typography.caption?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.caption?.weight};
  text-align: right;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const CLipFooter = styled.div`
  margin-top: auto;
`;
