import { Fragment } from 'react';

import MainNavigation from './MainNav';

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;