import styled from 'styled-components';

const FootnoteListItem = styled.li<{hasBackground?: boolean; hasSeperator?: boolean}>`
  background-color: ${(props) => (props?.hasBackground ? props.theme?.color.neutral?.base : 'unset')};
  color: ${(props) => (props?.hasBackground ? props.theme?.color.neutral[200] : props.theme?.color.neutral[400])};
  font-size: ${(props) => props.theme?.typography.footnote?.size};
  line-height: ${(props) => props.theme?.typography.footnote?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.footnote?.weight};
  padding: 0 4px;
  border-radius: 2px;
  &:not(:first-child):before {
    content: ${(props) => (props?.hasSeperator ? '.' : 'unset')};
    padding: 0 0.5rem;
  }
`;

export default FootnoteListItem;
