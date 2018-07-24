import React from 'react';

import TextEditor from '../components/TextEditor/TextEditor';
import GooeyNav from '../components/GooeyNav/GooeyNav';
import BottomNav from '../components/BottomNav/BottomNav';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox/SearchBox';
import intro from '../assets/intro.js';
import { works } from '../assets/works';

export default () => (
  <div>
    <TextEditor text={intro} />
    <GooeyNav />
    <SearchBox />
    <CardList works={works} />
    <BottomNav />
  </div>
);
