import Link from 'next/link'

export default function SignUpSuccessPage() {
  return <main className="auth-page"><section className="auth-card"><div className="portal-brand auth-brand"><span className="portal-brand-mark">N</span><span>NEEPCO <small>SIH1508</small></span></div><p className="portal-kicker">Check your inbox</p><h1>Confirm your email</h1><p className="auth-copy">Your account request was created. Follow the confirmation link in your email, then return here to sign in.</p><Link className="primary-button auth-link-button" href="/auth/login">Back to sign in</Link></section></main>
}
