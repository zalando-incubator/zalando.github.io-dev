import React from 'react';

export default class InpageNavBarItem extends React.Component {

  constructor(props) {
    super(props);
  }

  onClick(target, event) {
    event.preventDefault();
    window.location.hash = target;
    this.props.onClickCallback(target);
  }

  render() {

    let href = this.props.href;
    let className = this.props.section === href ? 'active' : '';
    return (
      <li key={href}>
        <a href={href} onClick={this.onClick.bind(this, href)}
           className={className}>{this.props.label}</a>
      </li>
    );
  }
}
