'use client';

import { Box, BoxProps } from '@mui/material';
import { ReactNode } from 'react';

interface ContainedPurpleButtonProps extends BoxProps {
  children: ReactNode;
  width?: string | number;
}

export default function ContainedPurpleButton({
  children,
  width = '195px',
  ...rest
}: ContainedPurpleButtonProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap', 
        whiteSpace: "nowrap",
        padding: '16px 24px',
        gap: '8px',
        width: width,
        height: '48px',
        background: '#8270FF',
        borderRadius: '4px',
        color: '#FFFFFF',
        fontFamily: 'Sora, sans-serif',
        fontSize: '15.8px',
        fontWeight: 300,
        textTransform: 'none',
        '&:hover': {
          background: '#FFFFFF',
          border: '1px solid #6F60E0',
          color: '#6F60E0',
          cursor: 'pointer',
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}