'use strict';

import React, {
    Component,
    Image,
    Navigator,
    ScrollView,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';

import assign from 'object-assign';
import TopBar from './../common/TopBar';
import styles from '../../../styles';
import AppMoreView from './AppMore';
import AppInfoView from './AppInfo';

const Icon = require('react-native-vector-icons/FontAwesome');
const MaterialIcons = require('react-native-vector-icons/MaterialIcons');
const angleLeftIcon = (<Icon name="angle-left" size={20} color="#FFFFFF"></Icon>);
const fileTextIcon = (<Icon name="file-text-o" size={20} color="#FFFFFF"></Icon>);
const personIcon = (<MaterialIcons name="person-outline" size={24} color="#FFFFFF"></MaterialIcons>);
const searchIcon = (<MaterialIcons name="search" size={24} color="#FFFFFF"></MaterialIcons>);
const addIcon = (<MaterialIcons name="add" size={24} color="#FFFFFF"></MaterialIcons>);

// 九宫格配置对象
const appListData = [
    [
      {
        title: '信用卡还款',
        icon: {
          name: 'credit-card-alt',
          size: 20,
          color: '#FFB44F',
        }
      },
      {
        title: '红包',
        icon: {
          name: 'envelope',
          size: 20,
          color: '#FC6165',
        },
        options: {
          RightButton: <Text style={{color: '#fff', fontSize: 14, marginTop: 5}}>我的红包</Text>
        }
      },
      {
        title: '转账',
        image: {
          source: require('../../../images/iconfont-zhuanzhang.png'),
        }
      },
      {
        title: '手机充值',
        image: {
          source: require('../../../images/iconfont-shoujichongzhi.png'),
        }
      },
    ],
    [
      {
        title: '口碑外卖',
        image: {
          source: require('../../../images/iconfont-koubeilogo.png'),
        }
      },
      {
        title: '芝麻信用',
        image: {
          source: require('../../../images/iconfont-zhimaxinyong.png'),
        }
      },
      {
        title: '淘宝',
        image: {
          source: require('../../../images/iconfont-taobao.png'),
        }
      },
      {
        title: '滴滴出行',
        image: {
          source: require('../../../images/iconfont-chuxing.png'),
        }
      }
    ],
    [
      {
        title: '淘宝电影',
        image: {
          source: require('../../../images/iconfont-taobaodianying.png'),
        }
      },
      {
        title: '蚂蚁聚宝',
        image: {
          source: require('../../../images/iconfont-mayijubao-copy.png'),
        }
      },
      {
        title: '蚂蚁花呗',
        image: {
          source: require('../../../images/iconfont-huabei.png'),
        }
      },
      {
        title: '服务窗',
        image: {
          source: require('../../../images/iconfont-fuwuchuang.png'),
        }
      }
    ],
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
      }
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
      }
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
        isMore: true
      },
      {

      }
    ]
];

const AlipayView = React.createClass({
  handleAppClick(appInfo) {
    this.navigatorPush('app', appInfo.title, AppInfoView, appInfo.options);
  },

  getAppItems(data, opt = {}) {
    const appRowList = data.map((row, rowIndex) => {
      const appColList = row.map((col, colIndex) => {

        // 查看更多
        if (col.isMore) {
          return (
              <View key={'appCol-' + colIndex} style={styles.appCol}>
                <TouchableHighlight
                    underlayColor="#B5B5B5"
                    onPress={() => { this.navigatorPush('appMore', '更多', AppMoreView); }}>
                  <Text style={styles.appItemTextMore}>...</Text>
                </TouchableHighlight>
              </View>
          );
        }

        // 空的九宫格
        if (!col.title) {
          return (
              <View key={'appCol-' + colIndex} style={styles.appCol}></View>
          );
        }

        let icon;
        if (col.image) {
          icon = <Image source={col.image.source} style={styles.appItemImageIcon}/>;
        } else if (col.icon) {
          const iconSize = col.icon.size || 20;
          const iconColor = col.icon.color || '#56abe4';
          icon = <Icon name={col.icon.name} size={iconSize} color={iconColor} style={styles.appItemIcon}/>;
        }

        return (
            <View key={'appCol-' + colIndex} style={styles.appCol}>
              <TouchableOpacity style={{flex: 1, alignItems: 'center'}}
                                onPress={() => { this.handleAppClick(col); }}>
                {icon}
                <Text style={styles.appItemText}>{col.title}</Text>
              </TouchableOpacity>
            </View>
        );
      });

      let rowStyle = styles.appRow;
      if (opt.topBorder && rowIndex === 0) {
        rowStyle = styles.appRowTopBorder;
      }

      return (
          <View key={'appRow-' + rowIndex} style={rowStyle}>
            {appColList}
          </View>
      );
    });

    return appRowList;
  },

  render() {
    return (
        <View style={styles.container}>
          <View key="quickEntry" style={styles.quickEntry}>
            <View key="scan" style={styles.quickEntryItem}>
              <Image source={require('../../../images/iconfont-scan.png')} style={styles.quickEntryItemIcon}/>
              <Text key="scan" style={styles.quickEntryItemText}>扫一扫</Text>
            </View>
            <View key="pay" style={styles.quickEntryItem}>
              <Image source={require('../../../images/iconfont-paycode.png')} style={styles.quickEntryItemIcon}/>
              <Text key="pay" style={styles.quickEntryItemText}>付款</Text>
            </View>
            <View key="discount" style={styles.quickEntryItem}>
              <Image source={require('../../../images/iconfont-discount.png')} style={styles.quickEntryItemIcon}/>
              <Text key="discount" style={styles.quickEntryItemText}>卡券</Text>
            </View>
            <View key="xiu" style={styles.quickEntryItem}>
              <Image source={require('../../../images/iconfont-dangmianfu-yellow.png')} style={styles.quickEntryItemIcon}/>
              <Text key="xiu" style={styles.quickEntryItemTextYellow}>咻一咻</Text>
            </View>
          </View>
          <ScrollView contentContainerStyle={styles.scrollContainer}
                      automaticallyAdjustContentInsets={true}>
            <View key="content" style={styles.content}>
              <View key="app" style={styles.app}>
                {this.getAppItems(appListData.slice(0, 3))}
              </View>

              <View key="banner" style={styles.banner}>
                <Image source={require('../../../images/banner.png')} style={styles.bannerImage}/>
              </View>

              <View key="app2" style={styles.app}>
                {this.getAppItems(appListData.slice(3), {topBorder: true})}
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

// 导航条路由配置
const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    // “支付宝” 首页左上角 “账单” 按钮
    if (route.name === 'home') {
      return (
        <TouchableOpacity>
          <Text key="topBarBill" style={styles.topBarBill}>{fileTextIcon}&nbsp;&nbsp;账单</Text>
        </TouchableOpacity>
      );
    }

    let backButtonText = route.backButtonText || '支付宝';

    return (
      <TouchableOpacity
          onPress={() => navigator.pop()}
          style={{marginTop: 10}}>
        <Text key="topBarBack" style={styles.topBarBack}>{angleLeftIcon}&nbsp;&nbsp;{backButtonText}</Text>
      </TouchableOpacity>
    );
  },

  RightButton(route, navigator, index, navState) {
    // 如果页面自定义了导航的右侧按钮，则用自定义的
    if (route.RightButton) {
      return (
        <View key="topBarOptions" style={styles.topBarOptions}>
          <View>
            {route.RightButton}
          </View>
        </View>
      );
    }

    if (route.name === 'app' || route.name === 'appMore') {
      return null;
    }

    return (
      <View key="topBarOptions" style={styles.topBarOptions}>
        <View>
          <Text key="topBarIcon" style={styles.topBarIcon}>{personIcon}&nbsp;&nbsp;{searchIcon}&nbsp;&nbsp;{addIcon}</Text>
        </View>
      </View>
    );
  },

  Title(route, navigator, index, navState) {
    // 没有设置 title 字段，则不显示
    if (typeof route.title === 'undefined') {
      return null;
    }

    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
          {route.title}
        </Text>
      </TouchableOpacity>
    );
  }
};

const Main = React.createClass({
  renderScene(route, navigator) {
    if (route.component) {
      return React.createElement(route.component, { ...this.props, ...route.passProps, navigator, route } );
    }
  },

  render() {
    return (
        <Navigator initialRoute={{name: 'home', component: AlipayView}}
                   configureScene={() => { return Navigator.SceneConfigs.FloatFromRight }}
                   navigationBar={
                    <Navigator.NavigationBar style={{backgroundColor: '#3F454F', alignItems: 'center'}} routeMapper={NavigationBarRouteMapper} />
                   }
                   renderScene={this.renderScene}></Navigator>
    );
  }
});

export default Main;