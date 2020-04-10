import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Header = ({title, logout, navigation}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      {logout ? (
        <Button
          style={styles.logout}
          color="white"
          title="Logout"
          onPress={() => navigation.navigate('Login')}
        />
      ) : (
        <React.Fragment />
      )}
    </View>
  );
};

Header.defaultProps = {
  title: '8BitFriends',
  logout: false,
  navigation: null,
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 65,
    padding: 15,
    backgroundColor: 'indigo',
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
  logout: {
    color: 'white',
    fontSize: 12,
    textAlign: 'left',
  },
});

export default Header;
