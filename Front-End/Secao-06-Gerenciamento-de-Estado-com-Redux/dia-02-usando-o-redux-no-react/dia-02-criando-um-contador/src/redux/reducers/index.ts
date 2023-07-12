type ActionType = {
  type: string,
  payload: number,
}

const INITIAL_STATE = {
  count: 0,
  clicks: 0,
}

export function reducer (state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.payload};
      default:
        return state;
  }
}
