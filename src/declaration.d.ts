declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Auth
declare module 'auth/AuthProvider';
declare module 'auth/UserStatusBar';
declare module 'auth/PrivateRoute';

// Ticket
declare module 'ticket/TicketProvider';
declare module 'ticket/PlayDetailTicketingPage';
declare module 'ticket/PlayTicketingPage';
