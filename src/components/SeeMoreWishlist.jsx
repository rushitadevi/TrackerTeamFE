// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { getWishlistJobApps, getWishlistCount } from "../Actions/jobAppFetches";

// const mapStateToProps = state => state;

// const mapDispatchToProps = dispatch => ({
//  getWishlistJobAppsThunk: (query) => dispatch(getWishlistJobApps(query)),
//  getWishlistCountThunk: () => dispatch(getWishlistCount())
// });

// class SeeMoreWishlist extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           query: null
//         };
//     }

//   componentDidMount = async () => {
//       let query = ""
//     await this.props.getWishlistJobAppsThunk(query);
//     await this.props.getWishlistCountThunk();
//   };

//   render() {
//     return <div>hello</div>;
//   }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(SeeMoreWishlist);