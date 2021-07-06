// Write your code here
import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  onSelectTabItem = () => {
    const {tab, onSelectTab} = this.props
    const {tabId, displayText} = tab
    onSelectTab(tabId)
  }

  render() {
    const {tab, onSelectTab, isActive} = this.props
    const {tabId, displayText} = tab
    const highLight = isActive ? 'highlight-tab' : ''
    return (
      <li className="tab-list">
        <button
          className={`button-style ${highLight}`}
          onClick={this.onSelectTabItem}
        >
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
