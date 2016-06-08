import React from 'react';


class MainNav extends React.Component{
  render(){
    return (
        <nav className="main-nav">
          <ul>
            <li>
              <a><div>
                <span className="claim">Zalando.</span>
                <span className="claim">we <i className="claim-heart">&hearts;</i> open source.</span>
              </div>
              </a>
            </li>
            <li><a href="https://tech.zalando.de/blog/?tags=open%20source" target="_blank">Blog Posts</a></li>
            <li><a href="https://github.com/zalando/zalando-howto-open-source" target="_blank">How To</a></li>
          </ul>
        </nav>
    );
  }
}

export default MainNav;
