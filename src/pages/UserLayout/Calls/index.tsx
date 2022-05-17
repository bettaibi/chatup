import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  IconButton,
  Stack
} from '@mui/material';
import {
  ArrowBack
} from '@mui/icons-material';
import AllCalls from './CallsList';

const Calls = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>

      <Stack direction="column" className="border__bottom spacing px">
        <Stack direction="row" alignItems="center" sx={{ paddingTop: '.5rem' }}>
          <IconButton>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6">Calls History</Typography>
        </Stack>

        <Tabs value={value} onChange={handleChange}
         variant="scrollable"
         scrollButtons="auto">
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Incomming Calls" {...a11yProps(1)} />
          <Tab label="Outgoing calls" {...a11yProps(2)} />
          <Tab label="Missing Calls" {...a11yProps(3)} />
        </Tabs>
      </Stack>

      <TabsContent value={value} />

    </Box>
  )
};

const TabsContent = ({ value }: { value: number }) => {

  return (
    <Box className="spacing px" py="1.2rem">
      <TabPanel value={value} index={0}>
        <AllCalls />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
    </Box>
  )
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          {children}
        </>
      )}
    </Box>
  );
}


export default Calls;