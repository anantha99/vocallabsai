import { Theme } from './settings/types';
import { VocalLabsAISupportAutomationLandingPage } from './components/generated/VocalLabsAISupportAutomationLandingPage';

let theme: Theme = 'light';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return (
    <>
      <VocalLabsAISupportAutomationLandingPage />
    </>);
  // %EXPORT_STATEMENT%
}

export default App;