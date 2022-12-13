import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

interface ConfirmationProps {
  errorMessage?: string
}

/**
 * This component will let know the user that there was an answer. good or bad.
 * @returns 
 */
const Confirmation = ({ errorMessage }: ConfirmationProps) : JSX.Element => {


  return (
    <Box sx={{ flex: 1 }}>
      <Typography variant="h5" color="primary" sx={{ mt: 2, mb: 1 }}>Appointment confirmation:</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>

        {
          errorMessage
            ? <Card sx={{ width: '100%', maxWidth: 365, m: 2 }}>
              <CardMedia
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}
              >
                <ErrorIcon color="error" sx={{ fontSize: 150 }} />
              </CardMedia>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="button" color="primary">
                  Oops there was an error
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                 {errorMessage}
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small">Try again</Button>
              </CardActions>
            </Card>
            : <Card sx={{ width: '100%', maxWidth: 365, m: 2, position: 'relative' }}>

              <CardMedia
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}
              >
                <CheckCircleIcon color="success" sx={{ fontSize: 150 }} />
              </CardMedia>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="button" color="primary">
                  Appointment successfull
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  You have a new appointment in THIS DAY at THIS TIME. You will receive a confirmation email to THIS EMAIL
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Okay!</Button>
              </CardActions>

            </Card>
        }
      </Box>
    </Box>

  )
}

export default Confirmation