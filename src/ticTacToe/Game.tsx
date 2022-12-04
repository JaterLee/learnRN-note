import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function Game() {
  const [squareArr, setSquareArr] = useState(Array(9).fill(null));
  const [nextIsX, setNextIsX] = useState(false);

  function onClick(index: number, isReset?: boolean) {
    if (!isReset && squareArr[index] !== null) {
      return;
    }
    let newSquareArr = [...squareArr];
    if (isReset) {
      newSquareArr = Array(9).fill(null);
    } else {
      for (let index_1 = 0; index_1 < newSquareArr.length; index_1++) {
        if (index_1 === index && !isReset) {
          newSquareArr[index] = nextIsX ? 'X' : 'O';
        }
      }
    }
    setSquareArr(newSquareArr);
    setNextIsX(isReset ? false : !nextIsX);
    if (!isReset) {
    }
  }

  useEffect(() => {
    checkResult();
  });

  function checkResult() {
    const winCondition = [
      [0, 1, 2],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8],
    ];

    winCondition.forEach(e => {
      const [a, b, c] = e;
      if (
        squareArr[a] &&
        squareArr[a] === squareArr[b] &&
        squareArr[a] === squareArr[c]
      ) {
        const tip = '获胜者是' + squareArr[a];
        Alert.alert('恭喜', tip, [
          {
            text: '再来一局',
            onPress: () => {
              onClick(0, true);
            },
          },
        ]);
        return squareArr[a];
      }
    });
    return null;
  }

  return (
    <View style={{alignItems: 'center', marginTop: 50}}>
      <Text style={{fontSize: 20, marginBottom: 20}}>
        轮到{nextIsX ? 'X' : 'O'}方持子
      </Text>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={styles.container}>
        {squareArr.map((e, index) => (
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={styles.squareContainer}
            onStartShouldSetResponder={() => {
              onClick(index);
              return true;
            }}
            key={index}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 40,
              }}>
              {e}
            </Text>
          </View>
        ))}
      </View>
      <View style={{flexDirection: 'row', height: 50}}>
        <Button
          title="再来一局"
          onPress={() => {
            onClick(0, true);
          }}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 300,
    height: 300,
    borderColor: 'black',
    // borderWidth: 1,
    alignSelf: 'center',
    flexWrap: 'wrap',
  },
  squareContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
});
