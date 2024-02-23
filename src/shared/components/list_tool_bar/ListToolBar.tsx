import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';
import React from 'react';

interface IListToolBarProps {
  surchedText?: string;
  showSearchBar?: boolean;
  changeEvent?: (newText: string) => void;
  btnText?: string;
  showBtn: boolean;
  clickBtnEvent?: () => void;
}

export const ListToolBar: React.FC<IListToolBarProps> = ({
  surchedText = '',
  showSearchBar = false,
  changeEvent: changeEnvet,
  btnText = 'Novo',
  showBtn = true,
}) => {
  const theme = useTheme();

  return (
    <Box
      display='flex'
      component={Paper}
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      gap={1}
      alignItems='center'
    >
      {showSearchBar && (
        <TextField
          size='small'
          placeholder='Pesquisar...'
          value={surchedText}
          onChange={(e) => changeEnvet?.(e.target.value)}
        />
      )}
      <Box
        flex={1}
        display='flex'
        justifyContent='end'
      >
        {showBtn && (
          <Button
            variant='contained'
            color='primary'
            disableElevation
            endIcon={<Icon>add</Icon>}
          >
            {btnText}
          </Button>
        )}
      </Box>
    </Box>
  );
};
