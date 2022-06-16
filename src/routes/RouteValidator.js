import PropTypes from 'prop-types'
import { Suspense } from 'react'
// import { Suspense } from 'react'
import PrivateRoute from './HOC/PrivateRoutes'
import PublicRoutes from './HOC/PublicRoutes'
// import { getAuthToken } from 'utils/common-services/cookie.services'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorHandler from 'pages/ErrorHandler'
// import ErrorHandler from 'components/layout/ErrorHandler'

const SuspenseWrappedComponent = (Component) => {
  return (
    <Suspense
      fallback={
        <div>
          Loading...
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <Component />
      </ErrorBoundary>

    </Suspense>
  )
}

const RouteValidator = ({ hasAuth, component }) => {
  // const isAuthenticated = getAuthToken()
  const isAuthenticated = false
  return hasAuth
    ? (
      <PrivateRoute
        isAuthenticated={isAuthenticated}
        Component={SuspenseWrappedComponent(component)}
      />
      )
    : (
      <PublicRoutes
        isAuthenticated={isAuthenticated}
        Component={SuspenseWrappedComponent(component)}
      />
      )
}

RouteValidator.propTypes = {
  component: PropTypes.elementType.isRequired,
  hasAuth: PropTypes.bool,
  path: PropTypes.string
}

export default RouteValidator
