import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProviderWrapper from './remotes/AuthProviderWrapper';
import MainLayout from './components/layouts/MainLayout';
import TicketProviderWrapper from './remotes/TicketProviderWrapper';
import PlayDetailTicketingPageWrapper from './remotes/PlayDetailTicketingPageWrapper';
import PlayTicketingPageWrapper from './remotes/PlayTicketingPageWrapper';
import PrivateRouteWrapper from './remotes/PrivateRouteWrapper';

export default function App() {
  return (
    <AuthProviderWrapper>
      <BrowserRouter basename="/">
        <TicketProviderWrapper>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/:namespace/page/play/:playName" element={<PlayDetailTicketingPageWrapper />} />

              {/* Need Authentication */}
              <Route element={<PrivateRouteWrapper />}>
                <Route path="/:namespace/page/play/:playName/ticketing" element={<PlayTicketingPageWrapper />} />
              </Route>
            </Route>
          </Routes>
        </TicketProviderWrapper>
      </BrowserRouter>
    </AuthProviderWrapper>
  );
}
