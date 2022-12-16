import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { NotificationMessage } from '../../../../types/App';
import { ErrorCard, SuccessCard } from './components';

interface ConfirmationProps {
  notification?: NotificationMessage
}

/**
 * This component will let know the user that there was an answer. good or bad.
 * @returns 
 */
const Confirmation = ({ notification }: ConfirmationProps): JSX.Element | null => {

  if(notification == null) {
    return null
  }
  const { type, message } = notification

  const cardToRender = (): JSX.Element | null => {
    switch (type) {
      case 'error':
        return <ErrorCard notification={message} />
      case 'success':
        return <SuccessCard notification={message} />
      default:
        return null
    }
  }

  return (
    <Box sx={{ flex: 1 }}>
      <Typography variant="h5" color="primary" sx={{ mt: 2, mb: 1 }}>Appointment confirmation:</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Card sx={{ width: '100%', maxWidth: 365, m: 2 }}>
          {
            cardToRender()
          }
        </Card>
      </Box>
    </Box>

  )
}

export default Confirmation