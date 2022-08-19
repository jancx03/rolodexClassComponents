import { Component } from 'react'
import './search-box.styles.css'
class SearchBox extends Component {

  render() {
    const { onSearchChange } = this.props
    return (
      <input
        className={`search-box ${this.props.className}`}
        type='search'
        placeholder={this.props.placeholder}
        onChange={onSearchChange}
      ></input>
    )
  }
}
export default SearchBox


