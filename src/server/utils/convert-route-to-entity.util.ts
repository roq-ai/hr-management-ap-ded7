const mapping: Record<string, string> = {
  applicants: 'applicant',
  employees: 'employee',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
