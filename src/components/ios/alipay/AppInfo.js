'use strict';

import React, {
    Component,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';

import assign from 'object-assign';
import CommonStyles from '../../../styles/common';

const AppInfoView = React.createClass({
  render() {
    return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}
                      automaticallyAdjustContentInsets={true}>
            <View key="content" style={styles.content}>
              <View style={{alignItems: 'center', padding: 10}}>
                <Text>content of {this.props.route.title}</Text>
              </View>
            </View>
          </ScrollView>
        </View>
    );
  },
});

const styles = StyleSheet.create(assign(
    {},
    CommonStyles
));

export default AppInfoView;