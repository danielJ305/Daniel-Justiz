import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} className="joblist-Mobile">
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <TabPanel className="Freight Hub Group" value={value} index={0}>
        <div className="experience__job--description"> 
            <h3>Web Designer / Content Creator at</h3><h3>Freight Hub Group</h3>
            <h4>October 2019 - Present</h4>
            <ul>
                <li className="job--description__list">My daily tasks vary depending on the monthly goal.</li>
                <li className="job--description__list">Labor ranges from revamping custom written websites,
                making new pages using builders such as WP-Bakery or Elementor
                and Optimizing pages for optimal loadability on all devices.</li>
                <li className="job--description__list">I am proffecient at graphic design and I use my skills to build their graphics,
                banners, emails, catalogs, pdf's and more.</li>
            </ul>
        </div>
      </TabPanel>
    </div>
  );
}
