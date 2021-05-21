import { generateMedia } from 'styled-media-query';

export const BreakPoints = {
  xs: '360px',
  sm: '600px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

export const media = generateMedia(BreakPoints);
