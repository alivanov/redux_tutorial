/**
 * Created by alivanov on 24/12/15.
 */

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function vote(entry) {
  return {
    type: 'VOTE',
    entry
  };
}
