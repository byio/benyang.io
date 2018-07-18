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
          avgTypingDelay={90}
          stdTypingDelay={75}
          cursor={{
            hideWhenDone: false,
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
