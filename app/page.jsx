import PortalShell from '../components/portal-shell'

const stats = [
  ['Total procurement value', '₹184.6 Cr', '+8.4%', 'FY 2025–26 to date', 'teal'],
  ['Active tenders', '42', '+5', '11 closing this month', 'blue'],
  ['Purchase orders in progress', '128', '+12', '₹46.2 Cr committed', 'gold'],
  ['Pending vendor payments', '₹12.8 Cr', '+3.1%', '94 invoices awaiting action', 'orange'],
  ['Paid this period', '₹38.4 Cr', '+14.2%', '312 invoices cleared', 'green'],
  ['Average payment time', '18.6 days', '−2.4d', 'Against 21-day SLA', 'purple'],
]

const activity = [
  ['PO-NEEPCO-26-0148', 'Hydro Projects', 'BHEL Limited', '₹8.42 Cr', 'In progress'],
  ['GEM/2026/B/18402', 'IT & Systems', 'Tata Consultancy Services', '₹1.18 Cr', 'Awarded'],
  ['PO-NEEPCO-26-0145', 'Corporate Services', 'North East Office Mart', '₹42.6 L', 'Pending approval'],
  ['TN-NEEPCO-26-0072', 'Thermal Projects', 'Larsen & Toubro', '₹14.75 Cr', 'Evaluation'],
]

export default function Dashboard() {
  return <PortalShell title="Procurement overview">
    <div className="page-intro"><div><span className="eyebrow">REAL-TIME CONTROL CENTRE</span><h2>Procurement at a glance</h2><p>Monitor commitments, vendor activity, and payment movement across NEEPCO.</p></div><button className="primary-action">Export report <span>↗</span></button></div>
    <section className="stat-grid" aria-label="Procurement summary">{stats.map(([label, value, change, sub, tone]) => <article className="portal-card stat-card" key={label}><div className={`stat-dot ${tone}`} /><span className="stat-label">{label}</span><div className="stat-value">{value}</div><div className="stat-meta"><span className="positive">{change}</span><span>{sub}</span></div></article>)}</section>
    <section className="dashboard-grid"><article className="portal-card chart-card"><div className="card-heading"><div><span className="eyebrow">COMMITTED VALUE</span><h3>Monthly procurement value</h3></div><span className="range-chip">FY 25–26</span></div><div className="fake-chart" aria-label="Procurement value rises from April to August 2026"><div className="chart-line" /><div className="chart-labels"><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span></div></div></article><article className="portal-card"><div className="card-heading"><div><span className="eyebrow">DISTRIBUTION</span><h3>Payment overview</h3></div></div><div className="payment-list"><div><span className="status-dot paid" />Paid <strong>₹38.4 Cr</strong></div><div><span className="status-dot pending" />Pending <strong>₹12.8 Cr</strong></div><div><span className="status-dot delayed" />Delayed <strong>₹3.6 Cr</strong></div><div><span className="status-dot rejected" />Rejected <strong>₹0.8 Cr</strong></div></div></article></section>
    <article className="portal-card activity-card"><div className="card-heading"><div><span className="eyebrow">LATEST MOVEMENT</span><h3>Recent procurement activity</h3></div><a href="/tenders">View all →</a></div><div className="activity-table"><div className="activity-row activity-head"><span>ID</span><span>Department</span><span>Vendor</span><span>Amount</span><span>Status</span></div>{activity.map(([id, dept, vendor, amount, status]) => <div className="activity-row" key={id}><span className="mono">{id}</span><span>{dept}</span><span>{vendor}</span><strong>{amount}</strong><span className={`table-status ${status.toLowerCase().replaceAll(' ', '-')}`}>{status}</span></div>)}</div></article>
  </PortalShell>
}
