export function getBackPath(pathname: string): string {
  const segments = pathname.split('/').filter((segment) => segment !== '');

  if (segments.length === 0) {
    return '';
  } else if (segments.length === 1) {
    return '/dashboard';
  } else {
    segments.pop();
    return `/${segments.join('/')}`;
  }
}
