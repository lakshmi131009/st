import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCrypto, fetchCryptoData } from '../store/actions.ts';
import { selectSelectedCrypto, selectCryptoData } from '../store/selectors.ts';
import { AppDispatch } from '../store/store';
import { 
    Select, 
    MenuItem, 
    Button, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper,
    Box,
    Typography
} from '@mui/material';

const cryptoList = ['bitcoin', 'ethereum', 'ripple', 'litecoin', 'dogecoin'];

const CryptoTracker: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const selectedCrypto = useSelector(selectSelectedCrypto);
  const cryptoData = useSelector(selectCryptoData);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectCrypto(event.target.value));
  };

  const handleSearch = () => {
    dispatch(fetchCryptoData(selectedCrypto));
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, marginBottom: 2 }}>
        <Select
          value={selectedCrypto}
          onChange={handleSelectChange}
          sx={{ minWidth: 120 }}
        >
          {cryptoList.map((crypto) => (
            <MenuItem key={crypto} value={crypto}>
              {crypto.charAt(0).toUpperCase() + crypto.slice(1)}
            </MenuItem>
          ))}
        </Select>
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Box>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Serial No.</TableCell>
              <TableCell>Timestamp</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(cryptoData) && cryptoData.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell component="th" scope="row">
                  {new Date(data.timestamp).toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  <Typography color="primary">
                    ${data.price.toFixed(2)}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CryptoTracker;