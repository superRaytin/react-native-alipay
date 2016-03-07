'use strict';

import React, {
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
import AppList from './AppList';
import AppInfoView from './AppInfo';
import CommonStyles from '../../../styles/common';
import AppListStyles from '../../../styles/appList';

// 九宫格配置对象
const appListData = [
  [
    {
      title: '亲密付',
      icon: {
        name: 'heart',
        size: 20,
        color: '#FC6165',
      }
    },
    {
      title: '股票',
      image: {
        source: require('../../../images/iconfont-gupiao.png'),
      }
    },
    {
      title: '世界那么大',
      image: {
        source: require('../../../images/iconfont-chanpinfenleishijie.png'),
      }
    },
    {
      title: '天猫',
      image: {
        source: require('../../../images/iconfont-tianmao.png'),
      }
    },
  ],
  [
    {
      title: '余额宝',
      image: {
        source: require('../../../images/iconfont-yuebao.png'),
      }
    },
    {
      title: '我的快递',
      image: {
        source: require('../../../images/iconfont-kuaidi.png'),
      }
    },
    {
      title: '机票火车票',
      image: {
        source: require('../../../images/iconfont-jipiao.png'),
      }
    },
    {
      title: '爱心捐赠',
      image: {
        source: require('../../../images/iconfont-juanzeng.png'),
      }
    },
  ],
  [
    {
      title: '羊城通充值',
      image: {
        source: require('../../../images/iconfont-yangchengtongchongzhi.png'),
      }
    },
    {
      title: '校园一卡通',
      image: {
        source: require('../../../images/iconfont-xiaoyuanyiqiatong.png'),
      }
    },
    {
      title: '教育缴费',
      image: {
        source: require('../../../images/iconfont-jiaoyujiaofei.png'),
      }
    },
    {
      title: '爱心捐赠',
      image: {
        source: require('../../../images/iconfont-juanzeng.png'),
      }
    },
  ],
  [
    {
      title: '彩票',
      image: {
        source: require('../../../images/iconfont-caipiao.png'),
      }
    },
    {
      title: '理财小工具',
      image: {
        source: require('../../../images/iconfont-licaixiaogongju.png'),
      }
    },
    {

    },
    {

    }
  ]
];

const AppMoreView = React.createClass({
  handleAppClick(appInfo) {
    this.navigatorPush('app', appInfo.title, AppInfoView, appInfo.options);
  },

  render() {
    return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainerApp}
                      automaticallyAdjustContentInsets={true}>
            <View key="content" style={styles.content}>
              <View key="app" style={styles.app}>
                <AppList styles={styles}
                         data={appListData}
                         topBorder={false}
                         onAppPress={this.handleAppClick} />
              </View>
            </View>
          </ScrollView>
        </View>
    );
  },

  navigatorPush(name, title, component, options = {}) {
    this.props.navigator.push(assign({
      title: title,
      name: name,
      component: component,
    }, options));
  },
});

const styles = StyleSheet.create(assign(
    {},
    CommonStyles,
    AppListStyles,
    {
      app: {
        marginTop: 84,
        paddingBottom: 50
      }
    }
));

export default AppMoreView;
