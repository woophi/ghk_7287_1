import { style } from '@vanilla-extract/css';

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

export const appSt = {
  container,
};
