import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import Header from '../components/Header';
import {Avatar} from 'react-native-elements';

const Login = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Header title="8BitFriends" />

      <View style={styles.userView}>
        <Avatar
          rounded
          size="xlarge"
          title={route.params.user.login}
          source={{
            uri: route.params.user.avatarUrl,
          }}
        />
        <Text style={styles.smallFont}>login:</Text>
        <Text style={styles.bigFont}>{route.params.user.login}</Text>
        <Text style={styles.smallFont}>name:</Text>
        <Text style={styles.bigFont}>{route.params.user.name}</Text>
        <Text style={styles.smallFont}>location:</Text>
        <Text style={styles.bigFont}>{route.params.user.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userView: {
    paddingTop: 30,
    alignItems: 'center',
  },
  smallFont: {
    marginTop: 20,
    fontSize: 12,
    color: 'grey',
  },
  bigFont: {
    fontSize: 20,
  },
});

export default Login;
