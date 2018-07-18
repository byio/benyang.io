import React, { Component } from 'react';
import Typist from 'react-typist';

class TextEditor extends Component {
  render () {
    return (
      <div>
        <Typist>hello world</Typist>
      </div>
    );
  }
}

export default TextEditor;
