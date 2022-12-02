import {TextInput, View} from 'react-native';

export default function Search() {
  return (
    <TextInput
      style={{height: 30, borderWidth: 1, borderColor: 'black'}}
      placeholder="搜索..."></TextInput>
  );
}
