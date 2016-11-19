export default (state = {}, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  if ( action.type === 'app/ENTER_LAUNCH' ) {
    newState.teacher = action.teacher;
    newState.view = action.view;
  } else if ( action.type === 'app/ENTER_CHAT' ) {
    newState.myId = action.myId;
    newState.language = action.language;
    newState.view = action.view;
  } else if ( action.type === 'app/EXIT_CHAT' ) {
    newState.language = '';
    newState.teacher = false;
    newState.view = action.view;
  }
  return newState;
};

