import React from 'react';

import TextEditor from '../components/TextEditor/TextEditor';
import GooeyNav from '../components/GooeyNav/GooeyNav';
import intro from '../assets/intro.js';

export default () => (
  <div>
    <TextEditor text={intro} />
    <GooeyNav />
  </div>
);
