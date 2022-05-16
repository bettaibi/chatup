import React from 'react';
import {
  Box,
  IconButton,
  Typography
} from '@mui/material';
import {
  ArrowBack
} from '@mui/icons-material';
import PageHeader from '../../../components/PageHeader';
import SearchInput from '../../../components/SearchInput';
import Contacts from './Contacts';

const contactList = [
  {
    letter: 'A',
    users: [
      {name: 'Anis'},
      {name: 'Ahlem'},
      {name: 'Amin'}
    ]
  },
  {
    letter: 'B',
    users: [
      {name: 'Bassem'},
      {name: 'Baha'},
      {name: 'Bahr'}
    ]
  },
  {
    letter: 'N',
    users: [
      {name: 'Nidhal'},
      {name: 'Najet'},
      {name: 'Noura'},
      {name: 'Nahed'},
      {name: 'Noura'}
    ]
  },
  {
    letter: 'M',
    users: [
      {name: 'Manel'},
      {name: 'Maram'},
      {name: 'Mohammed Ali'},
      {name: 'Mohammed Yassin'},
      {name: 'Mohammed Nasser'},
      {name: 'Mounir'}
    ]
  },
  
];

const Search = () => {
  const [text, setText] = React.useState<string>('');

  console.log(text)

  return (
    <Box>
      <PageHeader>
        <IconButton>
          <ArrowBack />
        </IconButton>
        <Typography variant="h6">Search</Typography>
      </PageHeader>

      <Box className="spacing px" pt="1.2rem">
        <Typography variant="h4" sx={{fontWeight: 700}}>Contacts</Typography>
        <Typography variant="subtitle2" color="secondary">50 Contacts</Typography>
      </Box>

      <Box className="spacing px" py="1.2rem">
        <SearchInput text = {text} setText = {setText} />
      </Box>

      {/* LIST */}
      <Contacts contactList = {contactList} />
    </Box>
  )
}

export default Search;