'use strict';

import React, {
    Component,
    Image,
    Text,
    View
} from 'react-native';

import styles from '../../../styles';

const MaterialIcons = require('react-native-vector-icons/MaterialIcons');
const Icon = require('react-native-vector-icons/FontAwesome');
const angleLeftIcon = (<Icon name="angle-left" size={20} color="#FFFFFF"></Icon>);
const personIcon = (<MaterialIcons name="person-outline" size={24} color="#FFFFFF"></MaterialIcons>);
const searchIcon = (<MaterialIcons name="search" size={24} color="#FFFFFF"></MaterialIcons>);
const addIcon = (<MaterialIcons name="add" size={24} color="#FFFFFF"></MaterialIcons>);

class TopBar extends Component {
  render() {
    return (
        <View key="topBar" style={styles.topBar}>
          {
            this.props.leftBtn ?
              this.props.leftBtn : null
          }

          <View key="topBarOptions" style={styles.topBarOptions}>
            <View>
              <Text key="topBarIcon" style={styles.topBarIcon}>{personIcon}&nbsp;&nbsp;{searchIcon}&nbsp;&nbsp;{addIcon}</Text>
            </View>
          </View>
        </View>
    );
  }
}

export default TopBar;