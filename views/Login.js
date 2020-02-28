import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Header from '../components/Header';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="8BitFriends" />

      <Button
        title="Go to Discover"
        onPress={() => navigation.navigate('Discover')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Login;
