import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

interface IDetailToolProps {
  textNewBtn?: string;

  showNewBtn?: boolean;
  showBackBtn?: boolean;
  showEraseBtn?: boolean;
  showSaveBtn?: boolean;
  showSaveAndCloseBtn?: boolean;

  showLoadingNewBtn?: boolean;
  showLoadingEraseBtn?: boolean;
  showLoadingSaveBtn?: boolean;
  showLoadingSaveAndCloseBtn?: boolean;

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

  showLoadingNewBtn = false,
  showLoadingEraseBtn = false,
  showLoadingSaveBtn = false,
  showLoadingSaveAndCloseBtn = false,

  clickNewBtn,
  clickBackBtn,
  clickEraseBtn,
  clickSaveBtn,
  clickSaveAndCloseBtn,
}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
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
      {showSaveBtn && !showLoadingSaveBtn && (
        <Button
          variant='contained'
          color='primary'
          disableElevation
          onClick={clickSaveBtn}
          startIcon={<Icon>save</Icon>}
        >
          <Typography
            variant='button'
            whiteSpace='nowrap'
            textOverflow='ellipsis'
            overflow='hidden'
          >
            Salvar
          </Typography>
        </Button>
      )}
      {showLoadingSaveBtn && (
        <Skeleton
          width={110}
          height={60}
        />
      )}

      {showSaveAndCloseBtn &&
        !showLoadingSaveAndCloseBtn &&
        !smDown &&
        !mdDown && (
        <Button
          variant='outlined'
          color='primary'
          disableElevation
          onClick={clickSaveAndCloseBtn}
          startIcon={<Icon>save</Icon>}
        >
          <Typography
            variant='button'
            whiteSpace='nowrap'
            textOverflow='ellipsis'
            overflow='hidden'
          >
              Salvar e voltar
          </Typography>
        </Button>
      )}

      {showLoadingSaveAndCloseBtn && !smDown && !mdDown && (
        <Skeleton
          width={180}
          height={60}
        />
      )}

      {showEraseBtn && !showLoadingEraseBtn && (
        <Button
          variant='outlined'
          color='primary'
          disableElevation
          onClick={clickEraseBtn}
          startIcon={<Icon>delete</Icon>}
        >
          <Typography
            variant='button'
            whiteSpace='nowrap'
            textOverflow='ellipsis'
            overflow='hidden'
          >
            Apagar
          </Typography>
        </Button>
      )}
      {showLoadingEraseBtn && (
        <Skeleton
          width={110}
          height={60}
        />
      )}
      {showNewBtn && !showLoadingNewBtn && !smDown && (
        <Button
          variant='outlined'
          color='primary'
          disableElevation
          onClick={clickNewBtn}
          startIcon={<Icon>add</Icon>}
        >
          <Typography
            variant='button'
            whiteSpace='nowrap'
            textOverflow='ellipsis'
            overflow='hidden'
          >
            {textNewBtn}
          </Typography>
        </Button>
      )}
      {showLoadingNewBtn && !smDown && (
        <Skeleton
          width={110}
          height={60}
        />
      )}
      {showBackBtn && (
        <>
          <Divider
            variant='middle'
            orientation='vertical'
          />
          <Button
            variant='outlined'
            color='primary'
            disableElevation
            onClick={clickBackBtn}
            startIcon={<Icon>arrow_back</Icon>}
          >
            <Typography
              variant='button'
              whiteSpace='nowrap'
              textOverflow='ellipsis'
              overflow='hidden'
            >
              Voltar
            </Typography>
          </Button>
        </>
      )}
    </Box>
  );
};
