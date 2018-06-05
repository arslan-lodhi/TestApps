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
import { MenuItem,HeaderContainer } from "./MenuStyle";
import { HeaderText } from "./MenuStyle";

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width/1.5,
    height: window.height,
    backgroundColor: 'gray'
  }
});

export default function Menu({ onItemSelected }) {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <HeaderContainer>
        <HeaderText>Explorer</HeaderText>
      </HeaderContainer>

      <MenuItem
        onPress={() => onItemSelected('Home')}
      >
        Home
      </MenuItem>

      <MenuItem
        onPress={() => onItemSelected('New Search')}
      >
        New Search
      </MenuItem>
      <MenuItem
        onPress={() => onItemSelected('Last Search')}
      >
        Last Search
      </MenuItem>
      <MenuItem
        onPress={() => onItemSelected('saved Searches')}
      >
        Saved Searches
      </MenuItem>
      <MenuItem
        onPress={() => onItemSelected('Favourites')}
      >
       Favourites
      </MenuItem>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};