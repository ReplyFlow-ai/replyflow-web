export default function SettingsPage() {
return (
<div className="card">
<div className="card-header">
<h1 className="text-lg font-semibold">Settings</h1>
</div>
<div className="card-body text-base-300 text-sm space-y-2">
<p>Environment variables will live in Vercel → Settings → Environment Variables.</p>
<ul className="list-disc ml-5">
<li>AIRTABLE_API_KEY</li>
<li>AIRTABLE_BASE_ID</li>
</ul>
<p className="text-base-400">(We’ll add read‑only Airtable fetching next.)</p>
</div>
</div>
)
}
