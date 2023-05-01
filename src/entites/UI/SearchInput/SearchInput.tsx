import React from "react";
import { SearchInputProps } from "../../../TS";
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from "./style";
import { useTheme } from "@mui/material/styles";
export const SearchInput: React.FC<SearchInputProps> = ({onSearch,query}) => {
    const theme = useTheme()
    return(
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color:theme.palette.background.paper}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{color:theme.palette.background.paper}}
              onChange={(event) => onSearch(event.target.value)}
              value={query}
            />
          </Search>
    )
}