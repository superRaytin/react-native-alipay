'use strict';

import React, {
    AppRegistry,
    StatusBarIOS,
} from 'react-native';

import Entry from './src/components/ios/Entry';

// 将状态栏字体设置成白色
StatusBarIOS.setStyle('light-content');

AppRegistry.registerComponent('AlipayAppUI', () => Entry);
