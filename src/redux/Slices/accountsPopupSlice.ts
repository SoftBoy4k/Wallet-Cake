import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PopupState {
  isOpen: boolean;
  editingCardId: number | null;
}

const initialState: PopupState = {
  isOpen: false,
  editingCardId: null,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup(state, action: PayloadAction<number | null>) {
      state.isOpen = true;
      state.editingCardId = action.payload;
    },
    closePopup(state) {
      state.isOpen = false;
      state.editingCardId = null;
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
