import {
  Box,
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ReactNode } from 'react';
import { useDrawerContext } from '../contexts';

interface IBaseLayoytProps {
  children: ReactNode;
  title: string;
  toolBar?: ReactNode;
}

export const BaseLayout: React.FC<IBaseLayoytProps> = ({
  children,
  title,
  toolBar,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box
      height='100%'
      display='flex'
      flexDirection='column'
      gap={1}
    >
      <Box
        padding={1}
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
        display='flex'
        alignItems='center'
        gap={1}
      >
        <IconButton onClick={toggleDrawerOpen}>
          {smDown && <Icon>menu</Icon>}
        </IconButton>
        <Typography
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
          whiteSpace='nowrap'
          overflow='hidden'
          textOverflow='ellipsis'
        >
          {title}
        </Typography>
      </Box>
      {toolBar && <Box>{toolBar}</Box>}

      <Box
        flex={1}
        overflow='auto'
      >
        {children}
      </Box>
    </Box>
  );
};
