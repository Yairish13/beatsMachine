import React from 'react';
import {storeInstance} from './StoreProvider'
export const StoreContext = React.createContext(storeInstance);