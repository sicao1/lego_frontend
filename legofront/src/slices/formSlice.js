import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiKEY = process.env.REACT_APP_API_KEY;

export const fetchDataFromAPI = createAsyncThunk(
  "form/fetchData",
  async (searchData) => {
    const response = await fetch(
      `https://rebrickable.com/api/v3/lego/sets/?search=${searchData}&page_size=1&key=${apiKEY}`,
    );
    const result = await response.json();
    const itemNumberWithout = result.results[0].set_num.split("-")[0];
    return {
      name: result.results[0].name,
      item_number: parseInt(itemNumberWithout),
      theme: result.results[0].theme_id,
      img_url: result.results[0].set_img_url,
      built: false,
      wishlist: false,
      pieces: result.results[0].num_parts,
    };
  },
);

const formSlice = createSlice({
  name: "form",
  initialState: {
    formData: {
      name: "",
      item_number: "",
      theme: "",
      img_url: "",
      built: false,
      wishlist: false,
      pieces: "",
    },
    searchedData: null,
  },
  reducers: {
    setFormData(state, action) {
      state.formData = action.payload;
    },
    resetFormData(state) {
      state.formData = {
        name: "",
        item_number: "",
        theme: "",
        img_url: "",
        built: false,
        wishlist: false,
        pieces: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataFromAPI.fulfilled, (state, action) => {
      state.formData = action.payload;
      state.searchedData = action.payload;
    });
  },
});

export const { setFormData, resetFormData } = formSlice.actions;
export const formReducer = formSlice.reducer;

export default formSlice.reducer;
