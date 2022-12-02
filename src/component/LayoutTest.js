import {Image, Text, View} from 'react-native';

export default function LayoutTest() {
  return (
    <View>
      <View>
        <View style={{height: 50, backgroundColor: 'powderblue'}}></View>
        <View style={{height: 50, backgroundColor: 'red'}}></View>
        <View style={{height: 50, backgroundColor: 'yellow'}}></View>
      </View>
      <View style={{height: 50, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}></View>
        <View style={{flex: 1, backgroundColor: 'red'}}></View>
        <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: 'https://codetop.cc/logo.jpg',
          }}
        />
        <Text style={{flex: 1, fontSize: 18}}>我是文字1</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 60,
          borderWidth: 1,
        }}>
        <Text
          style={{
            fontSize: 18,
            includeFontPadding: false,
            textAlignVertical: 'center',
          }}>
          我是文字111
        </Text>
      </View>
    </View>
  );
}
