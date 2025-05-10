import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import Router from '@/Router';
import { theme } from '@/theme';
import { MantineProvider } from '@mantine/core';

const App = (): React.JSX.Element => {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
};

export default App;
