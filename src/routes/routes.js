import React from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from './routerList'
import RouteValidator from './RouteValidator'

const NotFound = () => <>Not Found</>

const CustomRoutes = () => (
  <>
    <Routes>
      {routes.map(({ path, key, ...props }) => {
        return (
          <Route
            path={path}
            key={key}
            exact
            element={<RouteValidator path={path} {...props} />}
          />
        )
      })}
      <Route
        path='*'
        element={<NotFound />}
      />
    </Routes>
  </>
)

export default CustomRoutes
