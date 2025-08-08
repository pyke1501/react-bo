export const ROLE = {
  ADMIN: 'Admin',
  OPERATOR: 'Operator',
  MEMBER: 'Member'
}


/*
CAN_READ, CAN_EDIT, CAN_CREATE, CAN_DELETE, CAN_UPLOAD, CAN_EXPORT
*/


export const ROLE_USER = {
  admin: ['CAN_READ', 'CAN_EDIT', 'CAN_CREATE', 'CAN_DELETE'],
  operator: ['CAN_READ', 'CAN_EDIT', 'CAN_CREATE', 'CAN_DELETE'],
  member: ['CAN_READ']
}

export const PERMISSION: any = {
  "dashboard/action/delete": 'CAN_DELETE',
  "dashboard/action/edit": 'CAN_EDIT',
  "dashboard/action/create": 'CAN_CREATE',

  "employee/action/edit": 'CAN_EDIT',
  "employee/action/create": 'CAN_CREATE',
  "employee/action/delete": 'CAN_DELETE',
}