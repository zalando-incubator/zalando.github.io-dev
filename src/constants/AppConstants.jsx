/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/

const AppConstants = {
  ActionTypes: {
    RECEIVE_REPOS: 'RECEIVE_REPOS'
  },
  NavItems: [
    {label: (<div>
      <span className="claim">Zalando.</span>
      <span className="claim">we dress code.</span>
    </div>), target: 'welcome'},
    {label: 'repositories', target: 'repositories'},
    {label: 'statistics', target: 'stats'}
  ]
};

export default AppConstants;
