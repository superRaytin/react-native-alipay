'use strict';

import assign from 'object-assign';

import CommonStyles from './common';
import TopBarStyles from './topBar';
import QuickEntryStyles from './quickEntry';
import AppListStyles from './appList';
import BannerStyles from './banner';

const AllStyles = assign(
    {},
    CommonStyles,
    TopBarStyles,
    QuickEntryStyles,
    AppListStyles,
    BannerStyles
);

export default AllStyles;