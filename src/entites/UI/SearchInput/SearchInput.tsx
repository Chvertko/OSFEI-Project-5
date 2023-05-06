import { useRef, useState } from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from './style';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
  onSearch: (query: string) => void;
  disabled:boolean
};

export const SearchInput = ({ onSearch ,disabled }: Props) => {
  const [q, setQ] = useState('');
  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const newQ = event.target.value;
    setQ(newQ);
    onSearch(newQ);
  }

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{color:'#ffffff'}}/>
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        sx={{ mr: 2, color: '#ffffff' }}
        onChange={handleSearch}
        value={q}
        disabled={disabled}
      />
    </Search>
  );
};
