import React from 'react';


class MainNav extends React.Component{
  render(){
    return (
        <nav className="main-nav">
          <ul>
            <li>
              <a href="https://tech.zalando.de" target="_blank"><img src="images/zalando_logo.png" /></a>
            </li>
            <li><a href="https://tech.zalando.de/blog/?tags=open%20source" target="_blank">Blog Posts</a></li>
            <li><a href="https://github.com/zalando/zalando-howto-open-source" target="_blank">How To</a></li>
          </ul>
        </nav>
    );
  }
}

export default MainNav;
