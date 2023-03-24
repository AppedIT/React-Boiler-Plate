import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { RootState } from '../store';
import { useAppSelector } from '../hooks';
import { Law, Tag } from '../../types/law';
import laws from './dummyLawData';
import ExampleApi from '../../services/api.Example.ts';

type ReduxStatus = 'pending' | 'success' | 'failed' | 'default';

export interface AllLawsDataState {
    lawList: Law[],
    tagList: Tag[],
    bookList: any[],
    loadingAllLaws: ReduxStatus,
    loadingAllTags: ReduxStatus,
    loadingAllBooks: ReduxStatus,
    savingLaw: ReduxStatus,
    savingTag: ReduxStatus,
    deletingTag: ReduxStatus,
}

const initialState: AllLawsDataState = {
    lawList: [] as Law[],
    tagList: [] as Tag[],
    bookList: [] as any[],
    loadingAllLaws: 'default',
    loadingAllTags: 'default',
    loadingAllBooks: 'default',
    savingLaw: 'default',
    savingTag: 'default',
    deletingTag: 'default',
}

export const getAllLaws = createAsyncThunk(
    'api/getAllLaws',
    async () => {
        const response = await ExampleApi.laws.getLaws();
        return response.data;
    }
)

export const saveNewLaw = createAsyncThunk(
    'api/saveNewLaw',
    async (law: Law) => {
        const response = await ExampleApi.laws.saveNewLaw(law);
        return response.data;
    }
)

export const getAllTags = createAsyncThunk(
    'api/getAllTags',
    async () => {
        const response = await ExampleApi.laws.getTags();
        return response.data;
    }
)

export const saveNewTag = createAsyncThunk(
    'api/saveNewTag',
    async (tag: Tag) => {
        const response = await ExampleApi.laws.saveNewTag(tag);
        return response.data;
    }
)

export const getAllBooks = createAsyncThunk(
    'api/getAllBooks',
    async () => {
        const response = await ExampleApi.laws.getBooks();
        return response.data;
    }
)

export const deleteTag = createAsyncThunk(
    'api/deleteTag',
    async (tagId: number) => {
        const response = await ExampleApi.laws.deleteTag(tagId);
        return response.data;
    }
)

export const lawSlice : any = createSlice({
    name: 'allLawsData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllLaws.pending, (state) => {
                state.loadingAllLaws = 'pending';
            })
            .addCase(getAllLaws.fulfilled, (state, action) => {
                const { data } = action.payload;
                state.loadingAllLaws = 'success';
                state.lawList = data as Law[];
            })
            .addCase(getAllLaws.rejected, (state, action) => {
                state.loadingAllLaws = 'failed';
                console.error(state);
                console.error(action);
            })
            .addCase(saveNewLaw.pending, (state) => {
                state.savingLaw = 'pending';
            })
            .addCase(saveNewLaw.fulfilled, (state, action) => {
                state.savingLaw = 'success';
                state.lawList.push(action.payload.data);
            })
            .addCase(saveNewLaw.rejected, (state, action) => {
                state.savingLaw = 'failed';
                console.error(state);
                console.error(action);
            })
            .addCase(getAllTags.pending, (state) => {
                state.loadingAllTags = 'pending';
            })
            .addCase(getAllTags.fulfilled, (state, action) => {
                const { data } = action.payload;

                state.loadingAllTags = 'success';
                state.tagList =  data;
            })
            .addCase(getAllTags.rejected, (state, action) => {
                state.loadingAllTags = 'failed';
                console.error(state);
                console.error(action);
            })
            .addCase(saveNewTag.pending, (state) => {
                state.savingTag = 'pending';
            })
            .addCase(saveNewTag.fulfilled, (state, action) => {
                state.savingTag = 'success';
                state.tagList.push(action.payload.data);
            })
            .addCase(saveNewTag.rejected, (state, action) => {
                state.savingTag = 'failed';
                console.error(state);
                console.error(action);
            })
            .addCase(getAllBooks.pending, (state) => {
                state.loadingAllBooks = 'pending';
            })
            .addCase(getAllBooks.fulfilled, (state, action) => {
                const { data } = action.payload;

                state.loadingAllBooks = 'success';
                state.bookList =  data;
            })
            .addCase(getAllBooks.rejected, (state, action) => {
                state.loadingAllBooks = 'failed';
                console.error(state);
                console.error(action);
            })
            .addCase(deleteTag.pending, (state) => {
                state.deletingTag = 'pending';
            })
            .addCase(deleteTag.fulfilled, (state, action) => {
                state.deletingTag = 'success';
            })
            .addCase(deleteTag.rejected, (state, action) => {
                state.deletingTag = 'failed';
                console.error(state);
                console.error(action);
            })
            
    }
});

const _laws = (state: RootState) => state.law;

export const useLawsData = () => {
    return useAppSelector(_laws);
}

export default lawSlice.reducer;