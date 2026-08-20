'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const groups = [
  { label: 'Portal', items: [{ href: '/', label: 'Dashboard', icon: '▦' }] },
  { label: 'Procurement', items: [
    { href: '/procurement-overview', label: 'Overview' },
    { href: '/tenders', label: 'Tenders' },
    { href: '/purchase-orders', label: 'Purchase Orders' },
    { href: '/gem-procurement', label: 'GeM Procurement' },
    { href: '/mse-procurement', label: 'MSE Procurement' },
  ] },
  { label: 'Vendors', items: [{ href: '/vendor-directory', label: 'Vendor Directory' }, { href: '/vendor-performance', label: 'Vendor Performance' }] },
  { label: 'Payments', items: [{ href: '/all-payments', label: 'All Payments' }, { href: '/pending-payments', label: 'Pending Payments' }, { href: '/paid-payments', label: 'Paid Payments' }, { href: '/delayed-payments', label: 'Delayed Payments' }] },
  { label: 'Insights', items: [{ href: '/procurement-analytics', label: 'Procurement Analytics' }, { href: '/payment-analytics', label: 'Payment Analytics' }, { href: '/vendor-analytics', label: 'Vendor Analytics' }, { href: '/reports', label: 'Reports' }] },
  { label: 'Governance', items: [{ href: '/documents', label: 'Documents' }, { href: '/audit-logs', label: 'Audit Logs' }, { href: '/settings', label: 'Settings' }] },
]

export default function PortalShell({ children, title }) {
  const pathname = usePathname()
  return (
    <div className="portal-shell">
      <aside className="portal-sidebar" aria-label="Primary navigation">
        <div className="portal-brand"><span className="portal-brand-mark">N</span><span>NEEPCO <small>SIH1508</small></span></div>
        <nav className="portal-nav">
          {groups.map((group) => <div className="portal-nav-group" key={group.label}>
            <div className="portal-nav-label">{group.label}</div>
            {group.items.map((item) => <Link className={`portal-nav-link ${pathname === item.href ? 'active' : ''}`} href={item.href} key={item.href} aria-current={pathname === item.href ? 'page' : undefined}><span className="portal-nav-icon">{item.icon || '·'}</span>{item.label}</Link>)}
          </div>)}
        </nav>
        <div className="portal-user"><span className="portal-avatar">A</span><span><strong>Administrator</strong><small>Portal access</small></span></div>
      </aside>
      <section className="portal-content">
        <header className="portal-topbar"><div><span className="portal-kicker">NEEPCO / SIH1508</span><h1>{title}</h1></div><div className="portal-top-actions"><span className="live-indicator"><i /> Live data</span><button type="button" aria-label="Notifications">◌</button><button type="button" aria-label="Account menu">A</button></div></header>
        <main className="portal-main">{children}</main>
      </section>
    </div>
  )
}
