import React, { useState } from 'react';

export default function ProfilePage({ user, onNavigate, onLogout, onUpdateUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
  });
  const [newPassword, setNewPassword] = useState('');
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    sms: false,
    marketing: true,
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdateUser({
      ...user,
      ...formData,
    });
    setIsEditing(false);
  };

  const handleChangePassword = () => {
    if (newPassword.length >= 8) {
      alert('Password changed successfully!');
      setNewPassword('');
      setShowPasswordForm(false);
    }
  };

  const toggleNotification = (key) => {
    setNotificationSettings(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            ←
            Back to Dashboard
          </button>
          <button
            onClick={onLogout}
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm transition"
          >
            Sign Out
          </button>
        </div>

        {/* Profile Header Card */}
        <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 rounded-full shadow-lg border-4 border-purple-500/50"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
              <p className="text-gray-300 mb-4">{user.email}</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/50 text-green-300 text-sm">✓ Verified</span>
                <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-300 text-sm">Premium Member</span>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2 transition"
            >
              ✏️
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
          </div>
        </div>

        {/* Edit Profile */}
        {isEditing && (
          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Edit Profile</h2>
            <div className="space-y-6">
              <div className="group">
                <label className="block text-sm font-medium text-gray-200 mb-2">Full Name</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-purple-400">👤</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleEditChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-200 mb-2">Email Address</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-purple-400">✉️</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleEditChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition"
                  />
                </div>
              </div>

              <button
                onClick={handleSave}
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
              >
                💾 Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Account Information */}
        <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            👤 Account Information
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-gray-400">✉️</span>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium">{user.email}</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-semibold">Verified</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-gray-400">📅</span>
                <div>
                  <p className="text-gray-400 text-sm">Member Since</p>
                  <p className="text-white font-medium">{user.joinDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            🔑 Security
          </h2>
          
          {!showPasswordForm ? (
            <button
              onClick={() => setShowPasswordForm(true)}
              className="w-full py-3 px-4 bg-white/5 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
            >
              🔒 Change Password
            </button>
          ) : (
            <div className="space-y-4">
              <div className="group">
                <label className="block text-sm font-medium text-gray-200 mb-2">Current Password</label>
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-gray-200 mb-2">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password (min. 8 characters)"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleChangePassword}
                  disabled={newPassword.length < 8}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition disabled:opacity-50"
                >
                  Update Password
                </button>
                <button
                  onClick={() => {
                    setShowPasswordForm(false);
                    setNewPassword('');
                  }}
                  className="flex-1 py-3 px-4 bg-white/5 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Notifications */}
        <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            🔔 Notification Preferences
          </h2>
          <div className="space-y-4">
            {[
              { key: 'email', label: 'Email Notifications', description: 'Receive updates via email' },
              { key: 'sms', label: 'SMS Notifications', description: 'Get alerts on your phone' },
              { key: 'marketing', label: 'Marketing Emails', description: 'Information about new features' },
            ].map((notification) => (
              <div key={notification.key} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <div>
                  <p className="text-white font-medium">{notification.label}</p>
                  <p className="text-gray-400 text-sm">{notification.description}</p>
                </div>
                <button
                  onClick={() => toggleNotification(notification.key)}
                  className={`relative w-12 h-7 rounded-full transition ${
                    notificationSettings[notification.key] ? 'bg-purple-600' : 'bg-white/10'
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition transform ${
                      notificationSettings[notification.key] ? 'translate-x-5' : ''
                    }`}
                  ></div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
