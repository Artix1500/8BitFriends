import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from '../components/Header';
import {SearchBar} from 'react-native-elements';
import axios from 'axios';

const Discover = ({navigation}) => {
  let [search, setSearch] = useState('');
  let [data, setData] = useState([]);

  const handleSearch = async value => {
    setSearch(value);

    // search
    try {
      let res = await axios.post(
        'https://api.github.com/graphql',
        {
          query: `query { 
            search(first: 10, query: "${value}", type: USER){
              userCount
              nodes{
                __typename
                ... on User {
                  name
                  login
                }
              }
            } 
          }`,
        },
        {
          headers: {
            Authorization: 'bearer 388067e911d6699f259e055b71824dd01e0157f0',
          },
        },
      );
      setData(res.data.data.search.nodes);
    } catch (error) {
      console.log('ERROR');
    }
  };
  return (
    <View style={styles.container}>
      <Header title="8BitFriends" logout={true} navigation={navigation} />

      <SearchBar
        lightTheme={true}
        placeholder="Type Here..."
        onChangeText={handleSearch}
        value={search}
      />

      <Text>debug search: {search}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Discover;
