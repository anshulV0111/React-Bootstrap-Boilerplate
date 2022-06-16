import { useContext, useLayoutEffect } from 'react'
import { UNSAFE_NavigationContext } from 'react-router-dom'

const ErrorHandler = ({ resetErrorBoundary }) => {
  const navigation = useContext(UNSAFE_NavigationContext).navigator

  useLayoutEffect(() => {
    if (navigation) {
      navigation.listen(() =>
        resetErrorBoundary()
      )
    }
    // eslint-disable-next-line
  }, [navigation])

  return (
    <>
      <div style={{ margin: '4% 5%', lineHeight: '50px' }}>
        <p>OOPS SOMETHING</p>
        <br />
        <p>Please Refresh</p>
        <br />
        <button onClick={() => { resetErrorBoundary() }}>
          TRY AGAIN
        </button>
      </div>
    </>
  )
}

export default ErrorHandler
