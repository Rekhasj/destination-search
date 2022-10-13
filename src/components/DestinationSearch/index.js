import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="destination-container">
        <div className="container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              placeholder="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              className="search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
              alt="search icon"
              className="search-image"
            />
          </div>
          <ul className="item-container">
            {searchResults.map(eachItem => (
              <DestinationItem
                key={eachItem.id}
                destinationDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
