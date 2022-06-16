import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import CustomRoutes from './routes'

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={
        <>Loading....</>
       }
      >
        <CustomRoutes />
      </Suspense>
    </Router>
  )
}

export default Routes
