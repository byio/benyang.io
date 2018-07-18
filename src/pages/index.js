import React from 'react';

import TextEditor from '../components/TextEditor';

const MESSAGES = [
  'hi! i\'m a web developer.',
  'i build fullstack apps with javascript.',
  'welcome to my digital abode.',
];

export default () => (
  <TextEditor text={MESSAGES} />
);
