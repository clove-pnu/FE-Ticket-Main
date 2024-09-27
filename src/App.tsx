import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProviderWrapper from './remotes/AuthProviderWrapper';
import MainLayout from './components/layouts/MainLayout';
import TicketProviderWrapper from './remotes/TicketProviderWrapper';
import PlayTicketingPageWrapper from './remotes/PlayTicketingPageWrapper';

export default function App() {
  return (
    <AuthProviderWrapper>
      <BrowserRouter basename="/">
        <TicketProviderWrapper>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/:namespace/page/play" element={<PlayTicketingPageWrapper />} />
            </Route>
          </Routes>
        </TicketProviderWrapper>
      </BrowserRouter>
    </AuthProviderWrapper>
  );
}
