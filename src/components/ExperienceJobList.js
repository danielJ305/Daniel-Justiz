import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Freight Hub Group" {...a11yProps(0)} />
        {/* <Tab label="N/A" {...a11yProps(1)} /> */}
      </Tabs>
      <TabPanel className="tab-info" value={value} index={0}>
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
      {/* <TabPanel className="tab-info" value={value} index={1}>
        Item Two
      </TabPanel> */}
    </div>
  );
}