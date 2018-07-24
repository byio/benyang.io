import React from 'react';

import TextEditor from '../components/TextEditor/TextEditor';
import GooeyNav from '../components/GooeyNav/GooeyNav';
import BottomNav from '../components/BottomNav/BottomNav';
import CardList from '../components/CardList/CardList';
import Portfolio from '../components/Portfolio/Portfolio';
import intro from '../assets/intro.js';
import { works } from '../assets/works';

export default () => (
  <div>
    <TextEditor text={intro} />
    <GooeyNav />
    <Portfolio />
    <CardList works={works} />
    <BottomNav />
  </div>
);
