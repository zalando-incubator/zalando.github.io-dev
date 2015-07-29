/**
 * Created by aigreja on 15/07/15.
 */
import React from 'react';
import {Button} from 'react-bootstrap';

class FilterBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: this.props.filter
    };
    this.onOptionChange = this.onOptionChange.bind(this);
  }

  onOptionChange(language) {
    let newFilter = language;
    //if the user clicks the same button, reset the filter
    if (language === this.state.filter) {
      newFilter = 'all';
    }
    this.setState({
      filter: newFilter
    });
    this.props.onUserInput(newFilter);
  }

  render() {
    let buttons = this.props.languages.map(function (language) {
      let active = this.state.filter === language.name;
      let buttonBarStyle;

      if (active) {
        buttonBarStyle = {
          color: 'white',
          backgroundColor: language.color,
          borderColor: language.color,
          boxShadow: 'none'
        };
      } else {
        buttonBarStyle = {
          color: language.color,
          borderColor: language.color
        };
      }

      return (
        <Button
          key={language.name}
          style={buttonBarStyle}
          onClick={this.onOptionChange.bind(this, language.name)}
          active={active}>{language.name || 'Unknown'}
        </Button>
      );
    }.bind(this));

    buttons.unshift(<Button
        key={'All'}
        onClick={this.onOptionChange.bind(this, 'all')}
        active={this.state.filter === 'all'}>All
      </Button>
    );

    buttons.push(<Button className="other-btn"
      key={'Other'}
      onClick={this.onOptionChange.bind(this, 'other')}
      active={this.state.filter === 'other'}>Other
    </Button>);

    return (
      <div className="text-center filter-bar">
        {buttons}
      </div>

    );
  }
}

FilterBar.propTypes = {
  languages: React.PropTypes.array.isRequired,
  filter: React.PropTypes.string.isRequired,
  onUserInput: React.PropTypes.func.isRequired
};

export default FilterBar;
