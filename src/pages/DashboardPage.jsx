import React, { useState } from 'react';

export default function DashboardPage({ user, onNavigate, onLogout }) {
  const [stats] = useState([
    { label: 'Total Users', value: '12,458', icon: '👥', color: 'from-blue-500 to-cyan-500' },
    { label: 'Active Sessions', value: '2,891', icon: '⚡', color: 'from-purple-500 to-pink-500' },
    { label: 'Growth Rate', value: '+23.5%', icon: '📈', color: 'from-green-500 to-emerald-500' },
    { label: 'Security Score', value: '98%', icon: '🛡️', color: 'from-orange-500 to-red-500' },
  ]);

  const [activities] = useState([
    { id: 1, action: 'Logged in', time: '2 minutes ago', icon: '🔓' },
    { id: 2, action: 'Updated profile picture', time: '1 hour ago', icon: '📸' },
    { id: 3, action: 'Changed password', time: '5 hours ago', icon: '🔐' },
    { id: 4, action: 'Enabled two-factor authentication', time: 'Yesterday', icon: '✓' },
    { id: 5, action: 'Downloaded security report', time: '2 days ago', icon: '📄' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto absolute -top-96 left-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-gray-300">Welcome back, <span className="text-purple-400 font-semibold">{user.name}</span>! 👋</p>
          </div>
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={() => onNavigate('profile')}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
            >
              👤 Profile
            </button>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white transition"
            >
              🚪 Sign Out
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 hover:bg-white/20 transition group">
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${stat.color} transition`}></div>
              <div className="relative">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 text-2xl`}>
                  {stat.icon}
                </div>
                <h3 className="text-gray-300 text-sm mb-1">{stat.label}</h3>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{activity.icon}</div>
                      <div>
                        <p className="text-white font-medium">{activity.action}</p>
                        <p className="text-gray-300 opacity-20 text-sm">{activity.time}</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-lg transition">
                      ⋯
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* User Profile Card */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 text-center h-full">
              <div className="mb-6">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-24 h-24 rounded-full mx-auto shadow-lg border-4 border-purple-500/50"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{user.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{user.email}</p>
              
              <div className="space-y-3 mb-8 px-4">
                <div className="text-left p-3 rounded-lg bg-white/5">
                  <p className="text-gray-400 text-xs">Member since</p>
                  <p className="text-white font-semibold">{user.joinDate}</p>
                </div>
                <div className="text-left p-3 rounded-lg bg-white/5">
                  <p className="text-gray-400 text-xs">Account Status</p>
                  <p className="text-green-400 font-semibold">✓ Verified</p>
                </div>
              </div>

              <button
                onClick={() => onNavigate('profile')}
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
              >
                ⚙️ Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <div className="text-3xl mb-3">🔐</div>
              <h3 className="text-white font-semibold mb-2">Secure Authentication</h3>
              <p className="text-gray-300 text-sm">Enterprise-grade security with encrypted credentials</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-white font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-gray-300 text-sm">Track your activity with comprehensive statistics</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-white font-semibold mb-2">Fast & Responsive</h3>
              <p className="text-gray-300 text-sm">Optimized performance across all devices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
