import { useContext } from 'react';
import FilterContext from '../context/FilterContext';
import './Filters.css';

export default function Filters() {
   const { state, setState, labels } = useContext(FilterContext);

   const handleChange = (index, checked) => {
      const newState = [...state];
      newState[index] = checked;
      setState(newState);
   };

   return (
      <div className='filters'>
         {labels.map((label, i) => (
            <div key={label}>
               <p>{label}:</p>
               <input
                  type='checkbox'
                  checked={state[i]}
                  onChange={(e) => handleChange(i, e.target.checked)}
               />
            </div>
         ))}
      </div>
   );
}
