import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
      id: 0,
      text: 'Wake up',
      isComplete: true,
    },
    {
      id: 1,
      text: 'Brush teeth',
      isComplete: false,
    },
    {
      id: 2,
      text: 'Eat breakfast',
      isComplete: false,
    },
  ]

  const generateId = (state) => {
    if (state.length > 0) {
      return state[state.length - 1].id + 1
    }
    return 0;
  }

export const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    addGoal(state, action) {
      return [...state, 
        {
          id: generateId(state),
          text: action.payload,
          isComplete: false
        }
      ]
    },
    removeGoal(state, action) {
      return state.filter(goal => goal.id !== action.payload); 
    },
    toggleCompleted (state, action) {
      state.map(goal => {
        if (goal.id !== action.payload) {
          return goal;
        }
        return goal.isComplete = !goal.isComplete;
      })
    }
  }
})


export const selectGoals = (state) => state.goals;

export const { addGoal, removeGoal, toggleCompleted } = goalsSlice.actions;
export default goalsSlice.reducer;