import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  UsersRound,
  FileText,
  Receipt,
  ShoppingCart,
  Mail,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings,
  Menu as MenuIcon, // Renamed to avoid conflict with DropdownMenu
  CircleDollarSign, // Placeholder for logo
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavLinkItem {
  href: string;
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

const mainNavLinks: NavLinkItem[] = [
  { href: '#', icon: LayoutDashboard, label: 'Dashboard', active: true },
  { href: '#', icon: UsersRound, label: 'Leads' },
  { href: '#', icon: UsersRound, label: 'Customers' }, // As per image
  { href: '#', icon: FileText, label: 'Proposals' },
  { href: '#', icon: Receipt, label: 'Invoices' },
  { href: '#', icon: ShoppingCart, label: 'Items' },
  { href: '#', icon: Mail, label: 'Mail' },
  { href: '#', icon: Archive, label: 'Shoebox' },
  { href: '#', icon: CalendarDays, label: 'Calendar' },
];

const helpNavLinks: NavLinkItem[] = [
  { href: '#', icon: HelpCircle, label: 'Help' },
  { href: '#', icon: Settings, label: 'Settings' },
  // The image shows 'Help' twice, one might be a typo or different context. Assuming a single Help and Settings.
];

const SidebarNav: React.FC = () => {
  return (
    <aside className="fixed top-0 left-0 z-20 flex h-screen w-64 flex-col border-r bg-sidebar text-sidebar-foreground">
      <div className="flex h-[70px] items-center border-b px-4">
        <Button variant="ghost" size="icon" className="mr-2 lg:hidden">
          <MenuIcon className="h-6 w-6" />
        </Button>
        <CircleDollarSign className="h-8 w-8 text-sidebar-primary mr-2" /> 
        <h1 className="text-xl font-semibold text-sidebar-foreground">LeadsCo</h1> 
      </div>

      <nav className="flex-grow overflow-y-auto px-4 py-4">
        <ul className="space-y-1">
          {mainNavLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={cn(
                  'flex items-center rounded-md px-3 py-2 text-sm font-medium',
                  link.active
                    ? 'bg-sidebar-accent text-sidebar-primary'
                    : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                )}
              >
                <link.icon className="mr-3 h-5 w-5" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto border-t p-4">
        <ul className="space-y-1">
          {helpNavLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={cn(
                  'flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                )}
              >
                <link.icon className="mr-3 h-5 w-5" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarNav;
