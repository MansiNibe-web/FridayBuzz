// src/components/SearchBar.tsx
import { useState } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  return (
    <TextField
      label="Search ideas"
      variant="outlined"
      fullWidth
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      sx={{ maxWidth: 600, margin: '1.5rem auto', display: 'block' }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
