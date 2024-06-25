import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 346,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} className="joblist-Desktop">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Freight Hub Group" {...a11yProps(0)} />
        <Tab label="Upwork" {...a11yProps(1)} />
      </Tabs>
      <TabPanel className="tab-info" value={value} index={0}>
        <div className="experience__job--description"> 
            <h3>Web Designer / Content Creator at</h3><h3 className="highlight">Freight Hub Group</h3>
            <h4>October 2019 - May 2021</h4>
            <ul>
            <li className="job--description__list">While working for Freight Hub Group ( https://gofreighthub.io/ ) I had the responsibility of overseeing over 9 websites, all on the WordPress platform.</li>
                <li className="job--description__list">I had the key role of creating many of the conversion and sales funnel pages for different departments of the company as well as revamping custom-written websites, planning and implementing new features, delivering new websites, optimization, and graphic design. </li>
            </ul>
        </div>
      </TabPanel>
      <TabPanel className="tab-info" value={value} index={1}>
        <div className="experience__job--description"> 
            <h3>Web Designer/Developer & Graphic Designer at</h3><h3 className="highlight">Upwork</h3>
            <h4>August 2021 - Present</h4>
            <ul>
            <li className="job--description__list">Discussing requirements with clients, making website development proposals, designing page layout, working with content management systems, making sure work follows the client’s branding policy, writing code, designing logos, illustrations, graphics and more.</li>
            </ul>
        </div>
      </TabPanel>
      {/* <TabPanel className="tab-info" value={value} index={1}>
        Item Two
      </TabPanel> */}
    </div>
  );
}