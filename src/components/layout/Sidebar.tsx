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
  { href: '#', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '#', icon: UsersRound, label: 'Leads', active: true }, // Active for Leads Overview page
  { href: '#', icon: UsersRound, label: 'Customers' },
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
];

const Sidebar: React.FC = () => {
  return (
    <aside className={cn(
      "fixed top-0 left-0 z-20 h-screen flex flex-col",
      "w-64", // sizing.sidebar
      "bg-sidebar text-sidebar-foreground border-r border-sidebar-border" // layout.sidebar & context styling
    )}>
      <div className="flex h-[70px] items-center border-b border-sidebar-border px-4">
        {/* Mobile menu button - hidden on lg and up based on original SidebarNav example */} 
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

      <div className="mt-auto border-t border-sidebar-border p-4">
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

export default Sidebar;
