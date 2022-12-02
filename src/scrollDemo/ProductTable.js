import {Image, StyleSheet, View} from 'react-native';

export default function ProductTable({config}) {
  //   products.forEach(element => {});
  const sty = styles();
  return (
    <View style={sty.container}>
      <ImageView isLeft={config.isLeft} />
      <ImageView isLeft={config.isLeft} />
      <ImageView isLeft={config.isLeft} />
      <ImageView isLeft={config.isLeft} />
      <ImageView isLeft={config.isLeft} />
      <ImageView isLeft={config.isLeft} />
      <ImageView isLeft={config.isLeft} />
      <ImageView isLeft={config.isLeft} />
      <ImageView isLeft={config.isLeft} />
      <ImageView isLeft={config.isLeft} />
      <ImageView isLeft={config.isLeft} />
      <ImageView isLeft={config.isLeft} />
      <ImageView isLeft={config.isLeft} />
      <ImageView isLeft={config.isLeft} />
      <ImageView isLeft={config.isLeft} />
      <ImageView isLeft={config.isLeft} />
    </View>
  );
}

function ImageView({isLeft}) {
  const sty = styles();
  console.log({isLeft});
  return (
    <Image
      style={isLeft ? sty.leftImage : sty.rightImage}
      source={isLeft ? sty.leftSource : sty.rightSource}
    />
  );
}

function styles() {
  return StyleSheet.create({
    container: {
      flexWrap: 'wrap',
      //   width: '50%',
      flex: 1,
      paddingRight: 10,
    },
    leftImage: {
      height: 70,
      width: '100%',
      marginBottom: 10,
    },
    leftSource: {
      uri: 'https://s2.loli.net/2022/06/20/uKiBLz5CtdZsQID.jpg',
    },
    rightImage: {
      height: 100,
      width: '100%',
      marginBottom: 10,
    },
    rightSource: {
      uri: 'https://i.loli.net/2020/05/01/gkihqEjXxJ5UZ1C.jpg',
    },
  });
}
