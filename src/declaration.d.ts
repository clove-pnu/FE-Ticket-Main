declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Auth
declare module 'auth/LoginPage';
declare module 'auth/SignupPage';
declare module 'auth/AuthProvider';
declare module 'auth/UserStatusBar';
declare module 'auth/PrivateRoute';
