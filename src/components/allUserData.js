import React, { Component } from 'react'
import { Link } from 'react-router'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'

import LoadingIndicator from '../components/loadIndicator'

class AllUserData extends Component {

  render() {
    const { allUserData, isFetching } = this.props
    const styles = {
          topDiv: {
            textAlign: 'center',
            paddingTop: 80,
          },
          card : {
            width: '60%',
            marginTop: 20,
            display:'inline-block',
            padding: 20,
          },
          skills: {
            marginTop: 20
          },
          gitHubIcon: {
            background:'url(/GitHub-Mark-32px.png)',
            height:32,
            width:32,
            display:'inline-block'
          },
          tools: {
            listStyleType:'none',
            display:'inline',
            padding:20
          },
          users: {
            paddingLeft: 0
          }
    }

    return(
      <div style={styles.topDiv}>
        {isFetching? <LoadingIndicator /> :
          <div>
            <Card style={styles.card}>
              <h1>Current Members</h1>
              <div>All the user data from <a href='https://skill-suggest-api.herokuapp.com/api/users/'>skill-suggest-api.herokuapp.com/api/users/</a></div>
              {allUserData.map((user)=> {
                return(
                  <ul style={styles.users} key={user.id}>
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                  </ul>
                )
              })}
            </Card>
            <Card style={styles.card}>
              <h1>Project Details</h1>
              <h3>App: <span style={styles.gitHubIcon}></span> <a href='https://github.com/WataruKay/skillSuggest-redux'>WataruKay/skillSuggest-redux</a></h3>
              <h3>Api: <span style={styles.gitHubIcon}></span><a href='https://github.com/WataruKay/skillSuggestV2'>WataruKay/skillSuggestV2</a></h3>
              <h3>Built with:</h3>
              <div style={styles.tools}>
                <ul style={styles.tools}>
                  <li style={styles.tools}>
                    <img src ="https://assets.toptal.io/uploads/blog/category/logo/291/react.png" width="50px" height="50px" />
                  </li>
                  <li style={styles.tools}>
                    <img src ="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png" width="50px" height="50px" />
                  </li>
                  <li style={styles.tools}>
                    <img src ="https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png" width="50px" height="50px" />
                  </li>
                </ul>
              </div>
            </Card>
            </div>}
      </div>
        )
  }
}

export default AllUserData
