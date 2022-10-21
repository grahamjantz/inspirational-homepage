# Inspirational Homepage

This project was created while taking Codecademy's 'Create an Advanced Web App with React and Redux Skill Path'.

## Purpose

The purpose of this project is to practice skills learned in this skill path:

### `React`
### `Redux`
### `Redux Toolkit and Async Thunks`

## Features

This app is intended as a landing page for inspirational contemplation. Users can view inspiring images, read inspiring quotes, check the weather, and record goals.

### The app uses three API's:
- Open Weather API 
    - Fetches weather information based on the user's current location.
- Pexels API
    - Fetches photos queried under 'nature' to be used as the background images of the app
- Quote of The Day API  
    - Fetches the current quote of the day meant to inspire the user

### Four store slices for Redux global state management
- Each API, and the Goals array use a slice of state in the Redux store. These were created using createSlice() from Redux-Toolkit
- Each slice also includes the necessary selectors and gets passed to the store via configureStore()
- The slices for the API's also use createAsyncThunk() to handle the asynchronous fetching from the API calls

## Future Work

- Connect to a database:
    - In the future this app could include some sort of login system connected to a database that would allow users to save their goals
- Fuller weather information:
    - Users can click on the current weather module and view more information such as: daily and weekly forecasts, toggle Celsius/Fahrenheit