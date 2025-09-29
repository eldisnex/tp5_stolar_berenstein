import { useState } from 'react';
import { createContext } from 'react';
import { ORDER_STATUS } from '../constants/orderStatus';

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
   const [state, setState] = useState([true, true, true]);
   const labels = ORDER_STATUS;
   return (
      <FilterContext.Provider value={{ state, setState, labels }}>
         {children}
      </FilterContext.Provider>
   );
};

export default FilterContext;
