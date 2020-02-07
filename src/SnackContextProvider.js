import React, { createContext, useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import SnackBar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const AUTO_DISMISS = 3000

export const SnackBarContext = createContext()

export function SnackBarProvider({ children }) {
  const [snacks, setSnacks] = useState([])
  const [currentSnack, setCurrentSnack] = useState({})

  const addSnack = (message, props = {}) => {
    setSnacks(snacks => [{ message, ...props }, ...snacks])
  }

  // Set current snack to be displayed
  useEffect(() => {
    if (snacks.length > 0) {
      setCurrentSnack(snacks[snacks.length - 1])
    }
  }, [snacks])

  // Remove snack after timeout
  useEffect(() => {
    if (currentSnack) {
      const timeout = currentSnack.timeout || AUTO_DISMISS

      const timer = setTimeout(() => {
        removeCurrentSnack()
      }, timeout)

      return () => clearTimeout(timer)
    }
  }, [currentSnack])

  const handleClose = (e, reason) => {
    if (reason === 'clickaway' && currentSnack.clickawayCloseable) {
      removeCurrentSnack()
    } else if (reason !== 'clickaway' && currentSnack.closeable) {
      removeCurrentSnack()
    }
  }

  const handleUndo = () => {
    currentSnack.undo()
    removeCurrentSnack()
  }

  const removeCurrentSnack = () => {
    setCurrentSnack({})
    setSnacks(snacks => snacks.slice(0, snacks.length - 1))
  }

  const value = { addSnack }
  const {
    message,
    status,
    closeable,
    undo,
    snackBarProps,
    alertProps
  } = currentSnack
  return (
    <SnackBarContext.Provider value={value}>
      {children}
      {message && (
        <SnackBar
          key={message}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={true}
          onClose={handleClose}
          {...snackBarProps}
        >
          <Alert
            style={{
              minWidth: '18rem'
            }}
            action={
              <>
                {undo && (
                  <Button
                    color='inherit'
                    size='small'
                    style={{ fontSize: '.75rem' }}
                    onClick={handleUndo}
                  >
                    UNDO
                  </Button>
                )}
                {closeable && (
                  <IconButton
                    style={{ padding: '3px' }}
                    color='inherit'
                    onClick={handleClose}
                  >
                    <CloseIcon size='small' fontSize='small' />
                  </IconButton>
                )}
              </>
            }
            severity={status}
            {...alertProps}
          >
            {message}
          </Alert>
        </SnackBar>
      )}
    </SnackBarContext.Provider>
  )
}
