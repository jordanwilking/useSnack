import React from 'react'
import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

function DemoSnack(props) {
  const { message, status, closeable, undo, alertProps } = props

  return (
    <Alert
      style={{
        minWidth: '18rem',
        marginRight: '2rem'
      }}
      action={
        <>
          {undo && (
            <Button
              color='inherit'
              size='small'
              style={{ fontSize: '.75rem' }}
              onClick={() => alert('undid, yo')}
            >
              UNDO
            </Button>
          )}
          {closeable && (
            <IconButton
              style={{ padding: '3px' }}
              color='inherit'
              onClick={() => alert('closed')}
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
  )
}

export default DemoSnack
