import React, { FC } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import * as yup from 'yup';
import { Typography, Grid, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

interface SignInProps {
  onSubmit?: (data: IFormInputs) => void;
}

interface IFormInputs {
  email: string;
  password: string;
  remember: boolean;
}

const signInSchema = yup.object().shape({
  email: yup.string().email('Enter a valid email').required('Required'),
  password: yup
    .string()
    .min(6, 'Password should be longer than 6 characters')
    .required('Required')
});
// const schema = yup.object().shape({
//   firstName: yup.string().required(),
//   age: yup.number().positive().integer().required()
// });

const SignIn: FC<SignInProps> = ({
  onSubmit = (data: IFormInputs) => console.info(JSON.stringify(data))
}: SignInProps) => {
  const classes = useStyles();

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const {
    formState: { isSubmitting },
    register,
    handleSubmit,
    errors,
    control
  } = useForm<IFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(signInSchema)
  });
  // const onSubmit = handleSubmit(({ email, password, remember }) => {
  //   // alert(JSON.stringify(email));
  //   console.log(
  //     'email: ',
  //     email,
  //     ' Password: ',
  //     password,
  //     ' Remember: ',
  //     remember
  //   );
  // });

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}>
          <TextField
            error={!!errors.email}
            helperText={errors.email && errors.email.message}
            data-testid='form-input-email'
            disabled={isSubmitting}
            inputRef={register}
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            error={!!errors.password}
            helperText={errors.password && errors.password.message}
            data-testid='form-input-password'
            disabled={isSubmitting}
            inputRef={register}
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            control={
              <Controller
                data-testid='form-input-remember'
                disabled={isSubmitting}
                as={Checkbox}
                control={control}
                id='remember'
                name='remember'
                color='primary'
                defaultValue={false}
              />
            }
            label='Remember me'
          />
          <Button
            data-testid='button'
            disabled={isSubmitting}
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
export default SignIn;
