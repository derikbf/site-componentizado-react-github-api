import React, { children } from 'react';

function Layout() {
  return (
    <section>
      <header>header</header>
      {children}
    </section>
  );
}

export default Layout;