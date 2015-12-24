/**
 * Created by alivanov on 24/12/15.
 */

export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  return next(action);
}
