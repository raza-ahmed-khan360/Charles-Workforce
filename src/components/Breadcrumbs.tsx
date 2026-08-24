import { ChevronRight, Home } from 'lucide-react';
import { Link } from '@/router';

interface BreadcrumbProps {
  items: { label: string; path?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-gray-400" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-gold-400 transition-colors">
        <Home className="w-4 h-4" />
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className="w-3 h-3" />
          {item.path ? (
            <Link to={item.path} className="hover:text-gold-400 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-purple-300 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
