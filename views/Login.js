import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Header from '../components/Header';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="8BitFriends" />

      <View style={styles.buttonView}>
        <Button
          title="Sign in"
          onPress={() => navigation.navigate('Discover')}
        />
      </View>

      <View style={styles.buttonView}>
        <Button
          title="Sign up"
          onPress={() => navigation.navigate('Discover')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonView: {
    paddingTop: 30,
  },
});

export default Login;
