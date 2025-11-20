import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from '../../services/api';

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async (_, { rejectWithValue }) => {
        try {
            const data = await fetchUsers();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    data: [],
    filteredData: [],
    loading: false,
    error: null,
    currentPage: 1,
    itemsPerPage: 10,
    searchTerm: '',
    activeView: 'home',
    initialLoad: true
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
            state.filteredData = state.data.filter(item =>
                Object.values(item).some(val =>
                    String(val).toLowerCase().includes(action.payload.toLowerCase())
                )
            );
            state.currentPage = 1;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setActiveView: (state, action) => {
            state.activeView = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
        setInitialLoadComplete: (state) => {
            state.initialLoad = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.filteredData = action.payload;
                state.error = null;
                state.initialLoad = false;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.initialLoad = false;
            });
    }
});

export const { setSearchTerm, setCurrentPage, setActiveView, clearError, setInitialLoadComplete } = dataSlice.actions;
export default dataSlice.reducer;