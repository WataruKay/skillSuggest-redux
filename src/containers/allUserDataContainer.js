import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import { getAllUserData } from '../actions/user'
// components
import AllUserData from '../components/allUserData'

class AllUserDataContainer extends Component {

  // when component mounts, dispatch getAllUserData action
  componentDidMount() {
    console.log("AllUserDataContainer Mounted")
    this.init()
  }

  init() {
    this.props.getAllUserData()
  }

  render() {
    const { allUsers } = this.props
    return(
      <AllUserData allUserData={allUsers} 
        isFetching={this.props.isFetching}
      />
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    allUsers: state.skillApp.allUsers,
    isFetching: state.skillApp.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getAllUserData
  }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AllUserDataContainer)
