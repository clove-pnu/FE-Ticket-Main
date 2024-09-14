import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProviderWrapper from './remotes/AuthProviderWrapper';
import MainLayout from './components/layouts/MainLayout';
import LoginPageWrapper from './remotes/LoginPageWrapper';
import SignupPageWrapper from './remotes/SignupPageWrapper';
import TicketProviderWrapper from './remotes/TicketProviderWrapper';
import PlayDetailTicketingPageWrapper from './remotes/PlayDetailTicketingPageWrapper';
import PlayTicketingPageWrapper from './remotes/PlayTicketingPageWrapper';

export default function App() {
  return (
    <AuthProviderWrapper>
      <BrowserRouter basename="/page/play/name1">
        <TicketProviderWrapper>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<PlayDetailTicketingPageWrapper />} />
              <Route path="/ticketing" element={<PlayTicketingPageWrapper />} />
            </Route>
            <Route
              path="/login"
              element={<LoginPageWrapper />}
            />
            <Route
              path="/signup"
              element={<SignupPageWrapper />}
            />
          </Routes>
        </TicketProviderWrapper>
      </BrowserRouter>
    </AuthProviderWrapper>
  );
}
