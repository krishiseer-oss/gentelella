import PortalShell from '../../components/portal-shell'

export default async function SectionPage({ params }) {
  const { section } = await params
  const title = section.replaceAll('-', ' ')
  return <PortalShell title={title}><div className="page-intro"><div><span className="eyebrow">SIH1508 PORTAL</span><h2>{title}</h2><p>This workspace is ready for authenticated, database-backed records when an integration is connected.</p></div><button className="primary-action">Create record <span>＋</span></button></div><article className="portal-card empty-state"><div className="empty-mark">{section.slice(0, 1).toUpperCase()}</div><h3>{title} workspace</h3><p>Connect your data service to replace this operational view with live NEEPCO records, approvals, and audit history.</p></article></PortalShell>
}
