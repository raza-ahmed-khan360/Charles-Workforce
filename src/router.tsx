import { useEffect, useState, useCallback } from 'react';

export type RoutePath =
  | '/'
  | '/about'
  | '/mission-vision'
  | '/programs'
  | '/donate'
  | '/get-involved'
  | '/contact'
  | '/privacy'
  | '/terms'
  | '/accessibility';

function getPath(): string {
  const path = window.location.pathname;
  return path === '' ? '/' : path;
}

export function useRouter() {
  const [path, setPath] = useState<string>(getPath());

  useEffect(() => {
    const onPop = () => {
      setPath(getPath());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to: string) => {
    window.history.pushState({}, '', to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return { path, navigate };
}

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export function Link({ to, children, className, onClick, ariaLabel }: LinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', to);
    window.dispatchEvent(new PopStateEvent('popstate'));
    if (onClick) onClick();
  };
  return (
    <a href={to} onClick={handleClick} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
