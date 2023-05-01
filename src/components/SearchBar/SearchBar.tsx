import React, { useState } from 'react';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { BookList } from '../BookList';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from '../../entites/UI/SearchInput/style';
import { searchBooks } from './redux/SearchSlice';

export const SearchBar = () => {
  const dispatch: AppDispatch = useDispatch();
  const theme = useTheme();
  const [query, setQuery] = useState('');
  const handleSearch = async (newQuery: string) => {
    setQuery(newQuery);
    await dispatch(searchBooks(newQuery));
    console.log(newQuery)
  };

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
          >
            <MenuIcon sx={{ color: theme.palette.background.paper }} />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color:theme.palette.background.paper}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{color:theme.palette.background.paper}}
              onChange={(event:any) => handleSearch(event.target.value)}
              value={query}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
