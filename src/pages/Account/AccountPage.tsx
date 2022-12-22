import { Box, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { namespaces } from '../../i18n/i18n.constants';
import { AccountStatus, MyInformation, MySubscriptions } from './components'

//? ******** MATERIAL UI *********
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) : JSX.Element {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) : object {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

//? ******** MATERIAL UI *********

const AccountPage = (): JSX.Element => {

  const {t} = useTranslation(namespaces.pages.account)

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) : void => {
    setValue(newValue);
  };

  return (

    <Box
      sx={{ flexGrow: 1, minHeight: '80vh', bgcolor: 'background.paper', display: 'flex' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', minWidth: 200 }}
      >
        <Tab label={t('myInformation.general.title')} {...a11yProps(0)} />
        <Tab label='subscriptions' {...a11yProps(1)} />
        <Tab label={t('accountStatus.title')} {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <MyInformation />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MySubscriptions />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AccountStatus />
      </TabPanel>
    </Box>
  )
}

export default AccountPage