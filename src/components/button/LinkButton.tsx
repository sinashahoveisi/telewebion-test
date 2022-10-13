import type {FC, ReactNode} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

interface Props {
  to: string;
  text: string;
  icon?: ReactNode;
  className?: string;
}

const LinkButton: FC<Props> = ({to, text, className, icon}) => (
  <Container to={to} className={className}>
    <Text>{text}</Text>
    {icon}
  </Container>
);

export default LinkButton;

const Container = styled(Link)`
  height: 32px;
  width: 100%;
  display: flex;
  gap: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme?.color.transWhite?.xSmall};
  border-radius: 2px;
  padding: 10px;
`;

const Text = styled.span`
  color: ${(props) => props.theme?.color.neutral?.pureWhite};
  font-size: ${(props) => props.theme?.typography.bodySmall?.size};
  line-height: ${(props) => props.theme?.typography.bodySmall?.lineHeight};
  font-weight: ${(props) => props.theme?.typography.bodySmall?.weight};
`;
