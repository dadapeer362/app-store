// Write your code here
import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {searchedApp} = this.props
    const {appId, appName, imageUrl, category} = searchedApp
    return (
      <li className="tab-list-item">
        <img className="app-img" src={imageUrl} alt={appId} />
        <p className="app-name">{appName}</p>
      </li>
    )
  }
}

export default AppItem
