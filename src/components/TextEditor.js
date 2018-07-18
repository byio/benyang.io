import React, { Component } from 'react';
import Typist from 'react-typist';

class TextEditor extends Component {

  render () {
    return (
      <div>
        <Typist
          cursor={{
            hideWhenDone: true,
            hideWhenDoneDelay: 0
          }}
        >
          <span>> {this.props.text}</span>
        </Typist>
      </div>
    );
  }

}

export default TextEditor;
