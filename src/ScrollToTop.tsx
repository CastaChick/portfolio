import React from 'react';
import { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { History } from 'history';

interface Props extends RouteComponentProps<any>{
  history : History
};

const ScrollToTop: React.SFC<Props> = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [history]);

  return (null);
}

export default withRouter(ScrollToTop);