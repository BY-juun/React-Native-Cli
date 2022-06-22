/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {WebView, WebViewNavigation} from 'react-native-webview';

const App = () => {
  const uri = 'https://engineeo.kr/';
  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: '100%'}}>
        <WebView
          source={{uri: 'https://engineeo.kr/'}}
          onLoad={() => console.log('helk')}
          onNavigationStateChange={(event: WebViewNavigation) => {
            if (!event.url.includes(uri)) {
              Linking.openURL(event.url);
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
