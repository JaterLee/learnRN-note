import {useRef} from 'react';
import {Text, TextInput, View} from 'react-native';

export default function Info() {
  const ref1 = useRef<TextInput>(null);
  const ref2 = useRef<TextInput>(null);
  const ref3 = useRef<TextInput>(null);
  return (
    <View style={{margin: 12}}>
      <View style={{flexDirection: 'row', marginBottom: 6}}>
        <Text>number-pad:</Text>
        <TextInput
          style={{flex: 1, borderBottomWidth: 1, marginHorizontal: 12}}
          keyboardType="number-pad"
          returnKeyType="done"
          onSubmitEditing={() => {
            ref1.current?.focus();
          }}></TextInput>
      </View>
      <View style={{flexDirection: 'row', marginBottom: 6}}>
        <Text>email-address:</Text>
        <TextInput
          ref={ref1}
          keyboardType="email-address"
          style={{flex: 1, borderBottomWidth: 1, marginHorizontal: 12}}
          onSubmitEditing={() => {
            ref2.current?.focus();
          }}></TextInput>
      </View>
      <View style={{flexDirection: 'row', marginBottom: 6}}>
        <Text>phone-pad:</Text>
        <TextInput
          ref={ref2}
          keyboardType="phone-pad"
          returnKeyType="done"
          style={{flex: 1, borderBottomWidth: 1, marginHorizontal: 12}}
          onSubmitEditing={() => {
            ref3.current?.focus();
          }}></TextInput>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>desc:</Text>
        <TextInput
          ref={ref3}
          keyboardType="default"
          style={{
            flex: 1,
            borderBottomWidth: 1,
            marginHorizontal: 12,
          }}></TextInput>
      </View>
    </View>
  );
}
