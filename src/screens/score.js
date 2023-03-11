import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

class Score extends Component {
  render() {
    return (
      <WebView
        source={{
          //this is url of website
          uri: 'https://cricbuzz.com',
        }}
        style={{marginTop: 20}}
      />
    );
  }
}
export default Score