import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentWeather: '0',
    currentLocation: '',
    currentIcon: '01d'
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

export const fetchLocation = createAsyncThunk(
    'weather/fetchLocation',
    async ({latitude, longitude}) => {
        const key = 'c13240cc9d97776b23bfc1759282b13c';

        const res = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${key}`)
        const data = await res.json()
        return data
    }
)

export const fetchIcon = createAsyncThunk(
    'weather/fetchIcon',
    async ({latitude, longitude}) => {
        const key = 'c13240cc9d97776b23bfc1759282b13c';
        
        const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily,alerts&appid=${key}&units=metric`)
        const data = res.json()
        return data
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
        builder.addCase(fetchLocation.fulfilled, (state, action) => {
            state.currentLocation = action.payload[0].name
        })
        builder.addCase(fetchIcon.fulfilled, (state, action) => {
            state.currentIcon = action.payload.current.weather[0].icon
        })
    }
})

export const selectCurrentWeather = (state) => state.weather.currentWeather;
export const selectCurrentLocation = (state) => state.weather.currentLocation
export const selectCurrentIcon = (state) => state.weather.currentIcon

export default weatherSlice.reducer