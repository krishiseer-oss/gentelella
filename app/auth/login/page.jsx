'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '../../../lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setPending(true)
    setError('')
    const { error: signInError } = await createClient().auth.signInWithPassword({ email, password })
    setPending(false)
    if (signInError) {
      setError(signInError.message.toLowerCase().includes('confirm') ? 'Please confirm your email before signing in.' : 'Invalid email or password.')
      return
    }
    router.push('/')
    router.refresh()
  }

  return <main className="auth-page"><section className="auth-card"><div className="portal-brand auth-brand"><span className="portal-brand-mark">N</span><span>NEEPCO <small>SIH1508</small></span></div><p className="portal-kicker">Secure portal access</p><h1>Sign in to NEEPCO</h1><p className="auth-copy">Access procurement intelligence, vendor records, and payment operations.</p><form onSubmit={handleSubmit} className="auth-form"><label htmlFor="email">Email address</label><input id="email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} /><label htmlFor="password">Password</label><input id="password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} />{error && <p className="auth-error" role="alert">{error}</p>}<button className="primary-button" type="submit" disabled={pending}>{pending ? 'Signing in…' : 'Sign in'}</button></form><p className="auth-footer">Need an account? <Link href="/auth/sign-up">Request access</Link></p></section></main>
}
