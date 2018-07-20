import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import AboutIcon from '@material-ui/icons/PersonPin';
import ContactIcon from '@material-ui/icons/RingVolume';

const styles = {
  root: {
    backgroundColor: '#000000',
  }
};

class BottomNav extends Component {
  constructor () {
    super ();
    this.state = {
      value: 'home'
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render () {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={ value }
        onChange={this.handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Works"
          value="works"
          icon={<WorkIcon />}
        />
        <BottomNavigationAction
          label="About"
          value="about"
          icon={<AboutIcon />}
        />
        <BottomNavigationAction
          label="Contact"
          value="contact"
          icon={<ContactIcon />}
        />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(BottomNav);
