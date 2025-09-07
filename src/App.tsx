import React from "react"
import { Route, Routes } from "react-router"

// configs
import { PATH } from "./configs/path"
import { ROLE } from "./configs/role"

// routes
import AuthRoute from "./routes/AuthRoute"
import GuestRoute from "./routes/GuestRoute"
import RoleRoute from "./routes/RoleRoute"

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
const Error403 = React.lazy(() => import('./pages/error/403'));

function App() {
  const routesConfig = [
    {
      path: PATH.ROOT,
      guard: AuthRoute,
      layout: Template1,
      component: Dashboard,
      requireRole: [ROLE.ADMIN, ROLE.OPERATOR, ROLE.MEMBER]
    },
    {
      path: PATH.EMPLOYEE_SHOW,
      guard: AuthRoute,
      layout: Template1,
      component: EmployeeShow,
      requireRole: [ROLE.ADMIN, ROLE.OPERATOR]
    },
     {
      path: PATH.EMPLOYEE_LIST,
      guard: AuthRoute,
      layout: Template1,
      component: EmployeeList,
      requireRole: [ROLE.ADMIN, ROLE.OPERATOR]
    },
    {
      path: PATH.EMPLOYEE_CREATE,
      guard: AuthRoute,
      layout: Template1,
      component: EmployeeCreate,
      requireRole: [ROLE.ADMIN, ROLE.OPERATOR]
    },
    {
      path: PATH.EMPLOYEE_EDIT,
      guard: AuthRoute,
      layout: Template1,
      component: EmployeeEdit,
      requireRole: [ROLE.ADMIN, ROLE.OPERATOR]
    },
    {
      path: PATH.ERROR_403,
      component: Error403
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
            const requireRoles: string[] = route?.requireRole || []

            return (
              <Route 
                key={route.path}
                path={route.path} 
                element={
                  <Guard>
                    <RoleRoute requireRoles={requireRoles}>
                      <Layout>
                        <Component />
                      </Layout>
                    </RoleRoute>
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
