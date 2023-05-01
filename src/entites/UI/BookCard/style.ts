import { Theme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import {Card} from '@mui/material';
export const BookCardRoot = styled(Card)(({ theme }: { theme: Theme }) => ({
    maxWidth: 300,
    height: 450,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      maxWidth: 200,
      height: 400,
    },
  }));
  