export const incrementAction = () => ({type: 'INCREMENT', payload: 10});
export const decrementAction = () => ({type: 'DECREMENT', payload: 10});

export const actionCreator = (increment = 1) => ({ 
  type: 'INCREMENT',
  payload: increment,
});