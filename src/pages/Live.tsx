import styled from 'styled-components';
import khandevaneWall from '@/assets/images/khandevaneWall.png';
import khandevaneLogo from '@/assets/images/khandevaneLogo.png';
import {episodes} from '@/assets/constants/data';

const Live = () => {
  return (
    <Container>
      <WallImage src={khandevaneWall} alt="wall image" />
      <ProgramContainer>
        <ProgramLogoContainer>
          <ProgramLogo src={khandevaneLogo} alt="program image" />
        </ProgramLogoContainer>
        <ProgramDetailContainer>
          <ProgramDetailTitleContainer>
            <ProgramDetailSubtitle>خندوانه</ProgramDetailSubtitle>
            <ProgramDetailCaption>صفحه تعامل</ProgramDetailCaption>
          </ProgramDetailTitleContainer>
          <ProgramDetailFootnoteList>
            <ProgramDetailFootnoteListItem hasBackground>شبکه نسیم</ProgramDetailFootnoteListItem>
            <ProgramDetailFootnoteListItem>۲۱۸ هزار بازدید</ProgramDetailFootnoteListItem>
            <ProgramDetailFootnoteListItem>بازی و سرگرمی</ProgramDetailFootnoteListItem>
          </ProgramDetailFootnoteList>
          <ProgramCaption>
            در حال انجام بازی همزمان AR کهکشان، از خودتون و صفحه گوشی‌تون فیلم بگیرید و اینجا بارگذاری کنید. صاحبان
            بهترین ویدئوها به استودیوی کهکشان دعوت میشن برای بازی و بازدید
          </ProgramCaption>
        </ProgramDetailContainer>
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
      </ProgramContainer>
    </Container>
  );
};

export default Live;

const Container = styled.main`
  padding: 0.5rem 1.5rem;
`;

const WallImage = styled.img`
  height: auto;
  width: 100%;
  object-fit: contain;
`;

const ProgramContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProgramLogoContainer = styled.div`
  height: 100px;
  width: 100px;
  flex-basis: 100px;
  padding: 10px;
`;

const ProgramLogo = styled.img`
  height: fit-content;
  width: fit-content;
  border-radius: 50px;
`;

const ProgramDetailContainer = styled.div`
  display: flex;
  flex-basis: 40%;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
`;

const ProgramDetailTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProgramDetailSubtitle = styled.h1`
  color: ${(props) => props.theme?.color.neutral?.pureWhite};
  font-size: ${(props) => props.theme?.typography.subTitle?.size};
  line-height: ${(props) => props.theme?.typography.subTitle?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.subTitle?.weight};
  padding-left: 0.5rem;
`;

const ProgramDetailCaption = styled.span`
  color: ${(props) => props.theme?.color.neutral[400]};
  font-size: ${(props) => props.theme?.typography.caption?.size};
  line-height: ${(props) => props.theme?.typography.caption?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.caption?.weight};
  padding-left: 0.5rem;
`;

const ProgramDetailFootnoteList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProgramDetailFootnoteListItem = styled.li<{hasBackground?: boolean}>`
  background-color: ${(props) => (props?.hasBackground ? props.theme?.color.neutral?.base : 'unset')};
  color: ${(props) => (props?.hasBackground ? props.theme?.color.neutral[200] : props.theme?.color.neutral[400])};
  font-size: ${(props) => props.theme?.typography.footnote?.size};
  line-height: ${(props) => props.theme?.typography.footnote?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.footnote?.weight};
  padding: 0 4px;
  border-radius: 2px;
  &:not(:first-child):before {
    content: '.';
    padding: 0 0.5rem;
  }
`;

const ProgramCaption = styled.p`
  color: ${(props) => props.theme?.color.neutral[200]};
  font-size: ${(props) => props.theme?.typography.caption?.size};
  line-height: ${(props) => props.theme?.typography.caption?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.caption?.weight};
  padding-left: 0.5rem;
`;

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
