'use strict';

import React, {
    Component,
    Image,
    Navigator,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';

import assign from 'object-assign';

const Icon = require('react-native-vector-icons/FontAwesome');
const fileTextIcon = (<Icon name="file-text-o" size={20} color="#FFFFFF"></Icon>);

const AppView = React.createClass({
  render() {
    return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}
                      automaticallyAdjustContentInsets={true}>
            <View key="content" style={styles.content}>
              <View key="app" style={styles.app}>
                <View key="appRow-1" style={styles.appRowTopBorder}>
                  <View key="appCol-1" style={styles.appCol}>
                    <Icon name="heart" size={20} color="#FC6165" style={styles.appItemIcon2}/>
                    <Text key="1" style={styles.appItemText}>亲密付</Text>
                  </View>
                  <View key="appCol-2" style={styles.appCol}>
                    <Image source={require('../../../images/iconfont-gupiao.png')} style={styles.appItemIcon}/>
                    <Text key="1" style={styles.appItemText}>股票</Text>
                  </View>
                  <View key="appCol-3" style={styles.appCol}>
                    <Image source={require('../../../images/iconfont-chanpinfenleishijie.png')}
                           style={styles.appItemIcon}/>
                    <Text key="1" style={styles.appItemText}>世界那么大</Text>
                  </View>
                  <View key="appCol-4" style={styles.appCol}>
                    <Image source={require('../../../images/iconfont-tianmao.png')} style={styles.appItemIcon}/>
                    <Text key="1" style={styles.appItemText}>天猫</Text>
                  </View>
                </View>
                <View key="appRow-2" style={styles.appRow}>
                  <View key="appCol-1" style={styles.appCol}>
                    <Image source={require('../../../images/iconfont-yuebao.png')} style={styles.appItemIcon}/>
                    <Text key="1" style={styles.appItemText}>余额宝</Text>
                  </View>
                  <View key="appCol-2" style={styles.appCol}>
                    <Image source={require('../../../images/iconfont-kuaidi.png')} style={styles.appItemIcon}/>
                    <Text key="1" style={styles.appItemText}>我的快递</Text>
                  </View>
                  <View key="appCol-3" style={styles.appCol}>
                    <Image source={require('../../../images/iconfont-jipiao.png')} style={styles.appItemIcon}/>
                    <Text key="1" style={styles.appItemText}>机票火车票</Text>
                  </View>
                  <View key="appCol-4" style={styles.appCol}>
                    <Image source={require('../../../images/iconfont-juanzeng.png')} style={styles.appItemIcon}/>
                    <Text key="1" style={styles.appItemText}>爱心捐赠</Text>
                  </View>
                </View>

                <View key="appRow-3" style={styles.appRow}>
                  <View key="appCol-1" style={styles.appCol}>
                    <Image source={require('../../../images/iconfont-yangchengtongchongzhi.png')}
                           style={styles.appItemIcon}/>
                    <Text key="1" style={styles.appItemText}>羊城通充值</Text>
                  </View>
                  <View key="appCol-2" style={styles.appCol}>
                    <Image source={require('../../../images/iconfont-xiaoyuanyiqiatong.png')} style={styles.appItemIcon}/>
                    <Text key="1" style={styles.appItemText}>校园一卡通</Text>
                  </View>
                  <View key="appCol-3" style={styles.appCol}>
                    <Image source={require('../../../images/iconfont-jiaoyujiaofei.png')} style={styles.appItemIcon}/>
                    <Text key="1" style={styles.appItemText}>教育缴费</Text>
                  </View>
                  <View key="appCol-4" style={styles.appCol}>
                    <Image source={require('../../../images/iconfont-juanzeng.png')} style={styles.appItemIcon}/>
                    <Text key="1" style={styles.appItemText}>爱心捐赠</Text>
                  </View>
                </View>
                <View key="appRow-4" style={styles.appRow}>
                  <View key="appCol-1" style={styles.appCol}>
                    <Image source={require('../../../images/iconfont-caipiao.png')} style={styles.appItemIcon}/>
                    <Text key="1" style={styles.appItemText}>彩票</Text>
                  </View>
                  <View key="appCol-2" style={styles.appCol}>
                    <Image source={require('../../../images/iconfont-licaixiaogongju.png')} style={styles.appItemIcon}/>
                    <Text key="1" style={styles.appItemText}>理财小工具</Text>
                  </View>
                  <View key="appCol-3" style={styles.appCol}>

                  </View>
                  <View key="appCol-4" style={styles.appCol}>

                  </View>
                </View>
              </View>

            </View>
          </ScrollView>
        </View>
    );
  },

  goto(name, com) {
    console.log('goto', this);
    this.props.navigator.push({
      name: name,
      component: com,
    });
  },
});

const styles = StyleSheet.create(assign({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F9',
  },
  scrollContainer: {
    backgroundColor: '#F5F5F9',
    paddingBottom: 15,
    marginTop: -20,
  },
  content: {
    backgroundColor: '#F5F5F9',
    flex: 1,
  },
}, {
  app: {

  },
  appRow: {
    height: 75,
    flexDirection: 'row',
    backgroundColor: '#3F454F',
  },
  appRowTopBorder: {
    height: 75,
    flexDirection: 'row',
    backgroundColor: '#3F454F',
    borderTopWidth: 1,
    borderColor: '#E6E6E6',
  },
  appCol: {
    flex: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E6E6E6',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 15,
  },
  appItemIcon: {
    width: 24,
    height: 24,
  },
  appItemIcon2: {
    width: 24,
    height: 24,
    paddingTop: 2,
  },
  appItemText: {
    marginTop: 8,
    fontSize: 12
  },
  appItemTextMore: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ccc',
  },
}, {
  app: {
    marginTop: 84,
    paddingBottom: 50
  }
}));

export default AppView;