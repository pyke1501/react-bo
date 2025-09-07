import React from 'react'
import { Navigate, useNavigate } from 'react-router';
import { PATH } from '../configs/path';
import { httpRequest } from '../services/initRequest';

function AuthRoute({ children }: React.PropsWithChildren) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);
  const access_token = window.localStorage.getItem('access_token');

  React.useEffect(() => {
    if (!access_token) return;

    async function getMe() {
      try {
       
        const res: any = await httpRequest('/api/auth', {
          method: 'POST',
        })
        const { user } = res?.user || {};
        setUser(user);
      } catch (err: any) {
        if (err?.status === '403') {
          navigate(PATH.ERROR_403);
        }
      }
    }
    getMe();
  }, [access_token])

  if (!user) return null;

  if (!access_token) {
    return <Navigate to={PATH.LOGIN} />
  }
  
  return (
    <>{children}</>
  )
}

export default AuthRoute