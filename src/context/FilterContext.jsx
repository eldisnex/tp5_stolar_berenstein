import { useState } from 'react';
import { createContext } from 'react';

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
   const [state, setState] = useState([true, true, true]);
   const labels = ['Pending', 'Shipped', 'Delivered'];
   return (
      <FilterContext.Provider value={{ state, setState, labels }}>
         {children}
      </FilterContext.Provider>
   );
};

export default FilterContext;
