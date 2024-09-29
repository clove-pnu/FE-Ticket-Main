import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProviderWrapper from './remotes/AuthProviderWrapper';
import MainLayout from './components/layouts/MainLayout';
import TicketProviderWrapper from './remotes/TicketProviderWrapper';
import PlayTicketingPageWrapper from './remotes/PlayTicketingPageWrapper';
import TicketingResultPageWrapper from './remotes/TicketingResultPageWrapper';
import CustomerRouteWrapper from './remotes/CustomerRouteWrapper';

export default function App() {
  return (
    <AuthProviderWrapper>
      <BrowserRouter basename="/">
        <TicketProviderWrapper>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/:namespace/page/play" element={<PlayTicketingPageWrapper />} />

              {/* Need Customer Authentication */}
              <Route element={<CustomerRouteWrapper />}>
                <Route path="/:namespace/page/play/result" element={<TicketingResultPageWrapper />} />
              </Route>
            </Route>
          </Routes>
        </TicketProviderWrapper>
      </BrowserRouter>
    </AuthProviderWrapper>
  );
}
