import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Header';

const Discover = () => {
  return (
    <View style={styles.container}>
      <Header title="8BitFriends" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Discover;
