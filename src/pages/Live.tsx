import styled from 'styled-components';
import khandevaneWall from '@/assets/images/khandevaneWall.png';
import khandevaneLogo from '@/assets/images/khandevaneLogo.png';
import {episodes} from '@/assets/constants/data';

const Live = () => {
  return (
    <Container>
      <WallImage src={khandevaneWall} alt="wall image" />
      <ProgramContainer>
        <ProgramLogo src={khandevaneLogo} alt="program image" />
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

const ProgramLogo = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;

const ProgramDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  font-size: ${(props) => props.theme?.typography.subTitle?.size};
  line-height: ${(props) => props.theme?.typography.subTitle?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.subTitle?.weight};

  &:after {
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
  flex-direction: row;
  align-items: center;
`;

const ProgramEpisodeHeader = styled.h2`
  color: ${(props) => props.theme?.color.neutral[400]};
  font-size: ${(props) => props.theme?.typography.bodySmall?.size};
  line-height: ${(props) => props.theme?.typography.bodySmall?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.bodySmall?.weight};
`;

const ProgramEpisodeList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  width: 100%;
  overflow: scroll;
`;

const ProgramEpisodeListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 160px;
  height: 90px;
  padding: 0.5rem;
`;

const ProgramEpisodeListItemSeason = styled.h3`
  color: ${(props) => props.theme?.color.neutral[400]};
  font-size: ${(props) => props.theme?.typography.bodySmall?.size};
  line-height: ${(props) => props.theme?.typography.bodySmall?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.bodySmall?.weight};
`;

const ProgramEpisodeListItemEpisode = styled.span`
  color: ${(props) => props.theme?.color.neutral?.pureWhite};
  font-size: ${(props) => props.theme?.typography.bodySmall?.size};
  line-height: ${(props) => props.theme?.typography.bodySmall?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.bodySmall?.weight};
`;
