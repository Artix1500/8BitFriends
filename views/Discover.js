import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import {SearchBar} from 'react-native-elements';

const Discover = ({navigation}) => {
  let [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <Header title="8BitFriends" logout={true} navigation={navigation} />

      <SearchBar
        lightTheme={true}
        placeholder="Type Here..."
        onChangeText={value => setSearch(value)}
        value={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Discover;
