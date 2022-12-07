import {SafeAreaView} from 'react-native';
import Info from './Info';
import Verify from './Verify';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, marginTop: -200, justifyContent: 'center'}}>
      <Info />
      <Verify />
    </SafeAreaView>
  );
}
