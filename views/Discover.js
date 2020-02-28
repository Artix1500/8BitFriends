import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Header';

const Discover = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="8BitFriends" logout={true} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Discover;
