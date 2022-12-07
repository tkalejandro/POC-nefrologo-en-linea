import React from 'react'
import { IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/system'
import { NefrologiaYDialisisSasInfo } from '../../../../../constants';

const SocialMedia = () => {
    const { facebookURL, linkedInURL, instagramURL } = NefrologiaYDialisisSasInfo
    return (
        <Box aria-label="outlined button group">
            <IconButton size="large" href={facebookURL} target="_blank">
                <FacebookIcon />
            </IconButton>
            <IconButton size="large" href={instagramURL} target="_blank">
                <InstagramIcon />
            </IconButton>
            <IconButton size="large" href={linkedInURL} target="_blank">
                <LinkedInIcon />
            </IconButton>
        </Box>
    )
}

export default SocialMedia