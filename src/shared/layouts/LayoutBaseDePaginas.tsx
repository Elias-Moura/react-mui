import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { useDrawerContext } from '../contexts';

interface LayoutBaseDePaginasProps {
  children: ReactNode;
  title: string;
}

export const LayoutBaseDePaginas: React.FC<LayoutBaseDePaginasProps> = ({
  children,
  title,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const {toggleDrawerOpen} = useDrawerContext();

  return (
    <Box
      height='100%'
      display='flex'
      flexDirection='column'
      gap={1}
    >
      <Box
        padding={1}
        height={theme.spacing(12)}
        display='flex'
        alignItems='center'
        gap={1}
      >
        <IconButton onClick={toggleDrawerOpen}>
          {smDown && <Icon>menu</Icon>}
        </IconButton>
        <Typography variant='h5'>{title}</Typography>
      </Box>
      <Box>toolbar</Box>
      <Box>{children}</Box>
    </Box>
  );
};
