import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CryptoData {
  price: number;
  timestamp: string;
}

interface CryptoState {
  selectedCrypto: string;
  data: CryptoData[];
}

const initialState: CryptoState = {
  selectedCrypto: localStorage.getItem('selectedCrypto') || 'bitcoin',
  data: JSON.parse(localStorage.getItem('cryptoData') || '[]'),
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setSelectedCrypto: (state, action: PayloadAction<string>) => {
      state.selectedCrypto = action.payload;
      localStorage.setItem('selectedCrypto', action.payload);
    },
    setCryptoData: (state, action: PayloadAction<CryptoData[]>) => {
      state.data = action.payload;
      localStorage.setItem('cryptoData', JSON.stringify(action.payload));
    },
  },
});

export const { setSelectedCrypto, setCryptoData } = cryptoSlice.actions;
export default cryptoSlice.reducer;