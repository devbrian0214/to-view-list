import React, { useState } from 'react';

import { TextField, InputAdornment, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import PageviewIcon from '@material-ui/icons/Pageview';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
  field: {
    paddingRight: 20,
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
    },
  },
  searchButton: {
    [theme.breakpoints.down('xs')]: {
      marginTop: 10,
      width: '100%',
    },
  },
}));

const Search = () => {
  const [query, setQuery] = useState('');

  const classes = useStyles();

  const handleSearch = () => {
    console.log('searched', query);
  };

  return (
    <div className={classes.root}>
      <TextField
        className={classes.field}
        fullWidth
        placeholder="Search entries by title or description.."
        value={query}
        onChange={({ target }) => setQuery(target.value)}
        color="secondary"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="secondary" />
            </InputAdornment>
          ),
        }}
      />
      <Button
        onClick={handleSearch}
        color="secondary"
        variant="contained"
        startIcon={<PageviewIcon />}
        className={classes.searchButton}
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
