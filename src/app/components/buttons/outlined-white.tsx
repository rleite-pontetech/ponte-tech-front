'use client';

import { Box, BoxProps } from '@mui/material';
import { ReactNode } from 'react';

interface OutlinedWhiteButtonProps extends BoxProps {
  children: ReactNode;
  isTransparent?: boolean;
}

export default function OutlinedWhiteButton({
  children,
  isTransparent = false,
  ...rest
}: OutlinedWhiteButtonProps) {
  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap', 
        whiteSpace: "nowrap",
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px 24px',
        gap: '8px',
        width: '171px',
        height: '48px',
        background: isTransparent ? "transparent" : '#FEFEFE',
        border: '1px solid #8270FF',
        borderRadius: '4px',
        color: '#8270FF',
        fontFamily: 'Sora, sans-serif',
        fontSize: '15.8px',
        fontWeight: 300,
        textTransform: 'none',
        '&:hover': {
          background: '#6F60E0',
          color: '#FFFFFF',
          cursor: 'pointer',
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}
