import React from 'react';
import _ from 'lodash';
import {Button, ButtonToolbar} from 'react-bootstrap';

class ButtonGroup extends React.Component {
  render() {
    let obj = this.props.obj;
    let stateKey = this.props.stateKey;

    return <p className='text-center'>
      <ButtonToolbar className='button-group'>
        {_.map(this.props.fields, field => {
          return <Button active={obj.state[stateKey] === field[0]}
            onClick={function() {
              var newState = {};
              newState[stateKey] = field[0];
              obj.setState(newState);
            }}>{field[1]}</Button>
        })}
      </ButtonToolbar>
    </p>;
  }
}

export default ButtonGroup;
