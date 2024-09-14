import {
  Component, lazy, ReactNode, Suspense,
} from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

const TicketProvider = lazy(() => import('ticket/TicketProvider'));

class TicketProviderWrapper extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return children;
    }

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <TicketProvider>{children}</TicketProvider>
      </Suspense>
    );
  }
}

export default TicketProviderWrapper;
