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

const AppInfoView = React.createClass({
  render() {
    return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainerNormal}
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

const styles = StyleSheet.create(assign({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F9',
  },
  scrollContainerNormal: {
    backgroundColor: '#F5F5F9',
    paddingBottom: 15,
    marginTop: 64,
  },
  content: {
    backgroundColor: '#F5F5F9',
    flex: 1,
  },
}, {

}));

export default AppInfoView;