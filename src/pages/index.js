import React from 'react';

import TextEditor from '../components/TextEditor/TextEditor';
import GooeyNav from '../components/GooeyNav/GooeyNav';
import BottomNav from '../components/BottomNav/BottomNav';
import Card from '../components/Card/Card';
import intro from '../assets/intro.js';

export default () => (
  <div>
    <TextEditor text={intro} />
    <GooeyNav />
    <Card />
    <BottomNav />
  </div>
);
