export function CurrentUser() {
  return () => undefined;
}

export function Permissions(..._permissions: string[]) {
  return () => undefined;
}

export class JwtAuthGuard {}
export class PermissionsGuard {}
export class DealerOwnershipGuard {}
export class BorrowerOwnershipGuard {}
