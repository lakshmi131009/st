import { AppDispatch } from './store';
import { setSelectedCrypto, setCryptoData } from './cryptoSlice.ts';
import axios from 'axios';

export const selectCrypto = (crypto: string) => (dispatch: AppDispatch) => {
  dispatch(setSelectedCrypto(crypto));
};

export const fetchCryptoData = (crypto: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/stock/${crypto}`);
    dispatch(setCryptoData(response.data));
  } catch (error) {
    console.error('Error fetching crypto data:', error);
  }
};