import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  arr: [
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
  ],
  completedCount: 1 
}

  const generateId = (state) => {
    if (state.arr.length > 0) {
      return state.arr[state.arr.length - 1].id + 1
    }
    return 0;
  }

export const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    addGoal(state, action) {
      state.arr = [...state.arr, 
        {
          id: generateId(state),
          text: action.payload,
          isComplete: false
        }
      ]
    },
    removeGoal(state, action) {
      state.arr = state.arr.filter(goal => goal.id !== action.payload);
      state.completedCount = 0
      state.arr.map(goal => {
        if (goal.isComplete === true) {
          state.completedCount++
        }
        return 0
      })
    },
    toggleCompleted (state, action) {
      state.arr.map(goal => {
        if (goal.id !== action.payload) {
          return goal;
        } else if (goal.isComplete === false) {
          state.completedCount++
          return goal.isComplete = !goal.isComplete;
        } else if (goal.isComplete === true) {
          state.completedCount--
          return goal.isComplete = !goal.isComplete
        }
        return 0
      })
    }
  }
})


export const selectGoals = (state) => state.goals.arr;
export const selectCompletedCount = (state) => state.goals.completedCount;

export const { addGoal, removeGoal, toggleCompleted } = goalsSlice.actions;
export default goalsSlice.reducer;