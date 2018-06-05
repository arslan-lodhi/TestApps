import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 30,
    marginTop: 30,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

export default function Menu({ onItemSelected }) {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Text style={styles.name}>Explorer</Text>
      </View>

      <Text
        onPress={() => onItemSelected('Home')}
        style={styles.item}
      >
        Home
      </Text>

      <Text
        onPress={() => onItemSelected('New Search')}
        style={styles.item}
      >
        New Search
      </Text>
      <Text
        onPress={() => onItemSelected('Last Search')}
        style={styles.item}
      >
        Last Search
      </Text>
      <Text
        onPress={() => onItemSelected('saved Searches')}
        style={styles.item}
      >
        Saved Searches
      </Text>
      <Text
        onPress={() => onItemSelected('Favourites')}
        style={styles.item}
      >
       Favourites
      </Text>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};