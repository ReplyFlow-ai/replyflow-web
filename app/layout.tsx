import './globals.css'
import { ReactNode } from 'react'
import Link from 'next/link'


export const metadata = {
title: 'ReplyFlow',
description: 'AI Gmail Assistant — minimal dark dashboard',
}


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en" className="dark">
<body>
<div className="min-h-screen grid grid-cols-[240px_1fr]">
{/* Sidebar */}
<aside className="border-r border-base-800 bg-base-900/80 backdrop-blur p-4 flex flex-col gap-4">
<Link href="/" className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-base-700 grid place-items-center">⚡</div>
<span className="font-semibold tracking-wide">ReplyFlow</span>
</Link>


<nav className="mt-4 flex flex-col gap-1 text-base-300">
<Link className="nav-item" href="/">📊 Dashboard</Link>
<Link className="nav-item" href="/emails">📬 Emails</Link>
<Link className="nav-item" href="/users">👤 Users</Link>
<Link className="nav-item" href="/settings">⚙️ Settings</Link>
</nav>


<div className="mt-auto text-xs text-base-400">v0.1 • dark minimal</div>
</aside>


{/* Main */}
<main className="p-6 space-y-6">{children}</main>
</div>
</body>
</html>
)
}
