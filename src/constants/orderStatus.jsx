export const ORDER_STATUS = ['Pending', 'Shipped', 'Delivered'];

const nameToIndex = ORDER_STATUS.reduce((acc, name, index) => {
   acc[name.toLowerCase()] = index;
   return acc;
}, {});

export function statusIndexFromName(name) {
   if (typeof name !== 'string') return -1;
   const idx = nameToIndex[name.toLowerCase()];
   return typeof idx === 'number' ? idx : -1;
}

export function statusNameFromIndex(index) {
   if (typeof index !== 'number') return undefined;
   return ORDER_STATUS[index];
}

export function isValidStatusName(name) {
   return statusIndexFromName(name) !== -1;
}

export function isValidStatusIndex(index) {
   return typeof index === 'number' && index >= 0 && index < ORDER_STATUS.length;
}

