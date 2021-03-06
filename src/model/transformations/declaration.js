import { uuid } from 'utils/utils';

export function remoteToState(remote = []) {
  return remote.reduce((acc, declaration) => {
    const { declarationType, Text: label, position } = declaration;
    const id = declaration.id || uuid();
    return {
      ...acc,
      [id]: {
        id,
        label: label.replace(/&#xd;/gi, '\n\n'),
        declarationType,
        position,
      },
    };
  }, {});
}

export function stateToRemote(state) {
  return Object.keys(state).map(key => {
    const { id, declarationType, label: Text, position } = state[key];
    return {
      id,
      Text: Text.replace(/\n\n/gi, '&#xd;'),
      declarationType,
      position,
    };
  });
}
