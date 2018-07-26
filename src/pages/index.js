import React from 'react';

import TextEditor from '../components/TextEditor/TextEditor';
import BottomNav from '../components/BottomNav/BottomNav';
import CardList from '../components/CardList/CardList';
import Portfolio from '../components/Portfolio/Portfolio';
import intro from '../assets/intro.js';

export default () => (
  <div>
    <TextEditor text={intro} />
    <Portfolio />
    <BottomNav />
  </div>
);
