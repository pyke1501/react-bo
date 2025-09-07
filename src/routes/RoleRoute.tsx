import React from 'react'
import { PATH } from '../configs/path';

interface RoleRouteProps extends React.PropsWithChildren {
  requireRoles: string[]
}

function RoleRoute({ children, requireRoles }: RoleRouteProps) {
  const roleUser = 'admin';

  React.useEffect(() => {
    if (requireRoles.length === 0) return;

    const checkRole = requireRoles.map(role => role.toLowerCase()).includes(roleUser.toLowerCase());
    if (!checkRole) {
      window.location.href = PATH.ERROR_403
    }
  }, [])

  return children;
}

export default RoleRoute