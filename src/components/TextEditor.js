import React, { Component } from 'react';
import Typist from 'react-typist';

class TextEditor extends Component {

  parseText = (props) => {
    return props.map(line => {
      return <p>> {line}</p>
    });
  }

  render () {
    return (
      <div>
        <Typist
          cursor={{
            hideWhenDone: true,
            hideWhenDoneDelay: 0
          }}
        >
          {this.parseText(this.props.text)}
        </Typist>
      </div>
    );
  }

}

export default TextEditor;
