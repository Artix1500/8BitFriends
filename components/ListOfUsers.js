import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';

const ListOfUsers = ({users}) => {
  return (
    <View>
      {users.map((user, i) => (
        <ListItem
          key={i}
          leftAvatar={{source: {uri: user.avatarUrl}}}
          title={user.login}
          subtitle={user.name}
          rightTitle={`Repositories: ${
            user.repositories ? user.repositories.totalCount : 0
          }`}
          rightTitleStyle={styles.rightTitle}
        />
      ))}
    </View>
  );
};

ListOfUsers.defaultProps = {
  users: [],
};

const styles = StyleSheet.create({
  rightTitle: {fontSize: 12},
});

export default ListOfUsers;
