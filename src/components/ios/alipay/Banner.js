'use strict';

import React, {
    Image,
    View
} from 'react-native';

const Banner = React.createClass({
  render() {
    const {styles} = this.props;
    return (
        <View key="banner" style={styles.banner}>
          <Image source={require('../../../images/banner.png')} style={styles.bannerImage}/>
        </View>
    );
  }
});

export default Banner;
