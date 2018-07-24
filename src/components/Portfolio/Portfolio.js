import React, { Component } from 'react';

import SearchBox from '../SearchBox/SearchBox';
import CardList from '../CardList/CardList'
import { works } from '../../assets/works';

class Portfolio extends Component {
  render () {
    return (
      <div>
        <SearchBox />
        <CardList works={works} />
      </div>
    );
  }
}

export default Portfolio;
