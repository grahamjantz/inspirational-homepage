import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentWeather: '0'
}

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async ({latitude, longitude}) => {
        const key = 'c13240cc9d97776b23bfc1759282b13c';
        
        const res2 = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily,alerts&appid=${key}&units=metric`)
        const data2 = res2.json()
        return data2
    }
)

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.currentWeather = action.payload.current.temp
        })
    }
})

export const selectCurrentWeather = (state) => state.weather.currentWeather;

export default weatherSlice.reducer