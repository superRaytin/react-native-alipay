/**
 * AlipayAppUI
 * https://github.com/superRaytin/alipay-app-ui
 */

'use strict';

import React, {
    AppRegistry,
    StatusBarIOS,
} from 'react-native';

import Interface from './src/components/ios/Interface';

// 将状态栏字体设置成白色
StatusBarIOS.setStyle('light-content');

AppRegistry.registerComponent('AlipayAppUI', () => Interface);
