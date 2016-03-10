'use strict';

import React, {
    Image,
    TabBarIOS,
    Text,
    View
} from 'react-native';

import AlipayView from './alipay/Index';
import KoubeiView from './koubei/Index';
import FriendView from './friend/Index';
import MineView from './mine/Index';

const Icon = require('react-native-vector-icons/FontAwesome');
const MaterialIcons = require('react-native-vector-icons/MaterialIcons');

const Interface = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'AlipayView'
    };
  },

  onPress(selectedTab) {
    this.setState({
      selectedTab: selectedTab
    });
  },

  render() {
    const alipayLogoIcon = 'data:image/png;base64,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';
    const koubeiBase64Icon = 'data:image/png;base64,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';
    const mineBase64Icon = 'data:image/png;base64,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';

    return (
        <TabBarIOS tintColor="#00A9F1"
                   barTintColor={"#fff"}>
          <TabBarIOS.Item key="alipay"
                          icon={{uri: alipayLogoIcon, scale: 2}}
                          title="支付宝"
                          selected={this.state.selectedTab === 'AlipayView'}
                          onPress={() => { this.onPress('AlipayView'); }}>
            <AlipayView />
          </TabBarIOS.Item>
          <TabBarIOS.Item key="kb"
                          icon={{uri: koubeiBase64Icon, scale: 2.5}}
                          title="口碑"
                          selected={this.state.selectedTab === 'KoubeiView'}
                          onPress={() => { this.onPress('KoubeiView'); }}>
            <KoubeiView />
          </TabBarIOS.Item>
          <MaterialIcons.TabBarItem key="friend"
                                    iconName="people"
                                    selectedIconName="people"
                                    iconSize={30}
                                    title="朋友"
                                    badge="3"
                                    selected={this.state.selectedTab === 'FriendView'}
                                    onPress={() => { this.onPress('FriendView'); }}>
            <FriendView />
          </MaterialIcons.TabBarItem>
          <TabBarIOS.Item key="mine"
                          icon={{uri: mineBase64Icon, scale: 2.5}}
                          title="我的"
                          selected={this.state.selectedTab === 'MineView'}
                          onPress={() => { this.onPress('MineView'); }}>
            <MineView />
          </TabBarIOS.Item>
        </TabBarIOS>
    );
  }
});

export default Interface;