import * as React from 'react';
import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';
import { Header, Sidebar } from '../../layouts';

interface IProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<IProps> = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header handleDrawerOpen={handleDrawerOpen} open={open} />
      <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
      {children}
    </Box>
  );
};
