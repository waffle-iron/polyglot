export default (state = {}, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  if ( action.type === 'app/GET_ID' ) {
    newState.myId = action.myId;
  } else if ( action.type === 'app/ENTER_LAUNCH' ) {
    newState.teacher = action.teacher;
    newState.view = 1;
  } else if ( action.type === 'app/ENTER_CHAT' ) {
    newState.language = action.language;
    newState.view = 2;
  } else if ( action.type === 'app/EXIT_CHAT' ) {
    newState.language = null;
    newState.teacher = null;
    newState.chatModal = false;
    newState.view = 0;
  } else if ( action.type === 'app/ENTER_CARDS' ) {
    newState.view = 3;
  } else if ( action.type === 'app/CHAT_MODAL' ) {
    newState.chatModal = true;
  } else if ( action.type === 'app/CLOSE_CHAT_MODAL' ) {
    newState.chatModal = false;
  }
  return newState;
};
