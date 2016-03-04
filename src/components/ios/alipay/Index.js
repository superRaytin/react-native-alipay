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
import NavBar from './../common/NavBar';
import AppList from './AppList';
import AppMoreView from './AppMore';
import AppInfoView from './AppInfo';
import QuickEntry from './QuickEntry';
import Banner from './Banner';

// 样式
import CommonStyles from '../../../styles/common';
import TopBarStyles from '../../../styles/topBar';
import QuickEntryStyles from '../../../styles/quickEntry';
import AppListStyles from '../../../styles/appList';
import BannerStyles from '../../../styles/banner';

// 字体
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
    this.navigatorPush('app', appInfo.title, AppInfoView, assign({backButtonText: '支付宝'}, appInfo.options));
  },

  onMorePress() {
    this.navigatorPush('appMore', '更多', AppMoreView, {backButtonText: '支付宝'});
  },

  render() {
    return (
        <View style={styles.container}>
          <QuickEntry styles={styles} />
          <ScrollView contentContainerStyle={styles.scrollContainerApp}
                      automaticallyAdjustContentInsets={true}>
            <View key="content" style={styles.content}>
              <View key="app" style={styles.app}>
                <AppList styles={styles}
                         data={appListData.slice(0, 3)}
                         topBorder={false}
                         onMorePress={this.onMorePress}
                         onAppPress={this.handleAppClick} />
              </View>
              <Banner styles={styles} />
              <View key="app-2" style={styles.app}>
                <AppList styles={styles}
                         data={appListData.slice(3)}
                         topBorder={true}
                         onMorePress={this.onMorePress}
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

// 导航条路由配置
const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    // “支付宝” 首页左上角 “账单” 按钮
    if (route.name === 'alipay-index') {
      return (
        <TouchableOpacity>
          <Text key="topBarBill" style={styles.topBarBill}>{fileTextIcon}&nbsp;&nbsp;账单</Text>
        </TouchableOpacity>
      );
    }

    return (
        <NavBar.BackButton styles={styles}
                           text={route.backButtonText}
                           onPress={() => navigator.pop()}
                           style={{marginTop: 10}} />
    );
  },

  RightButton(route, navigator, index, navState) {
    // 如果页面自定义了导航的右侧按钮，则用自定义的
    if (route.RightButton) {
      return (
          <NavBar.RightButton styles={styles}>
            {route.RightButton}
          </NavBar.RightButton>
      );
    }

    if (route.name === 'app' || route.name === 'appMore') {
      return null;
    }

    return (
        <NavBar.RightButton styles={styles}>
          <Text key="topBarIcon" style={styles.topBarIcon}>{personIcon}&nbsp;&nbsp;{searchIcon}&nbsp;&nbsp;{addIcon}</Text>
        </NavBar.RightButton>
    );
  },

  Title(route, navigator, index, navState) {
    return (
        <NavBar.Title styles={styles} title={route.title} />
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
        <Navigator initialRoute={{name: 'alipay-index', component: AlipayView}}
                   configureScene={() => { return Navigator.SceneConfigs.FloatFromRight }}
                   navigationBar={
                    <Navigator.NavigationBar style={{backgroundColor: '#3F454F', alignItems: 'center'}} routeMapper={NavigationBarRouteMapper} />
                   }
                   renderScene={this.renderScene}></Navigator>
    );
  }
});

const styles = StyleSheet.create(assign(
    {},
    CommonStyles,
    TopBarStyles,
    QuickEntryStyles,
    AppListStyles,
    BannerStyles
));

export default Main;