import { useContext } from 'react'
import { SnackBarContext } from './SnackContextProvider'

const useSnack = () => useContext(SnackBarContext)

export default useSnack
