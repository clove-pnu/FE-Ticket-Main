import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProviderWrapper from './remotes/AuthProviderWrapper';
import UserStatusBarWrapper from './remotes/UserStatusBarWrapper';

export default function App() {
  return (
  // <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/page/main' : '/'}>
    <AuthProviderWrapper>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<UserStatusBarWrapper />}>
            <Route path="/" element={<div>Good</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProviderWrapper>
  );
}
