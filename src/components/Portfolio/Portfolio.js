import React, { Component } from 'react';

import SearchBox from '../SearchBox/SearchBox';
import CardList from '../CardList/CardList'
import { works } from '../../assets/works';

class Portfolio extends Component {
  constructor () {
    super();
    this.state = {
      works,
      searchText: ''
    };
  }

  onSearchChange = (event) => {
    this.setState({
      searchText: event.target.value
    });
  }

  render () {
    const filteredWorks = this.state.works.filter(work => {
      return work.keywords.includes(this.state.searchText.toLowerCase());
    });

    return (
      <div>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList works={filteredWorks} />
      </div>
    );
  }
}

export default Portfolio;
