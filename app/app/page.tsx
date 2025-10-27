export default function Page() {
return (
<div className="space-y-6">
<section className="card">
<div className="card-header flex items-center justify-between">
<h1 className="text-lg font-semibold tracking-wide">Dashboard</h1>
<span className="text-sm text-base-400">Live</span>
</div>
<div className="card-body grid gap-4 md:grid-cols-3">
<div className="card p-4">
<div className="text-xs text-base-400">Today</div>
<div className="mt-1 text-3xl font-bold">—</div>
<div className="text-xs text-base-400">Emails processed</div>
</div>
<div className="card p-4">
<div className="text-xs text-base-400">AI Category — Top</div>
<div className="mt-1 text-3xl font-bold">—</div>
<div className="text-xs text-base-400">(Work / Promotions / Spam)</div>
</div>
<div className="card p-4">
<div className="text-xs text-base-400">Users</div>
<div className="mt-1 text-3xl font-bold">—</div>
<div className="text-xs text-base-400">Active</div>
</div>
</div>
</section>


<section className="card">
<div className="card-header">
<h2 className="font-semibold">Recent Emails</h2>
</div>
<div className="card-body text-base-300 text-sm">
Hook up Airtable to populate this table.
</div>
</section>
</div>
)
}
