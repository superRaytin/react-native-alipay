'use strict';

const ListStyles = {
  listContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E6E6E6',
    backgroundColor: '#fff'
  },
  listItem: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 12,
    marginLeft: 10,
    paddingRight: 10,
    borderTopWidth: 1,
    borderColor: '#E6E6E6',
  },
  listItemWithoutBorder: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    paddingRight: 10,
    borderColor: '#E6E6E6',
  },
  listItemImageWrap: {
    marginRight: 10,
    alignItems: 'center',
  },
  listItemImage: {
    width: 30,
    height: 30,
    borderRadius: 3
  },
  listItemIcon: {
    width: 30,
    height: 30,
    paddingLeft: 2
  },
  listItemContent: {
    flex: 1
  },
  listItemContentTitle: {
    flexDirection: 'row',
  },
  listItemContentDesc: {
    marginTop: 5
  }
};

export default ListStyles;