"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      setError("Invalid credentials. Env me ADMIN_USERNAME/ADMIN_PASSWORD_HASH set karo.");
      return;
    }

    router.push("/admin/dashboard");
  }

  return (
    <div className="mx-auto max-w-md glass-card rounded-2xl p-6">
      <h1 className="text-2xl font-bold text-neonPink">Admin Login</h1>
      <form onSubmit={handleLogin} className="mt-4 space-y-3">
        <input className="w-full rounded-lg bg-black/40 p-3" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="w-full rounded-lg bg-black/40 p-3" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error ? <p className="text-sm text-red-300">{error}</p> : null}
        <button className="w-full rounded-lg bg-neonPink/80 px-4 py-2 font-semibold text-black">Login</button>
      </form>
    </div>
  );
}
