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
        Test
      </Button>
      <DisplayContainer>
        <Content>
          <DemoSnack message='That thing you did was successful!' />
          <div style={{ textAlign: 'left', width: '50%' }}>
            <Typography
              variant='subtitle2'
              style={{ color: 'white', textAlign: 'left' }}
            >
              addSnack("That thing you did was successful!")
            </Typography>
          </div>
        </Content>
        <Content>
          <DemoSnack
            message='This warning is closeable'
            closeable
            status='warning'
          />
          <div style={{ textAlign: 'left', width: '50%' }}>
            <Typography variant='subtitle2' style={{ color: 'white' }}>
              {
                'addSnack("This warning is closeable", {closeable: true, status: "warning"})'
              }
            </Typography>
          </div>
        </Content>
        <Content>
          <DemoSnack message='Just so you know' status='info' />
          <div style={{ textAlign: 'left', width: '50%' }}>
            <Typography variant='subtitle2' style={{ color: 'white' }}>
              {'addSnack("Just so you know", {status: "info"})'}
            </Typography>
          </div>
        </Content>
        <Content>
          <DemoSnack message="That wasn't good" status='error' closeable undo />
          <div style={{ textAlign: 'left', width: '50%' }}>
            <Typography variant='subtitle2' style={{ color: 'white' }}>
              {
                'addSnack("That wasn\'t good", {status: "error", closeable: true, undo: handleUndo})'
              }
            </Typography>
          </div>
        </Content>
        <Content>
          <DemoSnack
            message='You can also set custom timeouts'
            status='info'
            closeable
          />
          <div style={{ textAlign: 'left', width: '50%' }}>
            <Typography variant='subtitle2' style={{ color: 'white' }}>
              {
                'addSnack("You can also set custom timeouts", {status: "info", timeout: 5000, closeable: true})'
              }
            </Typography>
          </div>
        </Content>
        <Content>
          <DemoSnack
            message='And make it clickaway closable'
            status='info'
            closeable
          />
          <div style={{ textAlign: 'left', width: '50%' }}>
            <Typography variant='subtitle2' style={{ color: 'white' }}>
              {
                'addSnack("And make the snack clickaway closeable",\n{status: "info", clickawayCloseable: true, closeable: true})'
              }
            </Typography>
          </div>
        </Content>
        <Content>
          <DemoSnack message='Too many props? Add defaults' closeable undo />
          <div style={{ textAlign: 'left', width: '50%' }}>
            <Typography variant='subtitle2' style={{ color: 'white' }}>
              {'addSnack("Too many props? Add defaults", undoSuccess)'}
            </Typography>
          </div>
        </Content>
        <Content>
          <DemoSnack message='Just useSnack' status='info' />
          <div style={{ textAlign: 'left', width: '50%' }}>
            <Typography variant='subtitle2' style={{ color: 'white' }}>
              {'const addSnack = useSnack()'}
            </Typography>
          </div>
        </Content>
      </DisplayContainer>
    </>
  )
}

export default SnackbarTest
