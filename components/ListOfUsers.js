import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';

const ListOfUsers = ({users}) => {
  return (
    <View>
      {users.map((user, i) => (
        <ListItem key={i} title={user.login} />
      ))}
    </View>
  );
};

ListOfUsers.defaultProps = {
  users: [],
};

const styles = StyleSheet.create({});

export default ListOfUsers;
