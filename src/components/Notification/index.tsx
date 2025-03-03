import { Fade, Snackbar, Alert } from '@mui/material';
import React from 'react';

interface NotificationProps {
  open: boolean;
  message: string;
  onClose: () => void;
  severity?: 'success' | 'error' | 'warning' | 'info';
}

const Notification: React.FC<NotificationProps> = ({
  open,
  message,
  onClose,
  severity = 'success'
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      TransitionComponent={Fade}
    >
      <Alert 
        onClose={onClose} 
        severity={severity}
        sx={{ 
          borderRadius: 2,
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          background: severity === 'success' ? 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)' : undefined,
          color: '#fff',
          '& .MuiAlert-icon': {
            color: '#fff'
          }
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
