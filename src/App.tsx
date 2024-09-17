import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProviderWrapper from './remotes/AuthProviderWrapper';
import MainLayout from './components/layouts/MainLayout';
import TicketProviderWrapper from './remotes/TicketProviderWrapper';
import PlayDetailTicketingPageWrapper from './remotes/PlayDetailTicketingPageWrapper';
import PlayTicketingPageWrapper from './remotes/PlayTicketingPageWrapper';

export default function App() {
  return (
    <AuthProviderWrapper>
      <BrowserRouter basename="/page/play">
        <TicketProviderWrapper>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/:playName" element={<PlayDetailTicketingPageWrapper />} />
              <Route path="/:playName/ticketing" element={<PlayTicketingPageWrapper />} />
            </Route>
          </Routes>
        </TicketProviderWrapper>
      </BrowserRouter>
    </AuthProviderWrapper>
  );
}
