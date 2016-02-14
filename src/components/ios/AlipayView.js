'use strict';

import React, {
    Component,
    Image,
    ScrollView,
    Text,
    View
} from 'react-native';

import assign from 'object-assign';
import TopBar from './common/TopBar';
import styles from '../../styles';

const Icon = require('react-native-vector-icons/FontAwesome');
const fileTextIcon = (<Icon name="file-text-o" size={20} color="#FFFFFF"></Icon>);

class AlipayView extends Component {
  render() {
    const bill = (
        <Text key="topBarBill" style={styles.topBarBill}>{fileTextIcon}&nbsp;&nbsp;账单</Text>
    );

    return (
        <View style={styles.container}>
          <TopBar leftBtn={bill} />
          <View key="quickEntry" style={styles.quickEntry}>
            <View key="scan" style={styles.quickEntryItem}>
              <Image source={require('../../images/iconfont-scan.png')} style={styles.quickEntryItemIcon} />
              <Text key="scan" style={styles.quickEntryItemText}>扫一扫</Text>
            </View>
            <View key="pay" style={styles.quickEntryItem}>
              <Image source={require('../../images/iconfont-paycode.png')} style={styles.quickEntryItemIcon} />
              <Text key="pay" style={styles.quickEntryItemText}>付款</Text>
            </View>
            <View key="discount" style={styles.quickEntryItem}>
              <Image source={require('../../images/iconfont-discount.png')} style={styles.quickEntryItemIcon} />
              <Text key="discount" style={styles.quickEntryItemText}>卡券</Text>
            </View>
            <View key="xiu" style={styles.quickEntryItem}>
              <Image source={require('../../images/iconfont-dangmianfu-yellow.png')} style={styles.quickEntryItemIcon} />
              <Text key="xiu" style={styles.quickEntryItemTextYellow}>咻一咻</Text>
            </View>
          </View>
          <ScrollView contentContainerStyle={styles.scrollContainer}
                      automaticallyAdjustContentInsets={true}>
            <View key="content" style={styles.content}>
              <View key="app" style={styles.app}>
                <View key="appRow-1" style={styles.appRow}>
                  <View key="appCol-1" style={styles.appCol}>
                    <Icon name="credit-card-alt" size={20} color="#FFB44F" style={styles.appItemIcon2} />
                    <Text key="credit-card" style={styles.appItemText}>信用卡还款</Text>
                  </View>
                  <View key="appCol-2" style={styles.appCol}>
                    <Icon name="envelope" size={20} color="#FC6165" style={styles.appItemIcon2} />
                    <Text key="1" style={styles.appItemText}>红包</Text>
                  </View>
                  <View key="appCol-3" style={styles.appCol}>
                    <Image source={require('../../images/iconfont-zhuanzhang.png')} style={styles.appItemIcon} />
                    <Text key="1" style={styles.appItemText}>转账</Text>
                  </View>
                  <View key="appCol-4" style={styles.appCol}>
                    <Image source={require('../../images/iconfont-shoujichongzhi.png')} style={styles.appItemIcon} />
                    <Text key="1" style={styles.appItemText}>手机充值</Text>
                  </View>
                </View>
                <View key="appRow-2" style={styles.appRow}>
                  <View key="appCol-1" style={styles.appCol}>
                    <Image source={require('../../images/iconfont-koubeilogo.png')} style={styles.appItemIcon} />
                    <Text key="1" style={styles.appItemText}>口碑外卖</Text>
                  </View>
                  <View key="appCol-2" style={styles.appCol}>
                    <Image source={require('../../images/iconfont-zhimaxinyong.png')} style={styles.appItemIcon} />
                    <Text key="1" style={styles.appItemText}>芝麻信用</Text>
                  </View>
                  <View key="appCol-3" style={styles.appCol}>
                    <Image source={require('../../images/iconfont-taobao.png')} style={styles.appItemIcon} />
                    <Text key="1" style={styles.appItemText}>淘宝</Text>
                  </View>
                  <View key="appCol-4" style={styles.appCol}>
                    <Image source={require('../../images/iconfont-chuxing.png')} style={styles.appItemIcon} />
                    <Text key="1" style={styles.appItemText}>滴滴出行</Text>
                  </View>
                </View>
                <View key="appRow-3" style={styles.appRow}>
                  <View key="appCol-1" style={styles.appCol}>
                    <Image source={require('../../images/iconfont-taobaodianying.png')} style={styles.appItemIcon} />
                    <Text key="1" style={styles.appItemText}>淘宝电影</Text>
                  </View>
                  <View key="appCol-2" style={styles.appCol}>
                    <Image source={require('../../images/iconfont-mayijubao-copy.png')} style={styles.appItemIcon} />
                    <Text key="1" style={styles.appItemText}>蚂蚁聚宝</Text>
                  </View>
                  <View key="appCol-3" style={styles.appCol}>
                    <Image source={require('../../images/iconfont-huabei.png')} style={styles.appItemIcon} />
                    <Text key="1" style={styles.appItemText}>蚂蚁花呗</Text>
                  </View>
                  <View key="appCol-4" style={styles.appCol}>
                    <Image source={require('../../images/iconfont-fuwuchuang.png')} style={styles.appItemIcon} />
                    <Text key="1" style={styles.appItemText}>服务窗</Text>
                  </View>
                </View>
              </View>

              <View key="banner" style={styles.banner}>
                <Image source={require('../../images/banner.png')} style={styles.bannerImage} />
              </View>

              <View key="app2" style={styles.app}>
                <View key="appRow-1" style={styles.appRowTopBorder}>
                  <View key="appCol-1" style={styles.appCol}>
                    <Icon name="heart" size={20} color="#FC6165" style={styles.appItemIcon2} />
                    <Text key="1" style={styles.appItemText}>亲密付</Text>
                  </View>
                  <View key="appCol-2" style={styles.appCol}>
                    <Image source={require('../../images/iconfont-gupiao.png')} style={styles.appItemIcon} />
                    <Text key="1" style={styles.appItemText}>股票</Text>
                  </View>
                  <View key="appCol-3" style={styles.appCol}>
                    <Image source={require('../../images/iconfont-chanpinfenleishijie.png')} style={styles.appItemIcon} />
                    <Text key="1" style={styles.appItemText}>世界那么大</Text>
                  </View>
                  <View key="appCol-4" style={styles.appCol}>
                    <Image source={require('../../images/iconfont-tianmao.png')} style={styles.appItemIcon} />
                    <Text key="1" style={styles.appItemText}>天猫</Text>
                  </View>
                </View>
                <View key="appRow-2" style={styles.appRow}>
                  <View key="appCol-1" style={styles.appCol}>
                    <Image source={require('../../images/iconfont-yuebao.png')} style={styles.appItemIcon} />
                    <Text key="1" style={styles.appItemText}>余额宝</Text>
                  </View>
                  <View key="appCol-2" style={styles.appCol}>
                    <Image source={require('../../images/iconfont-kuaidi.png')} style={styles.appItemIcon} />
                    <Text key="1" style={styles.appItemText}>我的快递</Text>
                  </View>
                  <View key="appCol-3" style={styles.appCol}>
                    <Image source={require('../../images/iconfont-jipiao.png')} style={styles.appItemIcon} />
                    <Text key="1" style={styles.appItemText}>机票火车票</Text>
                  </View>
                  <View key="appCol-4" style={styles.appCol}>
                    <Image source={require('../../images/iconfont-juanzeng.png')} style={styles.appItemIcon} />
                    <Text key="1" style={styles.appItemText}>爱心捐赠</Text>
                  </View>
                </View>
              </View>

            </View>
          </ScrollView>
        </View>
    );
  }
}

export default AlipayView;