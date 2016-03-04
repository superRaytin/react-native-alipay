# alipay-app-ui

> 基于 [React Native](https://github.com/facebook/react-native) 实现的支付宝钱包 UI 界面。

# ToDoList

> 支付宝钱包版本号：v9.5.1

- [x] 通用顶部导航
- [x] 底部 Tab 标签
- [ ] 通用窗口导航
- [ ] 「支付宝」首页
  - [x] 快速入口
  - [ ] 咻一咻动画
  - [x] app 九宫格列表
  - [x] app 链接
  - [ ] banner 轮播
- [x] 「更多」页面
- [ ] 「付款」页面
- [ ] 「卡券」页面
- [ ] 「口碑」首页
- [ ] 「朋友」首页
- [ ] 「我的」首页

# 截图

<img src="screenshot-ios.png" width="320" alt="AlipayAppUI">

# 安装

### 第一步：下载项目

```sh
$ git clone https://github.com/superRaytin/alipay-app-ui.git
$ cd alipay-app-ui
$ npm install
```

### 第二步：安装图标字体

#### IOS

- 打开 Xcode，在项目上右键并选择 **Add files to "AlipayAppUI"**，选择 `node_modules/react-native-vector-icons` 下的 `Fonts` 文件夹，勾选文件对话框下的 **Add to targets** 和 **Create groups**
- 编辑 `Info.plist` 添加一行，命名为 **Fonts provided by application**，将上一步选择的字体文件依次添加进来，像下面这样：

![xcode](https://cloud.githubusercontent.com/assets/378279/12421498/2db1f93a-be88-11e5-89c8-2e563ba6251a.png)

- 在 **Libraries** 目录右键并选择 **Add files to "AlipayAppUI"**，选择 `node_modules/react-native-vector-icons/RNVectorIcons.xcodeproj`
- 选中项目根文件夹，将 `libRNVectorIcons.a` 添加进 **Build Phases** 选项卡下的 **Link Binary With Libraries**

或者参考 [react-native-vector-icons#ios](https://github.com/oblador/react-native-vector-icons#ios) 安装

# 运行

#### IOS

- `$ open ios/AlipayAppUI.xcodeproj/`
- 在打开的 Xcode 左上角有一个 `build and run` 按钮，点击之后创建一个 IOS 模拟器
- 启动成功

# 贡献

欢迎任何形式的贡献，包括但不限于新功能，Bug 修复，文档等。

[贡献者](https://github.com/superRaytin/alipay-app-ui/graphs/contributors)

---

部分图标来自 [iconfont](http://www.iconfont.cn/)，相关版权归支付宝公司所有。

# License
本项目基于 MIT 协议发布

MIT: [http://rem.mit-license.org](http://rem.mit-license.org/), 详见 [LICENSE](/LICENSE) 文件
