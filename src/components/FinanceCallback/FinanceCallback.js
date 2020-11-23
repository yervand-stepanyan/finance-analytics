import React from 'react';

import Loader from '../Loader';
import { LOADER } from '../../globals/constants';

function FinanceCallback() {
  return <Loader type={LOADER.finance.title} />;
}

export default FinanceCallback;
