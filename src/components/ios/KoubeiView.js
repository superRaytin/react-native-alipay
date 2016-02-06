'use strict';

import React, {
    Component,
    Image,
    Text,
    View
} from 'react-native';

import styles from '../../styles';
import TopBar from './common/TopBar';

const MaterialIcons = require('react-native-vector-icons/MaterialIcons');
const Icon = require('react-native-vector-icons/FontAwesome');
const fileTextIcon = (<Icon name="file-text-o" size={20} color="#FFFFFF"></Icon>);
const locationIcon = (<MaterialIcons name="room" size={20} color="#FFFFFF"></MaterialIcons>);

class KoubeiView extends Component {
  render() {
    const city = (
        <Text key="topBarLocation" style={styles.topBarLocation}>{locationIcon}&nbsp;&nbsp;杭州</Text>
    );

    return (
        <View style={styles.container}>
          <TopBar leftBtn={city} />
          <View key="content" style={styles.content}>
            <Text key="1" style={styles.welcome}>
              口碑
            </Text>
          </View>
        </View>
    );
  }
}

export default KoubeiView;