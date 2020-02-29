import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from '../components/Header';
import ListOfUsers from '../components/ListOfUsers';
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
                  avatarUrl
                  location
                  repositories {
                    totalCount
                  }
                }
              }
            } 
          }`,
        },
        {
          headers: {
            Authorization: 'bearer 0e2f667534e89ae6ceb9bf4e40c433ae0adf9a8d',
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

      <ListOfUsers users={data} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Discover;
