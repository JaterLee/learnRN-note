import {Image, ScrollView, Text, View} from 'react-native';

interface ChatModel {
  avatar: string;
  nickname: string;
  desc: string;
}

export default function ChatList() {
  let tempArr = [];
  for (let index = 0; index < 20; index++) {
    let model = {} as ChatModel;
    model.avatar = 'https://reactjs.org/logo-og.png';
    model.nickname = 'robort-No' + index;
    model.desc = 'what can do for u';
    tempArr.push(model);
  }

  return (
    <ScrollView style={{height: '100%', width: '100%'}}>
      {tempArr.map(e => (
        <View style={{flexDirection: 'row', height: 60, width: '100%'}}>
          <Image
            source={{uri: e.avatar}}
            style={{width: 50, height: 50, borderRadius: 5}}
          />
          <View>
            <Text>{e.nickname}</Text>
            <Text>{e.desc}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
