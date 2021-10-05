
type generateUniqueIdType = () => number;

// Функция, генерирующая уникальный id
// Хотя на самом деле есть вероятность повторения сгенерированного id с вероятностью в 2^-128
const generateUniqueId: generateUniqueIdType = () => Math.random();

export default generateUniqueId