import React from 'react';

import MenuItem from '../menuItem/menuItem';
import MenuTree from '../menuTree/menuTree';

export default props => (
  <ul className='sidebar-menu'>
    <MenuItem path='#' label='Dashboard' icon='dashboard' />
    <MenuTree label='Registration' icon='edit'>
      <MenuItem path='#billingCycles' label='Billing Cycles' icon='usd' />
    </MenuTree>
  </ul>
);
