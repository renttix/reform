'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BreadcrumbNav() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  // Generate breadcrumb items
  const breadcrumbs = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join('/')}`;
    const label = path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return { href, label };
  });

  if (breadcrumbs.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 text-sm">
      <ol className="flex flex-wrap items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
        <li 
          className="inline-flex items-center"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link 
            href="/"
            className="text-gray-500 dark:text-gray-400 hover:text-reform-primary dark:hover:text-reform-light transition-colors"
            itemProp="item"
          >
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
          <span className="mx-2 text-gray-400">/</span>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            className="inline-flex items-center"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index === breadcrumbs.length - 1 ? (
              <span 
                className="text-gray-700 dark:text-gray-300"
                itemProp="name"
              >
                {breadcrumb.label}
              </span>
            ) : (
              <>
                <Link
                  href={breadcrumb.href}
                  className="text-gray-500 dark:text-gray-400 hover:text-reform-primary dark:hover:text-reform-light transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{breadcrumb.label}</span>
                </Link>
                <span className="mx-2 text-gray-400">/</span>
              </>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
