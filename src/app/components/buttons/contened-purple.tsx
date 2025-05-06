'use client';

import { Box, BoxProps } from '@mui/material';
import { ReactNode } from 'react';

interface ContainedPurpleButtonProps extends BoxProps {
  children: ReactNode;
  width?: string | number;
}

export default function ContainedPurpleButton({
  children,
  width = 'min-content',
  ...rest
}: Readonly<ContainedPurpleButtonProps>) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap', 
        whiteSpace: "nowrap",
        padding: '12px 24px',
        gap: '8px',
        width: width || 'min-content',
        background: '#8270FF',
        borderRadius: '4px',
        color: '#FFFFFF',
        fontFamily: 'Sora, sans-serif',
        fontSize: '14px',
        fontWeight: 300,
        textTransform: 'none',
        '&:hover': {
          background: '#6F60E0',
          borderColor: '#6F60E0',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(130, 112, 255, 0.3)',
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}