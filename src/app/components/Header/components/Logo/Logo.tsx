import React from 'react'
import { Box } from '@mui/material';
import NefrologiaYDialisisLogo from '../../.././../../assets/images/nydceinLogo.png'
import { NefrologiaYDialisisSasInfo } from '../../../../../constants';

/**
 * Logo of Comapny.
 * @returns 
 */
const Logo = () : JSX.Element => {
    return (
        <Box sx={{
            '& > img': {
                objectFit:'contain',
                maxHeight: '70px',
            }
        }}>
           <img src={NefrologiaYDialisisLogo} alt={`${NefrologiaYDialisisSasInfo.name} Logo.`} />
        </Box>
    )
}

export default Logo