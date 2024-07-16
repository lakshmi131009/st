import { RootState } from './store';

export const selectSelectedCrypto = (state: RootState) => state.crypto.selectedCrypto;
export const selectCryptoData = (state: RootState) => state.crypto.data;