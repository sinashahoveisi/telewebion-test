import type {FC} from 'react';
import styled from 'styled-components';
import FootnoteListItem from '@/components/listItem/FootnoteItem';
import FootnoteList from '@/components/list/Footnoteist';
import ChevronDown from '@/assets/svg/ChevronDown';

const ProgramDetail: FC = () => {
  return (
    <ProgramDetailContainer>
      <details>
        <ProgramDetailSummary>
          <div>
            <ProgramDetailTitleContainer>
              <ProgramDetailSubtitle>خندوانه</ProgramDetailSubtitle>
              <ProgramDetailCaption>صفحه تعامل</ProgramDetailCaption>
            </ProgramDetailTitleContainer>
            <FootnoteList>
              <FootnoteListItem hasBackground>شبکه نسیم</FootnoteListItem>
              <FootnoteListItem hasSeperator>۲۱۸ هزار بازدید</FootnoteListItem>
              <FootnoteListItem hasSeperator>بازی و سرگرمی</FootnoteListItem>
            </FootnoteList>
          </div>
          <ChevronDownAction className="arrow" />
        </ProgramDetailSummary>
        <ProgramCaption hiddenOnTablet>
          در حال انجام بازی همزمان AR کهکشان، از خودتون و صفحه گوشی‌تون فیلم بگیرید و اینجا بارگذاری کنید. صاحبان بهترین
          ویدئوها به استودیوی کهکشان دعوت میشن برای بازی و بازدید
        </ProgramCaption>
      </details>
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
  cursor: pointer;
  @media screen and (min-width: ${(props) => props.theme.screen.tablet}) {
    flex-basis: 40%;
    pointer-events: none;
  }

  & > details[open] > summary .arrow {
    transform: rotate(180deg);
  }

  & > details summary .arrow {
    transform: rotate(0deg);
  }

  & > details .arrow {
    transition: all 0.3s;
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

const ProgramCaption = styled.p<{hiddenOnTablet?: boolean}>`
  display: ${(props) => (props.hiddenOnTablet ? 'block' : 'none')};
  color: ${(props) => props.theme?.color.neutral[200]};
  font-size: ${(props) => props.theme?.typography.caption?.size};
  line-height: ${(props) => props.theme?.typography.caption?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.caption?.weight};
  padding-left: 0.5rem;
  @media screen and (min-width: ${(props) => props.theme.screen.tablet}) {
    display: ${(props) => (props.hiddenOnTablet ? 'none' : 'block')};
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
`;

const ProgramDetailSummary = styled.summary`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const ChevronDownAction = styled(ChevronDown)`
  display: block;
  @media screen and (min-width: ${(props) => props.theme.screen.tablet}) {
    display: none;
  }
`;
