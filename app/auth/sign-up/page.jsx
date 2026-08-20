'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '../../../lib/supabase/client'

export default function SignUpPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [message, setMessage] = useState('')
  const [pending, setPending] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setPending(true)
    setMessage('')
    const { error } = await createClient().auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        emailRedirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || `${window.location.origin}/auth/callback`,
        data: { display_name: form.name },
      },
    })
    setPending(false)
    if (error) {
      setMessage(error.message.toLowerCase().includes('password') ? error.message : 'Unable to create the account. Check your details and try again.')
      return
    }
    router.push('/auth/sign-up-success')
  }

  return <main className="auth-page"><section className="auth-card"><div className="portal-brand auth-brand"><span className="portal-brand-mark">N</span><span>NEEPCO <small>SIH1508</small></span></div><p className="portal-kicker">Portal registration</p><h1>Request access</h1><p className="auth-copy">Create an account for the NEEPCO procurement data portal.</p><form onSubmit={handleSubmit} className="auth-form"><label htmlFor="name">Full name</label><input id="name" type="text" autoComplete="name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /><label htmlFor="email">Work email</label><input id="email" type="email" autoComplete="email" required value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /><label htmlFor="password">Password</label><input id="password" type="password" autoComplete="new-password" minLength={8} required value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} />{message && <p className="auth-error" role="alert">{message}</p>}<button className="primary-button" type="submit" disabled={pending}>{pending ? 'Creating account…' : 'Create account'}</button></form><p className="auth-footer">Already registered? <Link href="/auth/login">Sign in</Link></p></section></main>
}
