import { Box, Typography } from '@mui/material'
import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import { NefrologiaYDialisisSasInfo } from '../../../../../constants';

/**
 * Copyright
 * @returns 
 */
const Copyright = () => {
  const currentYear = new Date().getFullYear()
  return (
    <Box>
      <Typography variant="caption">
        <CopyrightIcon fontSize="inherit" sx={{ mr: 0.5 }} />
        {`${NefrologiaYDialisisSasInfo.name} ${currentYear}`}
      </Typography>
    </Box>
  )
}

export default Copyright