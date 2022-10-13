export interface ClipItemProps {
  title: string;
  image: string;
  type?: string;
  program: string;
  date: string;
  viewCount: string;
  time: string;
}

export interface ClipSectionProps {
  title: string;
  clips: ClipItemProps[];
}
