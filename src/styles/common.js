'use strict';

const CommonStyles = {
  container: {
    flex: 1,
    backgroundColor: '#F5F5F9',
  },
  scrollContainer: {
    backgroundColor: '#F5F5F9',
    paddingBottom: 15,
    marginTop: 64,
  },
  // ‘支付宝’ 首页九宫格
  scrollContainerApp: {
    backgroundColor: '#F5F5F9',
    paddingBottom: 15,
    marginTop: -20,
  },
  // IOS 下每个 Tab 的根页面会占用系统状态栏的高度（20px）
  // Andriod 未测
  scrollContainerTab: {
    backgroundColor: '#F5F5F9',
    paddingBottom: 15,
    marginTop: 44,
  },
  content: {
    backgroundColor: '#F5F5F9',
    flex: 1,
  },
};

export default CommonStyles;