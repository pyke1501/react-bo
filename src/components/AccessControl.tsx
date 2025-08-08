import { PERMISSION, ROLE_USER } from "../configs/role";

interface AccessControlProps extends React.PropsWithChildren {
  resource: string
}

function AccessControl({ children, resource }: AccessControlProps) {
  const role = 'operator';
  const ROLES = ROLE_USER?.[role] || []; // ROLES = ['CAN_READ', 'CAN_EDIT', 'CAN_CREATE']

  if (!role) return null;

  if (!ROLES.includes(PERMISSION[resource])) return null; // ['CAN_READ', 'CAN_EDIT', 'CAN_CREATE'].include('CAN_DELETE')

  
  return (
    <>{children}</>
  )
}

export default AccessControl


/* 
role: operator
resource: employee
dashboard
  - read
  - create
  - update

employee
  - read
  - create
  - update
  - delete
*/