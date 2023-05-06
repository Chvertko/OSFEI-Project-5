import React, { useState } from 'react';
import { AppBar, Box, Drawer, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useAppDispatch } from '../../redux/store';
import { saveQueryString } from '../SearchBar/redux/SearchSlice';
import { SearchInput } from '../../entites/UI/SearchInput/SearchInput';
import { Link } from 'react-router-dom';
interface SearchBar{
  disabled:boolean
}
export const SearchBar:React.FC<SearchBar> = ({disabled}) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };


  const handleMenuOpen = () => {
    setOpen(true);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };
  function handleSearch(query: string) {
    setQuery(query);
    dispatch(saveQueryString(query));
    // здесь можно добавить логику для выполнения запроса к API
  }
  type Anchor = 'top' | 'left' | 'bottom' | 'right';
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
       <MenuItem sx={{color:'#ffffff'}} onClick={handleMenuClose}><Link to='/favoritePage'>Favorites</Link></MenuItem>
        <MenuItem sx={{color:'#ffffff'}} onClick={handleMenuClose}><Link to='/'>Store</Link></MenuItem>
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, color: theme.palette.background.paper }}
            onClick={handleMenuOpen}
          >
            <MenuIcon sx={{ color: theme.palette.background.paper }} />
          </IconButton>
          <Drawer
            anchor="left"
            open={open}
            onClose={handleMenuClose}
            sx={{bgcolor:'gray',width:'200px'}}
          >
            {list('left')}
          </Drawer>
          <SearchInput disabled={disabled}  onSearch={handleSearch} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
