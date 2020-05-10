import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }

  OnInputChange = (event) => {
    this.setState({ term: event.target.value })
  }

  onFormSubmit = (event) => {
		event.preventDefault();
		
    this.props.onFormSubmit(this.state.term)
  }
  
	render() {
		return (
			<div className="search-bar ui segments">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Videos Search </label>
						<input type="text" value={this.state.term} onChange={this.OnInputChange} />
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar;