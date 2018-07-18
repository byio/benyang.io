import React from 'react';

import TextEditor from '../components/TextEditor';

const MESSAGE = {
  INTRO: "hi! i\'m a web developer."
};

export default () => (
  <TextEditor text={MESSAGE.INTRO} />
);
