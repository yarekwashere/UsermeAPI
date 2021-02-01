export const createAction = (type, payloadCreator) => {
  const actionType = type.toUpperCase();

  const actionCreator = (...args) => {
    const action = {
      type: actionType,
      payload: args.length <= 1 ? args[0] : args,
    };

    if (payloadCreator instanceof Function) {
      action.payload = payloadCreator(...args);
    }

    return action;
  };

  actionCreator.type = actionType;

  return actionCreator;
};

export const createActionRequest = (
  type,
  payloadCreatorRequest,
  payloadCreatorResponse,
) => ({
  request: createAction(`${type}/REQUEST`, payloadCreatorRequest),
  response: createAction(`${type}/RESPONSE`, payloadCreatorResponse),
  reject: createAction(`${type}/REJECT`),
});
