import React from 'react';
import { StyleSheet, View } from 'react-native';

const Chessboard = () => {
  const renderRow = (startWithBlack) => {
    const row = [];

    for (let i = 0; i < 8; i++) {
      const isBlack = (startWithBlack && i % 2 === 0) || (!startWithBlack && i % 2 !== 0);
      const squareColor = isBlack ? 'black' : 'lightgrey';

      row.push(
        <View key={i} style={[styles.square, { backgroundColor: squareColor }]} />
      );
    }

    return row;
  }

  const renderBoard = () => {
    const board = [];

    for (let i = 0; i < 8; i++) {
      const startWithBlack = i % 2 === 0;
      board.push(
        <View key={i} style={styles.row}>
          {renderRow(startWithBlack)}
        </View>
      );
    }

    return board;
  }

  return (
    <View style={styles.container}>
      <View style={styles.board}>{renderBoard()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  board: {
    width: 300,
    height: 300,
    flexDirection: 'column'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  square: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#2b2d42'
  }
});

export default Chessboard;
