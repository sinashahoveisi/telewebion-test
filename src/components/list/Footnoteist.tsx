import styled from 'styled-components';

const FootnoteList = styled.ul<{margin?: string}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: ${(props) => props?.margin};
`;

export default FootnoteList;
