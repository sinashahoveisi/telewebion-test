import type {FC} from 'react';
import styled from 'styled-components';
import {PouyeshItemProps} from '@/types/pouyesh';

const PouyeshItem: FC<PouyeshItemProps> = ({image, type, title}) => {
  return (
    <PouyeshContainer>
      <figure>
        <PouyeshImage src={image} />
      </figure>
      <PouyeshType>{type}</PouyeshType>
      <PouyeshTitleContainer>
        <PouyeshTitle>{title}</PouyeshTitle>
      </PouyeshTitleContainer>
    </PouyeshContainer>
  );
};

export default PouyeshItem;

const PouyeshContainer = styled.article`
  position: relative;
  width: 250px;
  flex-basis: 250px;
  flex-shrink: 0;
  padding: 5px;
  border: 1px solid ${(props) => props.theme?.color.transWhite?.xSmall};
  border-radius: 2px;
  margin-left: 8px;
  @media screen and (min-width: ${(props) => props.theme.screen.tablet}) {
    padding: unset;
    width: unset;
    flex-basis: unset;
    flex-shrink: unset;
    margin-left: unset;
  }
`;

const PouyeshImage = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const PouyeshType = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: ${(props) => props.theme?.color.neutral?.base};
  color: ${(props) => props.theme?.color.neutral?.pureWhite};
  font-size: ${(props) => props.theme?.typography.footnote?.size};
  line-height: ${(props) => props.theme?.typography.footnote?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.footnote?.weight};
  padding: 0 4px;
  border-radius: 2px;
`;

const PouyeshTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, rgba(16, 21, 26, 0) 0%, #10151a 100%);
  height: 32px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

const PouyeshTitle = styled.span`
  color: ${(props) => props.theme?.color.neutral?.pureWhite};
  font-size: ${(props) => props.theme?.typography.footnote?.size};
  line-height: ${(props) => props.theme?.typography.footnote?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.footnote?.weight};
  text-align: center;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
