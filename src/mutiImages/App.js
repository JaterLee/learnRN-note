import {Image, SafeAreaView, Text} from 'react-native';
import React from 'react';
export default function App() {
  const path = './icon.png';
  const staticImage = require(path);

  // alert(JSON.stringify(Image.resolveAssetSource(staticImage)));

  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <Text>静态图片</Text>
      <Image source={staticImage} style={{width: 100, height: 100}} />
      <Text>网络图片</Text>
      <Image
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={{width: 100, height: 100}}
      />
      <Text>宿主图片</Text>
      <Image source={{uri: 'app_icon.png'}} style={{width: 100, height: 100}} />
      <Text>base64图片</Text>
      <Image
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
        style={{width: 100, height: 100}}
      />
    </SafeAreaView>
  );
}
