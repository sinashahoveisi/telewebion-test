import type {FC} from 'react';
import styled from 'styled-components';

const ProgramDetail: FC = () => {
  return (
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
        در حال انجام بازی همزمان AR کهکشان، از خودتون و صفحه گوشی‌تون فیلم بگیرید و اینجا بارگذاری کنید. صاحبان بهترین
        ویدئوها به استودیوی کهکشان دعوت میشن برای بازی و بازدید
      </ProgramCaption>
    </ProgramDetailContainer>
  );
};

export default ProgramDetail;

const ProgramDetailContainer = styled.div`
  display: flex;
  flex-basis: calc(100% - 105px);
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
  @media screen and (min-width: ${(props) => props.theme.screen.tablet}) {
    flex-basis: 40%;
  }
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
  &:after {
    content: ')';
  }
  &:before {
    content: '(';
  }
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
  display: none;
  color: ${(props) => props.theme?.color.neutral[200]};
  font-size: ${(props) => props.theme?.typography.caption?.size};
  line-height: ${(props) => props.theme?.typography.caption?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.caption?.weight};
  padding-left: 0.5rem;
  @media screen and (min-width: ${(props) => props.theme.screen.tablet}) {
    display: block;
  }
`;
