'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Lock, 
  LogOut, 
  Plus, 
  Trash2, 
  Edit3, 
  Save, 
  X, 
  Upload, 
  CheckCircle2, 
  Building2, 
  ShieldAlert,
  ArrowLeft,
  List,
  Mail,
  User,
  Inbox,
  Clock,
  Phone,
  MessageSquare,
  Image as ImageIcon,
  Layers,
  FileCheck
} from 'lucide-react';
import ConfirmModal from '@/components/ConfirmModal';

interface ClientItem {
  id: string;
  name: string;
  logo: string;
  category: string;
  displayOrder: number;
}

interface SubmissionItem {
  id: string;
  formType: 'contact' | 'quote' | 'career';
  name: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  createdAt: string;
}

export default function AdminPanelPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  const [activeTab, setActiveTab] = useState<'clients' | 'inquiries'>('clients');

  const [clients, setClients] = useState<ClientItem[]>([]);
  const [submissions, setSubmissions] = useState<SubmissionItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Form states for Add/Edit
  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Corporate Client');
  const [logo, setLogo] = useState('');
  const [useNoLogo, setUseNoLogo] = useState(false);
  const [displayOrder, setDisplayOrder] = useState<number>(1);
  const [uploading, setUploading] = useState(false);

  // Branded delete-confirmation modal state
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [deleteType, setDeleteTargetType] = useState<'client' | 'submission'>('client');

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/admin/session');
        const data = await res.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
          fetchClients();
          fetchSubmissions();
        }
      } catch (err) {
        console.error('Session check failed:', err);
      }
    })();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setLoggingIn(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usernameOrEmail, password }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setIsAuthenticated(true);
        setPassword('');
        fetchClients();
        fetchSubmissions();
      } else {
        setLoginError(data.error || 'Invalid Username/Email or Password.');
      }
    } catch (err) {
      setLoginError('Something went wrong. Please try again.');
    } finally {
      setLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setIsAuthenticated(false);
      setClients([]);
      setSubmissions([]);
    }
  };

  const fetchClients = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/clients');
      if (res.ok) {
        const data = await res.json();
        setClients(data);
        setDisplayOrder(data.length + 1);
      }
    } catch (err) {
      console.error('Error fetching clients:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSubmissions = async () => {
    try {
      const res = await fetch('/api/admin/submissions');
      if (res.ok) {
        const data = await res.json();
        if (data.submissions) {
          setSubmissions(data.submissions);
        }
      }
    } catch (err) {
      console.error('Error fetching submissions:', err);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setLogo(data.url);
        setUseNoLogo(false);
        setMessage('Logo uploaded successfully!');
      } else {
        setMessage('Failed to upload image. Please check file type (PNG, JPG, SVG, WEBP).');
      }
    } catch (err) {
      console.error('Upload error:', err);
      setMessage('Upload error. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    const finalLogo = useNoLogo ? '' : logo;

    if (editingId) {
      try {
        const res = await fetch('/api/clients', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: editingId,
            name,
            logo: finalLogo,
            category,
            displayOrder
          })
        });

        if (res.ok) {
          setMessage('Client updated successfully!');
          resetForm();
          fetchClients();
        }
      } catch (err) {
        setMessage('Failed to update client.');
      }
    } else {
      try {
        const res = await fetch('/api/clients', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            logo: finalLogo,
            category,
            displayOrder
          })
        });

        if (res.ok) {
          setMessage('New client added successfully!');
          resetForm();
          fetchClients();
        }
      } catch (err) {
        setMessage('Failed to add client.');
      }
    }
  };

  const handleEdit = (client: ClientItem) => {
    setEditingId(client.id);
    setName(client.name);
    setCategory(client.category);
    setLogo(client.logo || '');
    setUseNoLogo(!client.logo);
    setDisplayOrder(client.displayOrder);
  };

  const handleDeleteClient = (id: string) => {
    setDeleteTargetType('client');
    setDeleteTargetId(id);
  };

  const handleDeleteSubmission = (id: string) => {
    setDeleteTargetType('submission');
    setDeleteTargetId(id);
  };

  const confirmDelete = async () => {
    if (!deleteTargetId) return;
    const id = deleteTargetId;
    setDeleteTargetId(null);

    if (deleteType === 'client') {
      try {
        const res = await fetch(`/api/clients?id=${id}`, {
          method: 'DELETE',
        });

        if (res.ok) {
          setMessage('Client deleted successfully!');
          fetchClients();
        }
      } catch (err) {
        setMessage('Failed to delete client.');
      }
    } else {
      try {
        const res = await fetch(`/api/admin/submissions?id=${id}`, {
          method: 'DELETE',
        });

        if (res.ok) {
          setMessage('Inquiry submission deleted successfully!');
          fetchSubmissions();
        }
      } catch (err) {
        setMessage('Failed to delete inquiry.');
      }
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setName('');
    setCategory('Corporate Client');
    setLogo('');
    setUseNoLogo(false);
    setDisplayOrder(clients.length + 1);
  };

  const getInitials = (orgName: string) => {
    if (!orgName) return 'TE';
    const parts = orgName.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 3).toUpperCase();
    return parts.map(p => p[0]).join('').substring(0, 3).toUpperCase();
  };

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-2xl space-y-6 border border-gray-200">
          
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-brand-navy/10 text-brand-navy rounded-full mx-auto flex items-center justify-center font-bold">
              <Lock className="w-8 h-8 text-brand-navy" />
            </div>
            <h1 className="text-2xl font-extrabold text-gray-900">
              Tayaba Enterprises Admin
            </h1>
            <p className="text-xs text-gray-500">
              Control Panel &amp; Database Management
            </p>
          </div>

          {loginError && (
            <div className="bg-rose-50 border border-rose-200 text-rose-800 p-3 rounded-lg text-xs font-semibold flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 flex-shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="admin-username" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Admin Username or Email *
              </label>
              <div className="relative">
                <input
                  id="admin-username"
                  type="text"
                  required
                  value={usernameOrEmail}
                  placeholder="Enter Username or Email"
                  onChange={(e) => setUsernameOrEmail(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                />
                <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
              </div>
            </div>

            <div>
              <label htmlFor="admin-password" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Admin Password *
              </label>
              <div className="relative">
                <input
                  id="admin-password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                />
                <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loggingIn}
              className="w-full bg-brand-navy hover:bg-brand-navy-dark text-white font-bold py-3.5 rounded-lg shadow transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Lock className="w-4 h-4" />
              <span>{loggingIn ? 'Verifying...' : 'Login to Admin Panel'}</span>
            </button>
          </form>

          <div className="pt-4 border-t border-gray-100 text-center">
            <Link href="/" className="text-xs text-brand-green font-semibold hover:underline flex items-center justify-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Main Website
            </Link>
          </div>

        </div>
      </div>
    );
  }

  // DASHBOARD SCREEN
  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl">
          <div>
            <span className="text-emerald-300 text-xs font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/15">
              Admin Control Center
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Tayaba Enterprises Admin Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Manage corporate client partners, logo showcase, and review customer inquiry submissions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/clients"
              target="_blank"
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-4 py-2.5 rounded-lg border border-white/20 transition flex items-center gap-2"
            >
              <span>View Live Website</span>
            </Link>

            <button
              onClick={handleLogout}
              className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg shadow transition flex items-center gap-1.5"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex gap-3 mb-8 border-b border-gray-200 pb-3">
          <button
            onClick={() => setActiveTab('clients')}
            className={`px-5 py-3 rounded-xl font-bold text-sm transition flex items-center gap-2.5 ${
              activeTab === 'clients'
                ? 'bg-brand-navy text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Building2 className="w-4 h-4 text-brand-green" />
            <span>Clients Logo Management ({clients.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-5 py-3 rounded-xl font-bold text-sm transition flex items-center gap-2.5 ${
              activeTab === 'inquiries'
                ? 'bg-brand-navy text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Inbox className="w-4 h-4 text-brand-green" />
            <span>Inquiries &amp; Leads ({submissions.length})</span>
          </button>
        </div>

        {message && (
          <div className="mb-6 bg-emerald-50 border border-emerald-300 text-emerald-950 p-4 rounded-xl text-sm font-semibold flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
              <span>{message}</span>
            </div>
            <button onClick={() => setMessage('')} className="text-emerald-800 hover:text-emerald-950">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* TAB 1: CLIENTS LOGO MANAGEMENT */}
        {activeTab === 'clients' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Form Column: Add / Edit Client */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  {editingId ? <Edit3 className="w-5 h-5 text-brand-navy" /> : <Plus className="w-5 h-5 text-brand-green" />}
                  {editingId ? 'Edit Client Partner' : 'Add New Client Partner'}
                </h2>
                {editingId && (
                  <button
                    onClick={resetForm}
                    className="text-xs text-gray-500 hover:text-gray-900 underline flex items-center gap-1"
                  >
                    <X className="w-3.5 h-3.5" /> Cancel Edit
                  </button>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Section 1: Basic Information */}
                <div className="space-y-4">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-brand-navy border-b border-gray-100 pb-1 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-brand-green" /> 1. Basic Information
                  </div>

                  <div>
                    <label htmlFor="admin-client-name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Organization Name *
                    </label>
                    <input
                      id="admin-client-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Siemens or Pakistan State Oil"
                      className="w-full bg-slate-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>

                  <div>
                    <label htmlFor="admin-client-category" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Industry / Category *
                    </label>
                    <input
                      id="admin-client-category"
                      type="text"
                      required
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      placeholder="e.g. Corporate Client, Energy & Oil, Higher Education..."
                      className="w-full bg-slate-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>
                </div>

                {/* Section 2: Logo Image File Upload */}
                <div className="space-y-4 pt-2">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-brand-navy border-b border-gray-100 pb-1 flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-brand-green" /> 2. Logo Upload &amp; Preview
                  </div>

                  {!useNoLogo ? (
                    <div className="space-y-3">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Upload Logo File (PNG, JPG, WEBP, SVG)
                      </label>

                      <label className="border-2 border-dashed border-gray-300 hover:border-brand-green bg-slate-50 hover:bg-emerald-50/50 rounded-xl p-5 text-center flex flex-col items-center justify-center cursor-pointer transition">
                        <Upload className="w-6 h-6 text-brand-green mb-1" />
                        <span className="text-xs font-bold text-gray-800">
                          {uploading ? 'Uploading image...' : 'Click to select logo file from PC'}
                        </span>
                        <span className="text-[11px] text-gray-500 mt-1">
                          PNG, JPG, WEBP, or SVG up to 5MB
                        </span>
                        <input
                          type="file"
                          accept="image/png,image/jpeg,image/webp,image/svg+xml"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>

                      {/* Live Thumbnail Preview */}
                      {logo && (
                        <div className="p-3 bg-slate-50 rounded-xl border border-gray-200 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 overflow-hidden">
                            <div className="relative w-14 h-10 bg-white rounded border border-gray-200 p-1 flex-shrink-0 flex items-center justify-center">
                              <Image
                                src={logo}
                                alt="Logo preview"
                                fill
                                className="object-contain p-1"
                              />
                            </div>
                            <span className="text-xs text-gray-600 truncate font-mono">{logo}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setLogo('')}
                            className="p-1 text-gray-400 hover:text-rose-600"
                            title="Remove logo"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-center gap-3">
                      <div className="w-12 h-10 rounded bg-slate-200 text-brand-navy flex items-center justify-center font-bold text-xs flex-shrink-0">
                        {getInitials(name)}
                      </div>
                      <div>
                        <p className="font-bold">Initials Fallback Badge Selected</p>
                        <p className="text-[11px] text-emerald-800 mt-0.5">This client will render with initials &quot;{getInitials(name)}&quot; in a stylized badge.</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      id="admin-no-logo"
                      type="checkbox"
                      checked={useNoLogo}
                      onChange={(e) => setUseNoLogo(e.target.checked)}
                      className="w-4 h-4 text-brand-green rounded border-gray-300 focus:ring-brand-green"
                    />
                    <label htmlFor="admin-no-logo" className="text-xs text-gray-700 font-semibold cursor-pointer">
                      Save without logo file (Use Organization Initials Fallback)
                    </label>
                  </div>
                </div>

                {/* Section 3: Display Order */}
                <div className="space-y-2 pt-2">
                  <label htmlFor="admin-client-order" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Display Grid Order Number
                  </label>
                  <input
                    id="admin-client-order"
                    type="number"
                    min={1}
                    value={displayOrder}
                    onChange={(e) => setDisplayOrder(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full text-white font-bold py-3.5 rounded-xl shadow transition flex items-center justify-center gap-2 ${
                    editingId ? 'bg-brand-navy hover:bg-brand-navy-dark' : 'bg-brand-green hover:bg-brand-green-hover'
                  }`}
                >
                  <Save className="w-4 h-4" />
                  <span>{editingId ? 'Save Client Changes' : 'Add Client Partner'}</span>
                </button>
              </form>
            </div>

            {/* List Column: Existing Clients */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <List className="w-5 h-5 text-brand-navy" />
                  Current Clients List ({clients.length})
                </h2>
                <span className="text-xs text-gray-500 font-semibold">Sorted by Order</span>
              </div>

              {loading ? (
                <div className="py-16 text-center text-gray-500 text-sm">
                  Loading client database...
                </div>
              ) : clients.length === 0 ? (
                <div className="py-16 text-center text-gray-500 text-sm">
                  No clients found in data store.
                </div>
              ) : (
                <div className="space-y-3 max-h-[620px] overflow-y-auto pr-1">
                  {clients.map((client) => (
                    <div
                      key={client.id}
                      className="p-3.5 bg-slate-50 hover:bg-slate-100/90 rounded-xl border border-gray-200 flex items-center justify-between gap-4 transition"
                    >
                      <div className="flex items-center gap-3.5 overflow-hidden">
                        {client.logo ? (
                          <div className="relative w-14 h-10 bg-white rounded-lg border border-gray-200 p-1 flex-shrink-0 flex items-center justify-center">
                            <Image
                              src={client.logo}
                              alt={client.name}
                              fill
                              className="object-contain p-1"
                            />
                          </div>
                        ) : (
                          <div className="w-14 h-10 rounded-lg bg-emerald-100 text-brand-green flex items-center justify-center font-bold text-xs flex-shrink-0">
                            {getInitials(client.name)}
                          </div>
                        )}

                        <div className="truncate">
                          <div className="font-bold text-gray-900 text-sm truncate">{client.name}</div>
                          <div className="text-[11px] text-gray-500 flex items-center gap-2 mt-0.5">
                            <span className="bg-gray-200 text-gray-700 px-1.5 py-0.2 rounded font-medium">{client.category}</span>
                            <span>Order #{client.displayOrder}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          onClick={() => handleEdit(client)}
                          className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition"
                          title="Edit Client"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleDeleteClient(client.id)}
                          className="p-2 text-rose-600 hover:text-rose-800 hover:bg-rose-50 rounded-lg transition"
                          title="Delete Client"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

        {/* TAB 2: INQUIRIES & LEADS MANAGEMENT */}
        {activeTab === 'inquiries' && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Inbox className="w-5 h-5 text-brand-navy" />
                Submitted Customer Inquiries ({submissions.length})
              </h2>
              <button
                onClick={fetchSubmissions}
                className="text-xs text-brand-navy hover:underline font-bold flex items-center gap-1"
              >
                <span>Refresh List</span>
              </button>
            </div>

            {submissions.length === 0 ? (
              <div className="py-16 text-center text-gray-500 text-sm">
                <MessageSquare className="w-10 h-10 mx-auto text-gray-300 mb-2" />
                No inquiries or quote requests stored in database yet.
              </div>
            ) : (
              <div className="space-y-4">
                {submissions.map((sub) => (
                  <div
                    key={sub.id}
                    className="p-4 bg-slate-50 rounded-xl border border-gray-200 space-y-2 hover:border-gray-300 transition"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 pb-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                          sub.formType === 'quote' ? 'bg-amber-100 text-amber-800' :
                          sub.formType === 'career' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {sub.formType === 'quote' ? 'Quote Request' : sub.formType === 'career' ? 'Career App' : 'General Inquiry'}
                        </span>
                        <span className="font-bold text-gray-900 text-sm">{sub.name}</span>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-gray-400" />
                          {new Date(sub.createdAt).toLocaleString()}
                        </span>

                        <button
                          onClick={() => handleDeleteSubmission(sub.id)}
                          className="text-rose-600 hover:text-rose-800 hover:bg-rose-50 p-1 rounded transition"
                          title="Delete Submission"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs text-gray-700 font-medium">
                      <a href={`mailto:${sub.email}`} className="flex items-center gap-1.5 text-brand-navy hover:underline">
                        <Mail className="w-3.5 h-3.5 text-brand-green" /> {sub.email}
                      </a>
                      {sub.phone && (
                        <a href={`tel:${sub.phone}`} className="flex items-center gap-1.5 text-gray-700 hover:underline">
                          <Phone className="w-3.5 h-3.5 text-brand-green" /> {sub.phone}
                        </a>
                      )}
                    </div>

                    <p className="text-xs text-gray-800 bg-white p-3 rounded-lg border border-gray-200 leading-relaxed whitespace-pre-wrap">
                      {sub.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

      {/* Branded delete-confirmation modal */}
      <ConfirmModal
        open={deleteTargetId !== null}
        title={deleteType === 'client' ? "Delete Client Entry?" : "Delete Inquiry?"}
        message={
          deleteType === 'client'
            ? "This will permanently remove the client from the live website. This action cannot be undone."
            : "This will permanently delete this lead inquiry from the database."
        }
        confirmLabel="Yes, Delete"
        cancelLabel="Cancel"
        tone="danger"
        onConfirm={confirmDelete}
        onCancel={() => setDeleteTargetId(null)}
      />
    </div>
  );
}
