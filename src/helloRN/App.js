/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {useState} from 'react';
import {FlatList, SectionList, StyleSheet} from 'react-native';
import {Button} from 'react-native';
import {Image, ScrollView, Text, TextInput, View} from 'react-native';
const App = () => {
  return (
    <ScrollView>
      <View>
        <Text>Some text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
};
// const Cat = props => {
//   return (
//     <View>
//       <Text>Hello, I am {props.name}</Text>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1,
//         }}
//         defaultValue="Name me!!"
//       />
//     </View>
//   );
// };

//12
const Cat = props => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? 'Hungry' : 'full'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(!isHungry);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, pls!' : 'Thank you!'}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <ScrollView>
      <Text>Welcome!</Text>
      <Cat name="Lee" />
      <Cat name="aaa" />
    </ScrollView>
  );
};

const CatApp = () => {
  return (
    <View>
      <Image
        source={{uri: 'https://reactnative.dev/docs/assets/p_cat1.png'}}
        style={{width: 200, height: 200}}
      />
      <Text>Hello, I am your cat!</Text>
    </View>
  );
};

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <View style={{height: 200}}></View>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Devin2'},
          {key: 'Devin3'},
          {key: 'Devin4'},
          {key: 'Devin5'},
          {key: 'Devin6'},
          {key: 'Devin7'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

const sectionStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'red',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const SectionListBasics = () => {
  return (
    <View style={sectionStyles.container}>
      <SectionList
        sections={[
          {title: 'D', data: ['Devin', 'Devin2', 'Devin3']},
          {title: 'J', data: ['Devin11', 'Devin22', 'Devin33']},
          {title: 'A', data: ['Devin111', 'Devin222', 'Devin333']},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

// class Cat extends Component {
//   render() {
//     const name = 'Maru';
//     return <Text>Hello, I am {name}!</Text>;
//   }
// }
// export default App;
export default SectionListBasics;
