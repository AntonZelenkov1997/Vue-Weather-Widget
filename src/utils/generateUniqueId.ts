
type generateUniqueIdType = () => number;

const generateUniqueId: generateUniqueIdType = () => Math.random();

export default generateUniqueId