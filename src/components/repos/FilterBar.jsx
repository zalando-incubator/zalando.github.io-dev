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
      return (
        <Button
          key={language.name}
          className={language.name.toLowerCase() + '-btn'}
          onClick={this.onOptionChange.bind(this, language.name)}
          active={this.state.filter === language.name}>{language.name}
        </Button>
      );
    }.bind(this));

    buttons.unshift(<Button
        key={'All'}
        onClick={this.onOptionChange.bind(this, 'all')}
        active={this.state.filter === 'all'}>All
      </Button>
    );

    return (
      <div className="text-center filter-bar">
        {buttons}
      </div>

    );
  }
}

export default FilterBar;
