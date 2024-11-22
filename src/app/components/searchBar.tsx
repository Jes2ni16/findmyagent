import { ChangeEvent, FC } from 'react';
import Input from '@mui/joy/Input';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (


    <Input
  placeholder="Search Your Agent Here..."
  sx={{ '--Input-focused': 1, width: 256 ,color:'#000'}}
  color="success"
  className="searchBar"
  onChange={handleInputChange}
/>
  );
};

export default SearchBar;