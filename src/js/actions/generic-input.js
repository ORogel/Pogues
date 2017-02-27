export const TOGGLE_TYPE = 'TOGGLE_TYPE'
export const DECREASE_DEPTH = 'DECREASE_DEPTH'
export const INCREASE_DEPTH = 'INCREASE_DEPTH'
export const UPDATE_GI = 'UPDATE_GI'

export function increaseDepth(id) {
  return {
    type: INCREASE_DEPTH,
    payload: id
  }
} 

export function decreaseDepth(id) {
  return {
    type: DECREASE_DEPTH,
    payload: id
  }
}

export function toggleType(id) {
  return {
    type: TOGGLE_TYPE,
    payload: id
  }
}

export function update(id, value) {
  return {
    type: UPDATE_GI,
    payload: {
      id,
      value
    }
  }
}