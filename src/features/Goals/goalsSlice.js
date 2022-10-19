const initialState = [
    {
      id: 0,
      goal: 'code',
      isComplete: true,
    },
    {
      id: 1,
      goal: 'code more',
      isComplete: false,
    },
    {
      id: 2,
      goal: 'code forever',
      isComplete: false,
    },
  ]

  const nextIdNum = () => {
    const length = state.getState.length;
    return length;
  }

  export default goalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'goals/addGoal': {
            return [
                ...state, 
                {
                    id: nextIdNum(),
                    goal: action.payload,
                    isComplete: false
                }
            ]
        }
        case 'goals/removeGoal': {
            return state.filter(todo => todo.id !== action.payload.id)
        }
        default:
            return state
    }
  }