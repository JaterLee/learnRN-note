import {SafeAreaView, TextInput, View} from 'react-native';
import ChatList from './ChatList';
import Navbar from './Navbar';

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: '#f4f4f4'}}>
      <Navbar />
      <View
        style={{
          height: 40,
          margin: 10,
          backgroundColor: 'white',
          justifyContent: 'center',
          borderRadius: 5,
        }}>
        <TextInput placeholder="搜索"></TextInput>
      </View>
      <ChatList />
    </SafeAreaView>
  );
}
