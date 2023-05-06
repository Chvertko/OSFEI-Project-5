import { Theme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import {Card} from '@mui/material';
export const BookCardRoot = styled(Card)(({ theme }: { theme: Theme }) => ({
    width: 300,
    minHeight:400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    justifyItems:'center',
    alignItems:'center',
    flexGrow:1,
    [theme.breakpoints.down('md')]: {
      maxWidth: 200,
      height: 400,
    },
  }));
  