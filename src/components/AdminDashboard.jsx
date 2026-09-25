import React, { useState, useEffect } from 'react';
import { 
  questionnaire, 
  recommendations, 
  materialsChecklist, 
  coverFields, 
  totalPart1Questions 
} from '../data/questions';
import { 
  Users, 
  FileText, 
  Database, 
  ChevronLeft, 
  Calendar, 
  Paperclip, 
  Lock, 
  User, 
  Trash2, 
  Download, 
  ExternalLink, 
  Image as ImageIcon, 
  FolderOpen, 
  X, 
  Check, 
  Mail, 
  Phone, 
  CheckCircle, 
  ListChecks, 
  Sparkles 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  
  const [submissions, setSubmissions] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [currentTab, setCurrentTab] = useState('submissions'); // 'submissions' or 'files'
  const [previewFile, setPreviewFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem('inedible_admin_auth') === 'true' || sessionStorage.getItem('moreidea_admin_auth') === 'true') {
      setIsAuthenticated(true);
    }
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    try {
      const response = await fetch('/api/submissions');
      if (response.ok) {
        const data = await response.json();
        setSubmissions(data);
      }
    } catch (error) {
      console.error('Error fetching submissions:', error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const u = username.trim().toLowerCase();
    const p = password.trim();
    if (
      (u === 'admin' && p === 'admin123') ||
      (u === 'moreidealabs' && p === 'moreidealabs@123') ||
      (u === 'designblast' && p === 'designblast@123') ||
      (u === 'inedible' && p === 'inedible@123') ||
      (u === 'moreideabalsuser' && p === 'moreidealabsquesitonn@1234')
    ) {
      setIsAuthenticated(true);
      setLoginError(false);
      sessionStorage.setItem('inedible_admin_auth', 'true');
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('inedible_admin_auth');
    sessionStorage.removeItem('moreidea_admin_auth');
  };

  const handleBack = () => {
    setSelectedSubmission(null);
  };

  const handleDeleteSubmission = async (id, e) => {
    if (e) e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this submission? This action cannot be undone.')) {
      try {
        const response = await fetch(`/api/submissions/${id}`, { method: 'DELETE' });
        if (response.ok) {
          const updatedSubmissions = submissions.filter(sub => sub.id !== id);
          setSubmissions(updatedSubmissions);
          if (selectedSubmission && selectedSubmission.id === id) {
            setSelectedSubmission(null);
          }
        } else {
          alert('Failed to delete submission');
        }
      } catch (error) {
        console.error('Error deleting submission:', error);
      }
    }
  };

  const handleDeleteFile = async (subId, fileId) => {
    if (window.confirm('Are you sure you want to delete this file permanently?')) {
      try {
        const response = await fetch(`/api/submissions/${subId}/files/${fileId}`, { method: 'DELETE' });
        if (response.ok) {
          const updatedSubmissions = submissions.map(sub => {
            if (sub.id === subId) {
              return {
                ...sub,
                files: sub.files.filter(f => f.id !== fileId)
              };
            }
            return sub;
          });
          setSubmissions(updatedSubmissions);
          
          if (selectedSubmission && selectedSubmission.id === subId) {
            setSelectedSubmission(updatedSubmissions.find(s => s.id === subId));
          }
        } else {
          alert('Failed to delete file');
        }
      } catch (error) {
        console.error('Error deleting file:', error);
      }
    }
  };

  const exportToCSV = () => {
    if (submissions.length === 0) {
      alert("No submissions to export");
      return;
    }

    let csvContent = "data:text/csv;charset=utf-8,";
    
    // Headers
    const headers = [
      "Submission ID", 
      "Date", 
      "Filled By (Name & Role)", 
      "Phone / WhatsApp", 
      "Email", 
      "Date Completed"
    ];

    // Part 1 Questions
    const allQuestions = [];
    questionnaire.forEach(sec => {
      sec.questions.forEach(q => {
        allQuestions.push(q);
        headers.push(`"${q.text.replace(/"/g, '""')}"`);
      });
    });

    // Part 2 Recommendations
    recommendations.forEach(rec => {
      headers.push(`"Part 2: ${rec.num}. ${rec.title.replace(/"/g, '""')}"`);
      headers.push(`"Part 2: ${rec.num}. ${rec.title.replace(/"/g, '""')} - Notes"`);
    });
    headers.push('"Part 2: Other Features"');

    // Part 3 Materials Checklist
    materialsChecklist.forEach(item => {
      headers.push(`"Part 3: ${item.num}. ${item.text.replace(/"/g, '""')}"`);
    });

    // Links
    headers.push('"Shared Links"');

    csvContent += headers.join(",") + "\r\n";

    submissions.forEach(sub => {
      const data = sub.data || {};
      const row = [
        `"${sub.id}"`,
        `"${new Date(sub.date).toLocaleString()}"`,
        `"${(data.client_name || '').replace(/"/g, '""')}"`,
        `"${(data.client_phone || '').replace(/"/g, '""')}"`,
        `"${(data.client_email || '').replace(/"/g, '""')}"`,
        `"${(data.client_date || '').replace(/"/g, '""')}"`
      ];

      // Part 1 Answers
      allQuestions.forEach(q => {
        const pills = data[q.id];
        const textAns = data[`${q.id}_text`];
        let answerParts = [];
        if (Array.isArray(pills) && pills.length > 0) {
          answerParts.push(`Selected: ${pills.join(', ')}`);
        } else if (pills && typeof pills === 'string') {
          answerParts.push(pills);
        }
        if (textAns && textAns.trim() !== '') {
          answerParts.push(textAns.trim());
        }
        const fullAns = answerParts.join(' | ');
        row.push(`"${fullAns.replace(/"/g, '""')}"`);
      });

      // Part 2 Recommendations
      recommendations.forEach(rec => {
        const val = data[rec.id] || '';
        const notes = data[`${rec.id}_notes`] || '';
        row.push(`"${val.replace(/"/g, '""')}"`);
        row.push(`"${notes.replace(/"/g, '""')}"`);
      });
      row.push(`"${(data.rec_other || '').replace(/"/g, '""')}"`);

      // Part 3 Checklist
      materialsChecklist.forEach(item => {
        const val = data[item.id] || '';
        row.push(`"${val.replace(/"/g, '""')}"`);
      });

      // Links
      const links = (sub.links || []).join('; ');
      row.push(`"${links.replace(/"/g, '""')}"`);

      csvContent += row.join(",") + "\r\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `inEdible_discovery_questionnaire_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-container">
        <div className="admin-login form-card" style={{ maxWidth: '420px', margin: '4rem auto' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#FCE7F3', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
            <Lock size={32} color="var(--primary)" />
          </div>
          <h2 style={{ color: 'var(--primary)', marginBottom: '0.5rem', textAlign: 'center', fontWeight: 800 }}>Admin Access</h2>
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', fontSize: '0.95rem', marginBottom: '2rem' }}>
            Sign in to view inEdible discovery submissions & materials.
          </p>
          
          <form className="login-form" onSubmit={handleLogin}>
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ position: 'relative' }}>
                <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input 
                  type="text" 
                  placeholder="Username (e.g. moreidealabs or admin)" 
                  className="input-field" 
                  style={{ paddingLeft: '2.5rem' }}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="input-field" 
                  style={{ paddingLeft: '2.5rem' }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            
            {loginError && (
              <p style={{ color: '#ef4444', fontSize: '0.9rem', textAlign: 'left', marginBottom: '1rem' }}>
                Invalid credentials. Please try again.
              </p>
            )}
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
              Sign In to Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // File Manager View
  if (currentTab === 'files') {
    const allFiles = [];
    const allLinks = [];
    
    submissions.forEach(sub => {
      if (sub.files) {
        sub.files.forEach(f => {
          allFiles.push({ ...f, submissionId: sub.id, subDate: sub.date, clientName: sub.data?.client_name || 'Client' });
        });
      }
      if (sub.links) {
        sub.links.forEach(l => {
          allLinks.push({ url: l, submissionId: sub.id, subDate: sub.date, clientName: sub.data?.client_name || 'Client' });
        });
      }
    });

    return (
      <div className="admin-container">
        <div className="dashboard-header">
          <div>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: '700', letterSpacing: '-0.02em' }}>File Manager</h2>
            <p style={{ color: 'var(--text-muted)' }}>Uploaded documents, photos, and Google Drive links</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-outline" onClick={() => setCurrentTab('submissions')}>
              Back to Submissions
            </button>
          </div>
        </div>

        {allFiles.length === 0 && allLinks.length === 0 ? (
          <div className="empty-state">
            <FolderOpen size={56} color="var(--border-color)" style={{ margin: '0 auto 1.5rem' }} />
            <h3 style={{ color: 'var(--text-main)' }}>No files uploaded yet</h3>
            <p>Uploaded documents, product images, and Drive links will appear here.</p>
          </div>
        ) : (
          <div className="detail-view">
            {allLinks.length > 0 && (
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)' }}>
                  <ExternalLink size={20}/> Shared Google Drive & External Links ({allLinks.length})
                </h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {allLinks.map((linkObj, idx) => (
                    <div key={idx} style={{ background: '#f8fafc', padding: '1rem 1.25rem', borderRadius: '8px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                      <div style={{ flex: 1, minWidth: '250px' }}>
                        <a href={linkObj.url} target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all', fontWeight: 600, color: 'var(--primary)' }}>
                          {linkObj.url}
                        </a>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                          From: {linkObj.clientName} • Submission #{linkObj.submissionId.substring(linkObj.submissionId.length - 6)} • {new Date(linkObj.subDate).toLocaleDateString()}
                        </p>
                      </div>
                      <a href={linkObj.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}>
                        Open in New Tab <ExternalLink size={14} style={{ marginLeft: '4px' }} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {allFiles.length > 0 && (
              <div>
                <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)' }}>
                  <Paperclip size={20}/> Uploaded Files ({allFiles.length})
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
                  {allFiles.map((file, idx) => {
                    const isImage = file.type && file.type.startsWith('image/');
                    return (
                      <div key={idx} style={{ background: '#f8fafc', borderRadius: '8px', border: '1px solid var(--border-color)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        {isImage && file.dataUrl ? (
                          <div style={{ height: '150px', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', cursor: 'pointer' }} onClick={() => setPreviewFile(file)}>
                            <img src={file.dataUrl} alt={file.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                        ) : (
                          <div style={{ height: '150px', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={() => setPreviewFile(file)}>
                            <FileText size={48} color="var(--text-muted)" />
                          </div>
                        )}
                        <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                          <h4 style={{ fontSize: '0.95rem', marginBottom: '0.25rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={file.name}>{file.name}</h4>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                            {(file.size / 1024).toFixed(1)} KB • {file.clientName}
                          </p>
                          <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                            {file.dataUrl && (
                              <a href={file.dataUrl} download={file.name} className="btn btn-primary" style={{ padding: '0.4rem', flex: 1, fontSize: '0.85rem', display: 'flex', justifyContent: 'center' }}>
                                <Download size={14} /> 
                              </a>
                            )}
                            <button className="btn btn-danger" style={{ padding: '0.4rem', flex: 1, display: 'flex', justifyContent: 'center' }} onClick={() => handleDeleteFile(file.submissionId, file.id)}>
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // Detailed Submission View
  if (selectedSubmission) {
    const data = selectedSubmission.data || {};

    return (
      <div className="admin-container">
        <div className="dashboard-header">
          <button className="btn btn-outline" onClick={handleBack}>
            <ChevronLeft size={18} /> Back to All Submissions
          </button>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-danger" onClick={() => handleDeleteSubmission(selectedSubmission.id)}>
              <Trash2 size={16} /> Delete Submission
            </button>
          </div>
        </div>

        <div className="detail-view">
          {/* Client Details Header Card */}
          <div style={{ background: '#FAF5F8', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.5rem 2rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  SUBMISSION #{selectedSubmission.id.substring(selectedSubmission.id.length - 6)}
                </span>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginTop: '0.2rem', fontWeight: 800 }}>
                  {data.client_name || 'Anonymous Client'}
                </h2>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <Calendar size={16} />
                Submitted on {new Date(selectedSubmission.date).toLocaleString()}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', fontWeight: 600 }}>Phone / WhatsApp:</span>
                <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{data.client_phone || '—'}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', fontWeight: 600 }}>Email:</span>
                <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{data.client_email || '—'}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', fontWeight: 600 }}>Date Completed:</span>
                <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{data.client_date || '—'}</span>
              </div>
            </div>
          </div>

          {/* Links and Attachments */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {/* Cloud Links */}
            <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>
                <ExternalLink size={18} /> Provided Cloud Links ({selectedSubmission.links?.length || 0})
              </h4>
              {selectedSubmission.links && selectedSubmission.links.length > 0 ? (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem' }}>
                  {selectedSubmission.links.map((link, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>
                      <a href={link} target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all', color: 'var(--primary)', fontWeight: 500 }}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>No external links provided.</p>
              )}
            </div>

            {/* Attached Files */}
            <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>
                <Paperclip size={18} /> Uploaded Files ({selectedSubmission.files?.length || 0})
              </h4>
              {selectedSubmission.files && selectedSubmission.files.length > 0 ? (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem' }}>
                  {selectedSubmission.files.map((file, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F8FAFC', padding: '0.5rem 0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                      <button 
                        style={{ border: 'none', background: 'transparent', textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px', cursor: 'pointer', color: 'var(--primary)', fontWeight: 500, padding: 0 }} 
                        title={`Preview ${file.name}`}
                        onClick={() => setPreviewFile(file)}
                      >
                        {file.name}
                      </button>
                      <div style={{ display: 'flex', gap: '0.25rem' }}>
                        {file.dataUrl && (
                          <a href={file.dataUrl} download={file.name} className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }} title="Download File">
                            <Download size={14} />
                          </a>
                        )}
                        <button className="btn btn-danger" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }} onClick={() => handleDeleteFile(selectedSubmission.id, file.id)} title="Delete File">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>No files uploaded directly.</p>
              )}
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '2px solid var(--border-color)', margin: '0 0 2.5rem 0' }} />

          {/* PART 1: 20 SECTIONS */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: 800 }}>
              Part 1 — Discovery Questions (Q1–Q205)
            </h2>

            {questionnaire.map((sec) => {
              const answeredQuestions = sec.questions.filter(q => {
                const ans = data[q.id];
                const textAns = data[`${q.id}_text`];
                return (ans && (Array.isArray(ans) ? ans.length > 0 : String(ans).trim() !== '')) || (textAns && String(textAns).trim() !== '');
              });

              return (
                <div key={sec.id} className="detail-section" style={{ background: '#FFFFFF', padding: '1.5rem 2rem', borderRadius: '10px', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                    <h3 style={{ color: 'var(--primary)', fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
                      {sec.title}
                    </h3>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      {answeredQuestions.length}/{sec.questions.length} answered
                    </span>
                  </div>

                  {answeredQuestions.length === 0 ? (
                    <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '0.9rem', margin: 0 }}>
                      No answers provided in this section yet.
                    </p>
                  ) : (
                    <div>
                      {answeredQuestions.map(q => {
                        const pills = data[q.id];
                        const textAns = data[`${q.id}_text`];

                        return (
                          <div key={q.id} style={{ marginBottom: '1.5rem' }}>
                            <p className="detail-q" style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.4rem', fontSize: '0.98rem' }}>
                              {q.text}
                            </p>
                            <div className="detail-a" style={{ background: '#FAF6F8', padding: '0.85rem 1.25rem', borderRadius: '6px', borderLeft: '3px solid var(--primary)' }}>
                              {Array.isArray(pills) && pills.length > 0 && (
                                <div style={{ marginBottom: textAns ? '0.5rem' : '0' }}>
                                  <span style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Selected: </span>
                                  <span style={{ fontWeight: 600 }}>{pills.join(', ')}</span>
                                </div>
                              )}
                              {textAns && (
                                <p style={{ margin: 0, whiteSpace: 'pre-wrap', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                                  {textAns}
                                </p>
                              )}
                              {!Array.isArray(pills) && pills && (
                                <p style={{ margin: 0, whiteSpace: 'pre-wrap', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                                  {pills}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* PART 2: RECOMMENDATIONS */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: 800 }}>
              Part 2 — Recommended Features
            </h2>
            <div style={{ background: '#FFFFFF', padding: '1.5rem 2rem', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {recommendations.map(rec => {
                  const val = data[rec.id];
                  const notes = data[`${rec.id}_notes`];

                  let badgeColor = '#64748B';
                  if (val === 'At launch') badgeColor = '#059669';
                  if (val === 'Later') badgeColor = '#2563EB';

                  return (
                    <div key={rec.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f1f5f9' }}>
                      <div style={{ flex: '1 1 300px' }}>
                        <strong style={{ color: 'var(--text-main)' }}>{rec.num}. {rec.title}</strong>
                        {notes && (
                          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.2rem', margin: 0 }}>
                            <em>Note: {notes}</em>
                          </p>
                        )}
                      </div>
                      <div>
                        {val ? (
                          <span style={{ background: badgeColor, color: '#FFFFFF', padding: '0.25rem 0.65rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700 }}>
                            {val}
                          </span>
                        ) : (
                          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Not answered</span>
                        )}
                      </div>
                    </div>
                  );
                })}
                {data.rec_other && (
                  <div style={{ marginTop: '1rem', background: '#FAF6F8', padding: '1rem', borderRadius: '6px' }}>
                    <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.25rem' }}>Other Feature Request:</strong>
                    <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{data.rec_other}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* PART 3: MATERIALS CHECKLIST */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: 800 }}>
              Part 3 — Materials Checklist
            </h2>
            <div style={{ background: '#FFFFFF', padding: '1.5rem 2rem', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {materialsChecklist.map(item => {
                  const val = data[item.id];
                  let statusBg = '#64748B';
                  if (val === 'Ready') statusBg = '#059669';
                  if (val === 'In progress') statusBg = '#D97706';
                  if (val === 'Need help') statusBg = '#DC2626';

                  return (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #f1f5f9' }}>
                      <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 500 }}>
                        {item.num}. {item.text}
                      </span>
                      <div>
                        {val ? (
                          <span style={{ background: statusBg, color: '#FFFFFF', padding: '0.25rem 0.65rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700 }}>
                            {val}
                          </span>
                        ) : (
                          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Not marked</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Submissions Overview
  return (
    <div className="admin-container">
      <div className="dashboard-header">
        <div>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: '800', letterSpacing: '-0.02em' }}>
            inEdible Submissions
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Client Discovery Responses & Assets • MoreIdeaLabs
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn btn-outline" onClick={() => setCurrentTab('files')} style={{ backgroundColor: 'var(--surface-color)', color: 'var(--primary)', borderColor: 'var(--primary)' }}>
            <FolderOpen size={16} /> File Manager
          </button>
          <button className="btn btn-outline" onClick={exportToCSV} style={{ backgroundColor: 'var(--surface-color)' }}>
            <Download size={16} /> Export CSV
          </button>
          <button className="btn btn-outline" onClick={() => navigate('/')}>
            View Live Form
          </button>
          <button className="btn btn-outline" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <Database size={24} />
          </div>
          <div className="stat-content">
            <h3>Total Submissions</h3>
            <p>{submissions.length}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <Users size={24} />
          </div>
          <div className="stat-content">
            <h3>Recent Submissions</h3>
            <p>{
              submissions.filter(s => {
                const diffTime = Math.abs(new Date() - new Date(s.date));
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
                return diffDays <= 7;
              }).length
            }</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <FileText size={24} />
          </div>
          <div className="stat-content">
            <h3>Total Attachments</h3>
            <p>{
              submissions.reduce((acc, curr) => acc + (curr.files ? curr.files.length : 0) + (curr.links ? curr.links.length : 0), 0)
            }</p>
          </div>
        </div>
      </div>

      <div className="table-container">
        {submissions.length === 0 ? (
          <div className="empty-state">
            <FileText size={56} color="var(--border-color)" style={{ margin: '0 auto 1.5rem' }} />
            <h3 style={{ color: 'var(--text-main)' }}>No submissions yet</h3>
            <p>When the client submits their responses, their discovery data will appear here.</p>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Submission ID</th>
                <th>Client Name / Role</th>
                <th>Date</th>
                <th>Part 1 Answers</th>
                <th>Attachments</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub, idx) => {
                const data = sub.data || {};
                let answerCount = 0;
                for (let i = 1; i <= totalPart1Questions; i++) {
                  const qKey = `q${i}`;
                  if (data[qKey] || data[`${qKey}_text`]) answerCount++;
                }

                const isNew = idx === 0 && (new Date() - new Date(sub.date)) < 86400000;
                const attachmentCount = (sub.files?.length || 0) + (sub.links?.length || 0);
                
                return (
                  <tr key={sub.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontFamily: 'monospace', fontWeight: 600, color: 'var(--primary)' }}>
                          #{sub.id.substring(sub.id.length - 6)}
                        </span>
                        {isNew && <span className="badge badge-new">New</span>}
                      </div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>
                        {data.client_name || 'Anonymous Client'}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {data.client_email || data.client_phone || 'No contact specified'}
                      </div>
                    </td>
                    <td>
                      <span style={{ fontWeight: 500 }}>{new Date(sub.date).toLocaleDateString()}</span>{' '}
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{new Date(sub.date).toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' })}</span>
                    </td>
                    <td>
                      <span style={{ fontWeight: 600, color: 'var(--primary)' }}>{answerCount}</span>{' '}
                      <span style={{ color: 'var(--text-muted)' }}>/ {totalPart1Questions}</span>
                    </td>
                    <td>
                      {attachmentCount > 0 ? (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontWeight: 500 }}>
                          <Paperclip size={16} /> {attachmentCount}
                        </span>
                      ) : (
                        <span style={{ color: 'var(--text-muted)' }}>None</span>
                      )}
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button 
                          className="btn btn-outline" 
                          style={{ padding: '0.4rem 0.75rem', fontSize: '0.85rem' }}
                          onClick={() => setSelectedSubmission(sub)}
                        >
                          View Details
                        </button>
                        <button 
                          className="btn btn-danger" 
                          style={{ padding: '0.4rem 0.75rem', fontSize: '0.85rem' }}
                          onClick={(e) => handleDeleteSubmission(sub.id, e)}
                          title="Delete submission"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {previewFile && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <button onClick={() => setPreviewFile(null)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
            <X size={24} color="#333" />
          </button>
          {previewFile.type && previewFile.type.startsWith('image/') && previewFile.dataUrl ? (
            <img src={previewFile.dataUrl} alt={previewFile.name} style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 8px 30px rgba(0,0,0,0.5)' }} />
          ) : (
            <div style={{ background: 'white', padding: '3rem', borderRadius: '8px', textAlign: 'center', maxWidth: '400px' }}>
              <FileText size={64} style={{ margin: '0 auto 1rem', color: 'var(--text-muted)' }} />
              <h3 style={{ wordBreak: 'break-all' }}>{previewFile.name}</h3>
              <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>Preview is only available for images.</p>
            </div>
          )}
          {previewFile.dataUrl && (
            <a href={previewFile.dataUrl} download={previewFile.name} className="btn btn-primary" style={{ marginTop: '1.5rem', padding: '0.75rem 2rem' }}>
              <Download size={18} /> Download {previewFile.name}
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
