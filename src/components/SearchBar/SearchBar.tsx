import React, { useState } from 'react';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { BookList } from '../BookList';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from '../../entites/UI/SearchInput/style';
import { useSearchBooks } from '../../hooks/useSearch';
export const SearchBar = () => {
  
  const theme = useTheme();
  const [q, setQ] = useState('');
  const {data,  isError, isLoading} = useSearchBooks({q:q})


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
              onChange={(event:any) => {
                setQ(event.target.value)}
              } 
              value={q}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <BookList data={data?.items || []} isError={isError} isLoading={isLoading}/>
    </Box>
  );
};
