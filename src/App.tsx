import React from "react"
import { Route, Routes } from "react-router"

// configs
import { PATH } from "./configs/path"

// routes
import AuthRoute from "./routes/AuthRoute"
import GuestRoute from "./routes/GuestRoute"

// component
import Spinner from "./components/spinner/Spinner"

// layout
import Template1 from "./layouts/template1"

// pages
const Dashboard = React.lazy(() => import('./pages/dashboard'));
const Login = React.lazy(() => import('./pages/login'));
const Register = React.lazy(() => import('./pages/register'));
const EmployeeList = React.lazy(() => import('./pages/employee/List'));
const EmployeeCreate = React.lazy(() => import('./pages/employee/Create'));
const EmployeeShow = React.lazy(() => import('./pages/employee/Show'));
const EmployeeEdit = React.lazy(() => import('./pages/employee/Edit'));

function App() {
  const routesConfig = [
    {
      path: PATH.ROOT,
      guard: AuthRoute,
      layout: Template1,
      component: Dashboard
    },
    {
      path: PATH.EMPLOYEE_SHOW,
      guard: AuthRoute,
      layout: Template1,
      component: EmployeeShow
    },
     {
      path: PATH.EMPLOYEE_LIST,
      guard: AuthRoute,
      layout: Template1,
      component: EmployeeList
    },
    {
      path: PATH.EMPLOYEE_CREATE,
      guard: AuthRoute,
      layout: Template1,
      component: EmployeeCreate
    },
    {
      path: PATH.EMPLOYEE_EDIT,
      guard: AuthRoute,
      layout: Template1,
      component: EmployeeEdit
    },
    {
      path: PATH.LOGIN,
      guard: GuestRoute,
      component: Login
    },
    {
      path: PATH.REGISTER,
      guard: GuestRoute,
      component: Register
    },
  ]

  return (
    <>
      <React.Suspense fallback={<Spinner />}>
        <Routes>
          {routesConfig.map(route => {
            const Component = route.component;
            const Guard = route.guard || React.Fragment;
            const Layout = route.layout || React.Fragment;
            return (
              <Route 
                key={route.path}
                path={route.path} 
                element={
                  <Guard>
                    <Layout>
                      <Component />
                    </Layout>
                  </Guard>
                  } 
              />
            )
          })}
        </Routes>
      </React.Suspense>

    </>
  )
}

export default App
