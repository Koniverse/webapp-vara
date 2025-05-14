import { Provider } from 'react-redux'
import { store } from './store'
import { RouterProvider } from 'react-router-dom'
import { router } from '@pages/RouterPages'
import SnackbarProvider from '@components/Snackbar'
import { theme } from '@static/theme'
import { ThemeProvider } from '@mui/material/styles'
import Notifier from '@containers/Notifier'
import { filterConsoleMessages, messagesToHide } from './hideErrors'
import { GlobalStyles } from '@mui/material'
import { generalButtonStyle } from "@styles"

filterConsoleMessages(messagesToHide)

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles styles={{
            '.general-button': {
              ...generalButtonStyle
            }
          }} />
          <SnackbarProvider maxSnack={99}>
            <>
              <Notifier />
              <RouterProvider router={router} />
            </>
          </SnackbarProvider>
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
