import type {FC} from 'react';

interface Props {
  className?: string;
}

const ChevronDown: FC<Props> = ({className}) => (
  <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M1 0.5L6 5.5L11 0.5" stroke="#7B8794" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default ChevronDown;
