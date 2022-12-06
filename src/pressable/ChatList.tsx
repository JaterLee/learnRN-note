import {Image, ScrollView, Text, View} from 'react-native';

interface ChatModel {
  avatar: string;
  nickname: string;
  desc: string;
}

export default function ChatList() {
  let tempArr = [];
  for (let index = 0; index < 15; index++) {
    let model = {} as ChatModel;
    model.avatar = 'https://reactjs.org/logo-og.png';
    model.nickname = 'robort-No' + index;
    model.desc = 'what can do for u';
    tempArr.push(model);
  }

  return (
    <ScrollView>
      {tempArr.map(e => (
        <View
          style={{
            flexDirection: 'row',
            height: 60,
            width: '100%',
          }}>
          <Image
            source={{uri: e.avatar}}
            style={{width: 50, height: 50, borderRadius: 5, marginLeft: 10}}
          />
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={{marginTop: 2}}>{e.nickname}</Text>
            <Text style={{marginTop: 10, color: 'gray'}}>{e.desc}</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              marginRight: 12,
            }}>
            <Text style={{color: 'gray', marginTop: 5}}>10:00</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
