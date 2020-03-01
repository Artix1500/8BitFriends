import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from '../components/Header';
import ListOfUsers from '../components/ListOfUsers';
import {SearchBar} from 'react-native-elements';
import axios from 'axios';
import {OAuthKey} from 'react-native-dotenv';

// const Discover = ({navigation}) =>
class Discover extends React.Component {
  state = {
    search: {value: '', timestamp: new Date()},
    data: [],
  };

  handleSearch = async value => {
    let timestamp = new Date();
    this.setState({search: {value: value, timestamp: timestamp}});

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
            Authorization: `bearer ${OAuthKey}`,
          },
        },
      );
      if (timestamp - this.state.search.timestamp >= 0) {
        this.setState({data: res.data.data.search.nodes});
      }
    } catch (error) {
      console.log('ERROR');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Header
          title="8BitFriends"
          logout={true}
          navigation={this.props.navigation}
        />

        <SearchBar
          lightTheme={true}
          placeholder="Type Here..."
          onChangeText={this.handleSearch}
          value={this.state.search.value}
        />

        <ListOfUsers
          users={this.state.data}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Discover;
