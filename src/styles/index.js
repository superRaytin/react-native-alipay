'use strict';

import { StyleSheet } from 'react-native';
import assign from 'object-assign';

const styles = StyleSheet.create(assign({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F9',
  },
  title: {
    height: 50,
    backgroundColor: '#3F454F',
    textAlign: 'center',
    paddingTop: 25,
    color: '#fff'
  },
  content: {
    backgroundColor: '#F5F5F9',
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
}, {
  scrollContainer: {
    backgroundColor: '#F5F5F9',
    paddingBottom: 15,
    marginTop: -20,
  },
}, {
  topBar: {
    height: 65,
    flexDirection: 'row',
    backgroundColor: '#3F454F',
    paddingTop: 33,
    paddingLeft: 15,
    paddingRight: 15,
  },
  topBarLocation: {
    width: 60,
    textAlign: 'center',
    fontSize: 14,
    color: '#fff'
  },
  topBarBill: {
    width: 60,
    textAlign: 'center',
    fontSize: 16,
    color: '#fff'
  },
  topBarBack: {
    width: 60,
    textAlign: 'center',
    fontSize: 16,
    color: '#fff'
  },
  topBarTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff'
  },
  topBarIcon: {

  },
  topBarOptions: {
    width: 60,
    flex: 1,
    alignItems: 'flex-end',
  },
}, {
  quickEntry: {
    flexDirection: 'row',
    backgroundColor: '#3F454F',
    height: 100,
    paddingTop: 0
  },
  quickEntryItem: {
    padding: 10,
    flex: 1,
    alignItems: 'center'
  },
  quickEntryItemIcon: {
    width: 40,
    height: 40
  },
  quickEntryItemText: {
    marginTop: 8,
    color: '#fff',
    fontSize: 13
  },
  quickEntryItemTextYellow: {
    marginTop: 8,
    color: '#FFC700',
    fontSize: 13
  },
}, {
  app: {

  },
  appRow: {
    height: 75,
    flexDirection: 'row',
    backgroundColor: '#3F454F',
  },
  appRowTopBorder: {
    height: 75,
    flexDirection: 'row',
    backgroundColor: '#3F454F',
    borderTopWidth: 1,
    borderColor: '#E6E6E6',
  },
  appCol: {
    flex: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E6E6E6',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 15,
  },
  appItemIcon: {
    width: 24,
    height: 24,
  },
  appItemIcon2: {
    width: 24,
    height: 24,
    paddingTop: 2,
  },
  appItemText: {
    marginTop: 8,
    fontSize: 12
  },
}, {
  banner: {
    marginTop: 15,
    marginBottom: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E6E6E6',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  bannerImage: {
    maxWidth: 320,
    height: 70
  },
}));

export default styles;