import { Box, Button, Icon, Paper, useTheme } from '@mui/material';

interface IDetailToolProps {
  textNewBtn?: string;

  showNewBtn?: boolean;
  showBackBtn?: boolean;
  showEraseBtn?: boolean;
  showSaveBtn?: boolean;
  showSaveAndCloseBtn?: boolean;

  clickNewBtn?: () => void;
  clickBackBtn?: () => void;
  clickEraseBtn?: () => void;
  clickSaveBtn?: () => void;
  clickSaveAndCloseBtn?: () => void;
}

export const DetailTool: React.FC<IDetailToolProps> = ({
  textNewBtn = 'Novo',

  showNewBtn = true,
  showBackBtn = true,
  showEraseBtn = true,
  showSaveBtn = true,
  showSaveAndCloseBtn = false,

  clickNewBtn,
  clickBackBtn,
  clickEraseBtn,
  clickSaveBtn,
  clickSaveAndCloseBtn,

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
      {showSaveBtn && (
        <Button
          variant='contained'
          color='primary'
          disableElevation
          onClick={clickSaveBtn}
          startIcon={<Icon>save</Icon>}
        >
          Salvar
        </Button>
      )}
      {showSaveAndCloseBtn && (
        <Button
          variant='outlined'
          color='primary'
          disableElevation
          onClick={clickSaveAndCloseBtn}
          startIcon={<Icon>save</Icon>}
        >
          Salvar e voltar
        </Button>
      )}

      {showEraseBtn && (
        <Button
          variant='outlined'
          color='primary'
          disableElevation
          onClick={clickEraseBtn}
          startIcon={<Icon>delete</Icon>}
        >
          Apagar
        </Button>
      )}
      {showNewBtn && (
        <Button
          variant='outlined'
          color='primary'
          disableElevation
          onClick={clickNewBtn}
          startIcon={<Icon>add</Icon>}
        >
          {textNewBtn}
        </Button>
      )}
      {showBackBtn && (
        <Button
          variant='outlined'
          color='primary'
          disableElevation
          onClick={clickBackBtn}
          startIcon={<Icon>arrow_back</Icon>}
        >
          Voltar
        </Button>
      )}
    </Box>
  );
};
