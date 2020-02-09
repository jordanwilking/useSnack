import React from 'react'
import useSnack from './useSnack'
import { Button, Typography } from '@material-ui/core'
import styled from 'styled-components'
import DemoSnack from './DemoSnack'

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  margin-top: 5rem;
  width: 70%;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding: 0.75rem;
`

function SnackbarTest() {
  const addSnack = useSnack()

  // Try it out here
  const handleClick = () => {
    addSnack('Info', {
      status: 'info',
      clickawayCloseable: true,
      closeable: true
    })
    addSnack('Success')
  }

  return (
    <>
      <Button onClick={handleClick} variant='contained' color='primary'>
        Click me for snacks
      </Button>
      <DisplayContainer>
        <Example
          message='That thing you did was successful!'
          exampleText='addSnack("That thing you did was successful!")'
        />
        <Example
          message='This warning is closeable'
          exampleText='addSnack("This warning is closeable", {closeable: true, status: "warning"})'
          status='warning'
          closeable
        />
        <Example
          message='Just so you know'
          exampleText='addSnack("Just so you know", {status: "info"})'
          status='info'
        />
        <Example
          message="That wasn't good"
          exampleText={
            'addSnack("That wasn\'t good", {status: "error", closeable: true, undo: handleUndo})'
          }
          status='error'
          closeable
          undo
        />
        <Example
          message='You can also set custom timeouts'
          exampleText='addSnack("You can also set custom timeouts", {status: "info", timeout: 5000, closeable: true})'
          status='info'
          closeable
        />
        <Example
          message='And make it clickaway closable'
          exampleText='addSnack("And make the snack clickaway closeable", {status: "info", clickawayCloseable: true, closeable: true})'
          status='info'
          closeable
        />
        <Example
          message='Too many props? Add defaults'
          exampleText='addSnack("Too many props? Add defaults", undoSuccess)'
          closeable
          undo
        />
        <Example
          message='Just useSnack'
          exampleText='const addSnack = useSnack()'
          status='info'
        />
      </DisplayContainer>
    </>
  )
}

const Example = props => {
  const { message, exampleText, status, closeable, undo } = props

  return (
    <Content>
      <DemoSnack
        message={message}
        status={status}
        closeable={closeable}
        undo={undo}
      />
      <div style={{ textAlign: 'left', width: '50%' }}>
        <Typography variant='subtitle2' style={{ color: 'white' }}>
          {exampleText}
        </Typography>
      </div>
    </Content>
  )
}

export default SnackbarTest
