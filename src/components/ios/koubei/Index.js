'use strict';

import React, {
    Component,
    Image,
    Navigator,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import assign from 'object-assign';
import NavBar from './../common/NavBar';

// 样式
import CommonStyles from '../../../styles/common';
import TopBarStyles from '../../../styles/topBar';

// 字体
const Icon = require('react-native-vector-icons/FontAwesome');
const MaterialIcons = require('react-native-vector-icons/MaterialIcons');
const personIcon = (<MaterialIcons name="person-outline" size={24} color="#FFFFFF"></MaterialIcons>);
const searchIcon = (<MaterialIcons name="search" size={24} color="#FFFFFF"></MaterialIcons>);
const addIcon = (<MaterialIcons name="add" size={24} color="#FFFFFF"></MaterialIcons>);
const locationIcon = (<MaterialIcons name="room" size={20} color="#FFFFFF"></MaterialIcons>);

class KoubeiView extends Component {
  render() {
    return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainerTab}
                      automaticallyAdjustContentInsets={true}>
            <View key="content" style={styles.content}>
              <View style={{alignItems: 'center', padding: 10}}>
                <Text>content of 口碑</Text>
              </View>
            </View>
          </ScrollView>
        </View>
    );
  }
}

// 导航条路由配置
const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    // “口碑” 首页左上角城市按钮
    if (route.name === 'koubei-index') {
      return (
          <TouchableOpacity>
            <Text key="topBarCity" style={styles.topBarCity}>{locationIcon}&nbsp;城市</Text>
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

    if (route.name === 'koubei-index') {
      return (
          <NavBar.RightButton styles={styles}>
            <Text key="topBarIcon" style={styles.topBarIcon}>{personIcon}&nbsp;&nbsp;{searchIcon}&nbsp;&nbsp;{addIcon}</Text>
          </NavBar.RightButton>
      );
    }

    return null;
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
        <Navigator initialRoute={{name: 'koubei-index', component: KoubeiView}}
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
    TopBarStyles
));

export default Main;
