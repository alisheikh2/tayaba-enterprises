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
  MessageSquare
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
  const [logo, setLogo] = useState('/images/clients/siemens.png');
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
        setMessage('Logo image uploaded successfully!');
      } else {
        setMessage('Failed to upload image');
      }
    } catch (err) {
      console.error('Upload error:', err);
      setMessage('Upload error');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    if (editingId) {
      try {
        const res = await fetch('/api/clients', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: editingId,
            name,
            logo,
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
            logo,
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
    setLogo(client.logo);
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
    setLogo('/images/clients/siemens.png');
    setDisplayOrder(clients.length + 1);
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
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Admin Username or Email *
              </label>
              <div className="relative">
                <input
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
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Admin Password *
              </label>
              <div className="relative">
                <input
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
    <div className="min-h-screen bg-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Dashboard Header */}
        <div className="bg-brand-navy text-white rounded-2xl p-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-lg">
          <div>
            <span className="text-brand-green text-xs font-bold uppercase tracking-wider bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-800">
              Admin Control Panel
            </span>
            <h1 className="text-2xl font-extrabold text-white mt-1">
              Tayaba Enterprises Admin Dashboard
            </h1>
            <p className="text-xs text-slate-300 mt-0.5">
              Manage client organizations, logo grid, and view customer quote &amp; contact inquiries.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/clients"
              target="_blank"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-4 py-2 rounded-lg border border-white/20 transition flex items-center gap-1.5"
            >
              <span>View Public Page</span>
            </Link>

            <button
              onClick={handleLogout}
              className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-4 py-2 rounded-lg shadow transition flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex gap-2 mb-6 border-b border-gray-200 pb-2">
          <button
            onClick={() => setActiveTab('clients')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 ${
              activeTab === 'clients'
                ? 'bg-brand-navy text-white shadow'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Clients Logo Management ({clients.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2 ${
              activeTab === 'inquiries'
                ? 'bg-brand-navy text-white shadow'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Inbox className="w-4 h-4" />
            <span>Inquiries &amp; Leads ({submissions.length})</span>
          </button>
        </div>

        {message && (
          <div className="mb-6 bg-emerald-50 border border-emerald-300 text-emerald-900 p-4 rounded-xl text-sm font-semibold flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-green" />
              <span>{message}</span>
            </div>
            <button onClick={() => setMessage('')} className="text-emerald-700 hover:text-emerald-950">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* TAB 1: CLIENTS LOGO MANAGEMENT */}
        {activeTab === 'clients' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Form: Add / Edit Client */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
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

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Client Organization Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Siemens or Pakistan State Oil"
                    className="w-full bg-slate-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Category / Industry
                  </label>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="e.g. Energy & Oil or Higher Education"
                    className="w-full bg-slate-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Display Order
                  </label>
                  <input
                    type="number"
                    value={displayOrder}
                    onChange={(e) => setDisplayOrder(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Client Logo Image
                  </label>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={logo}
                        onChange={(e) => setLogo(e.target.value)}
                        placeholder="/images/clients/siemens.png"
                        className="w-full bg-slate-50 border border-gray-300 rounded-lg p-2.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-brand-green"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <label className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-3 py-2 rounded-lg border border-gray-300 cursor-pointer flex items-center gap-1.5 transition">
                        <Upload className="w-3.5 h-3.5 text-brand-green" />
                        <span>{uploading ? 'Uploading...' : 'Upload Logo File'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                      <span className="text-[11px] text-gray-500">Supports PNG, SVG, JPG</span>
                    </div>
                  </div>

                  {logo && (
                    <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center gap-3">
                      <div className="relative w-16 h-12 bg-white rounded border border-gray-200 p-1 flex items-center justify-center">
                        <Image
                          src={logo}
                          alt="Logo preview"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <span className="text-xs text-gray-600 truncate font-mono">{logo}</span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className={`w-full text-white font-bold py-3 rounded-lg shadow transition flex items-center justify-center gap-2 ${
                    editingId ? 'bg-brand-navy hover:bg-brand-navy-dark' : 'bg-brand-green hover:bg-brand-green-hover'
                  }`}
                >
                  <Save className="w-4 h-4" />
                  <span>{editingId ? 'Save Changes' : 'Add Client Partner'}</span>
                </button>
              </form>
            </div>

            {/* Right List: Existing Clients */}
            <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <List className="w-5 h-5 text-brand-navy" />
                  Current Clients List ({clients.length})
                </h2>
                <span className="text-xs text-gray-500">Sorted by Display Order</span>
              </div>

              {loading ? (
                <div className="py-12 text-center text-gray-500 text-sm">
                  Loading client database...
                </div>
              ) : clients.length === 0 ? (
                <div className="py-12 text-center text-gray-500 text-sm">
                  No clients found in data store.
                </div>
              ) : (
                <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
                  {clients.map((client) => (
                    <div
                      key={client.id}
                      className="p-3 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-gray-200 flex items-center justify-between gap-4 transition"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-14 h-10 bg-white rounded border border-gray-200 p-1 flex-shrink-0 flex items-center justify-center">
                          <Image
                            src={client.logo}
                            alt={client.name}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-sm">{client.name}</div>
                          <div className="text-[11px] text-gray-500">
                            {client.category} • Order: #{client.displayOrder}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          onClick={() => handleEdit(client)}
                          className="p-1.5 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition"
                          title="Edit Client"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleDeleteClient(client.id)}
                          className="p-1.5 text-rose-600 hover:text-rose-800 hover:bg-rose-50 rounded-lg transition"
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
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Inbox className="w-5 h-5 text-brand-navy" />
                Submitted Customer Inquiries ({submissions.length})
              </h2>
              <button
                onClick={fetchSubmissions}
                className="text-xs text-brand-navy hover:underline font-semibold"
              >
                Refresh List
              </button>
            </div>

            {submissions.length === 0 ? (
              <div className="py-16 text-center text-gray-500 text-sm">
                <MessageSquare className="w-10 h-10 mx-auto text-gray-300 mb-2" />
                No inquiries or quote requests stored in MongoDB yet.
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
