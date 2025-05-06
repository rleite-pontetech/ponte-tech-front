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
}: Readonly<OutlinedWhiteButtonProps>) {
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
        padding: '12px 24px',
        width: 'min-content',
        gap: '8px',
        background: isTransparent ? "transparent" : '#FEFEFE',
        border: '1px solid #8270FF',
        borderRadius: '4px',
        color: '#8270FF',
        fontFamily: 'Sora, sans-serif',
        fontSize: '14px',
        fontWeight: 300,
        textTransform: 'none',
        '&:hover': {
            background: isTransparent ? "rgba(130, 112, 255, 0.1)" : '#F9F9FF',
            borderColor: '#6F60E0',
            color: '#6F60E0',
            boxShadow: '0 2px 8px rgba(130, 112, 255, 0.3)',
            cursor: 'pointer',
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}
