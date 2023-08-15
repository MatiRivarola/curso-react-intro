import "./index.css"
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}

function TodosLoading() {
    return (
        <p className="loading-title primary">Cargando...</p>
    );
    
};


export { TodosLoading }; 