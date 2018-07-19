import React, { Component } from 'react';
import Typist from 'react-typist';

import styles from './TextEditor.module.css';

class TextEditor extends Component {

  parseText = (props) => {
    return props.map(line => {
      return <p key={line} style={{color:'#fffafa'}}>> {line}
      </p>
    });
  }

  render () {
    return (
      <div className={styles.texteditor}>
        <Typist
          avgTypingDelay={90}
          stdTypingDelay={50}
          cursor={{
            show: false,
          }}
        >
          {this.parseText(this.props.text)}
        </Typist>
      </div>
    );
  }

}

export default TextEditor;
