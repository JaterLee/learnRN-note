import {useState} from 'react';
import {Alert, Button, Keyboard, Text, TextInput, View} from 'react-native';

export default function Verify() {
  const [text, setText] = useState('');

  const pinText = text.replace(/\D/g, '').slice(0, 6).padEnd(6, '-');

  return (
    <View style={{alignItems: 'center'}}>
      <Text>输入发送至</Text>
      <Text>+86 ■■■■■■■■■■■ 的验证码：</Text>
      <View
        style={{
          marginTop: 50,
          flexDirection: 'row',
          //   backgroundColor: 'yellow',
        }}>
        <Text
          style={{
            fontSize: 45,
            letterSpacing: 10,
            marginHorizontal: 'auto',
          }}>
          {pinText}
        </Text>
        <TextInput
          value={text}
          style={{
            opacity: 0,
            position: 'absolute',
            // backgroundColor: 'red',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          keyboardType="number-pad"
          returnKeyType="next"
          maxLength={6}
          caretHidden={true}
          onChangeText={setText}
          onBlur={() => Keyboard.dismiss()}></TextInput>
      </View>
      <View style={{marginTop: 30}}>
        <Button
          title="发送新验证码"
          onPress={() => {
            Alert.alert('已发送');
          }}></Button>
      </View>
    </View>
  );
}
