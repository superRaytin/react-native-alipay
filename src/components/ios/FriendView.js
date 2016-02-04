'use strict';

import React, {
    Component,
    Image,
    Text,
    View
} from 'react-native';

import styles from '../../styles';
import TopBar from './common/TopBar';

var Icon = require('react-native-vector-icons/FontAwesome');

class KoubeiView extends Component {
  render() {
    return (
        <View style={styles.container}>
          <TopBar />
          <View key="content" style={styles.content}>
            <Text key="1" style={styles.welcome}>
              朋友
            </Text>
          </View>
        </View>
    );
  }
}

export default KoubeiView;