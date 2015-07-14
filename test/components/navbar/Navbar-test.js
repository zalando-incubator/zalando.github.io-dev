// Not working... fails when imports jquery plugins deps
//import React from 'react/addons';
//import {expect} from 'chai';
//import Navbar from '../../../scripts/components/navbar/Navbar.jsx';
//
//
//describe('Navbar', function () {
//
//  let {TestUtils} = React.addons;
//  let shallowRenderer = TestUtils.createRenderer();
//
//  let items = [
//    {label: 'Foo is great', hash: 'foo-is-great'},
//    {label: 'Bar is great', hash: 'bar-is-great'},
//    {label: 'John doe is great', hash: 'john-doe-is-great'}
//  ];
//
//  DemoNavbar.render(<Navbar items={items} />);
//  let navbar = shallowRenderer.getRenderOutput();
//
//  it('should have a nav as container', () => {
//    expect(navbar.type).to.equal('nav');
//  });
//
//  it('should render the items list as links and "Foo is great" should be present', () => {
//
//    let ul = navbar.props.children;
//    expect(ul.type).to.equal('ul');
//
//    let a = ul.props.children[0].props.children;
//
//    expect(a.type).to.equal('a');
//
//    expect(a.props.href).to.equal('#foo-is-great');
//    expect(a.props.children).to.equal('Foo is great');
//  });
//
//});
