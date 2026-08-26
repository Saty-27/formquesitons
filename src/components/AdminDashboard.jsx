import React, { useState, useEffect } from 'react';
import { questionnaire } from '../data/questions';
import { Users, FileText, Database, ChevronLeft, Calendar, Paperclip, Lock, User, Trash2, Download, ExternalLink, Image as ImageIcon, FolderOpen, X } from 'lucide-react';
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
    if (sessionStorage.getItem('moreidea_admin_auth') === 'true') {
      setIsAuthenticated(true);
    }
    loadSubmissions();
  }, []);

  const loadSubmissions = () => {
    const data = JSON.parse(localStorage.getItem('moreidea_submissions') || '[]');
    data.sort((a, b) => new Date(b.date) - new Date(a.date));
    setSubmissions(data);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'moreideabalsuser' && password === 'moreidealabsquesitonn@1234') {
      setIsAuthenticated(true);
      setLoginError(false);
      sessionStorage.setItem('moreidea_admin_auth', 'true');
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('moreidea_admin_auth');
  };

  const handleBack = () => {
    setSelectedSubmission(null);
  };

  const handleDeleteSubmission = (id, e) => {
    if (e) e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this submission? This action cannot be undone.')) {
      const updatedSubmissions = submissions.filter(sub => sub.id !== id);
      localStorage.setItem('moreidea_submissions', JSON.stringify(updatedSubmissions));
      setSubmissions(updatedSubmissions);
      if (selectedSubmission && selectedSubmission.id === id) {
        setSelectedSubmission(null);
      }
    }
  };

  const handleDeleteFile = (subId, fileId) => {
    if (window.confirm('Are you sure you want to delete this file permanently?')) {
      const updatedSubmissions = submissions.map(sub => {
        if (sub.id === subId) {
          return {
            ...sub,
            files: sub.files.filter(f => f.id !== fileId)
          };
        }
        return sub;
      });
      localStorage.setItem('moreidea_submissions', JSON.stringify(updatedSubmissions));
      setSubmissions(updatedSubmissions);
      
      // Update selected submission if we are viewing it
      if (selectedSubmission && selectedSubmission.id === subId) {
        setSelectedSubmission(updatedSubmissions.find(s => s.id === subId));
      }
    }
  };

  const exportToCSV = () => {
    if (submissions.length === 0) {
      alert("No submissions to export");
      return;
    }

    let csvContent = "data:text/csv;charset=utf-8,";
    const allQuestions = [];
    questionnaire.forEach(part => {
      part.questions.forEach(q => {
        allQuestions.push(q);
      });
    });

    const headers = ["Submission ID", "Date"];
    allQuestions.forEach(q => headers.push(`"${q.id}"`));
    csvContent += headers.join(",") + "\r\n";

    submissions.forEach(sub => {
      const row = [
        `"${sub.id}"`,
        `"${new Date(sub.date).toLocaleString()}"`
      ];
      
      allQuestions.forEach(q => {
        let answer = sub.data[q.id];
        if (Array.isArray(answer)) {
          answer = answer.map(item => item === 'Other' && sub.data[`${q.id}_other`] ? `Other: ${sub.data[`${q.id}_other`]}` : item).join('; ');
        } else if (answer === 'Other' && sub.data[`${q.id}_other`]) {
          answer = `Other: ${sub.data[`${q.id}_other`]}`;
        }

        if (answer) {
          const escapedAnswer = answer.toString().replace(/"/g, '""');
          row.push(`"${escapedAnswer}"`);
        } else {
          row.push('""');
        }
      });
      csvContent += row.join(",") + "\r\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `moreidea_submissions_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-container">
        <div className="admin-login form-card">
          <Lock size={48} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
          <h2 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Admin Access</h2>
          <p style={{ color: 'var(--text-muted)' }}>Please enter your credentials to view submissions.</p>
          
          <form className="login-form" onSubmit={handleLogin}>
            <div>
              <div style={{ position: 'relative' }}>
                <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input 
                  type="text" 
                  placeholder="Username" 
                  className="input-field" 
                  style={{ paddingLeft: '2.5rem' }}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
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
              <p style={{ color: '#ef4444', fontSize: '0.9rem', textAlign: 'left' }}>Invalid username or password.</p>
            )}
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // File Manager View
  if (currentTab === 'files') {
    // Collect all files from all submissions
    const allFiles = [];
    const allLinks = [];
    
    submissions.forEach(sub => {
      if (sub.files) {
        sub.files.forEach(f => {
          allFiles.push({ ...f, submissionId: sub.id, subDate: sub.date });
        });
      }
      if (sub.links) {
        sub.links.forEach(l => {
          allLinks.push({ url: l, submissionId: sub.id, subDate: sub.date });
        });
      }
    });

    return (
      <div className="admin-container">
        <div className="dashboard-header">
          <div>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: '700', letterSpacing: '-0.02em' }}>File Manager</h2>
            <p style={{ color: 'var(--text-muted)' }}>View and manage all uploaded files and links across all submissions</p>
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
            <p>Uploaded documents and links will appear here.</p>
          </div>
        ) : (
          <div className="detail-view">
            {allLinks.length > 0 && (
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ExternalLink size={20}/> External URL Links</h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {allLinks.map((linkObj, idx) => (
                    <div key={idx} style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                      <div style={{ flex: 1, minWidth: '250px' }}>
                        <a href={linkObj.url} target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all', fontWeight: 500, color: 'var(--primary)' }}>{linkObj.url}</a>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>From Submission #{linkObj.submissionId.substring(linkObj.submissionId.length - 6)} • {new Date(linkObj.subDate).toLocaleDateString()}</p>
                      </div>
                      <a href={linkObj.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.4rem 0.75rem', fontSize: '0.85rem' }}>Open Link</a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {allFiles.length > 0 && (
              <div>
                <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Paperclip size={20}/> Uploaded Files & Images</h3>
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
                            {(file.size / 1024).toFixed(1)} KB • Sub #{file.submissionId.substring(file.submissionId.length - 6)}
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
    return (
      <div className="admin-container">
        <div className="dashboard-header">
          <button className="btn btn-outline" onClick={handleBack}>
            <ChevronLeft size={18} /> Back to Dashboard
          </button>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-danger" onClick={() => handleDeleteSubmission(selectedSubmission.id)}>
              <Trash2 size={16} /> Delete Submission
            </button>
          </div>
        </div>

        <div className="detail-view">
          <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                Submission ID: {selectedSubmission.id}
              </h3>
              <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={16} />
                {new Date(selectedSubmission.date).toLocaleString()}
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {selectedSubmission.links && selectedSubmission.links.length > 0 && (
                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', minWidth: '250px' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <ExternalLink size={16} /> Provided Links ({selectedSubmission.links.length})
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem' }}>
                    {selectedSubmission.links.map((link, idx) => (
                      <li key={idx} style={{ marginBottom: '0.25rem' }}>
                        <a href={link} target="_blank" rel="noopener noreferrer" style={{wordBreak: 'break-all'}}>{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedSubmission.files && selectedSubmission.files.length > 0 && (
                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', minWidth: '300px' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Paperclip size={16} /> Attached Files ({selectedSubmission.files.length})
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem' }}>
                    {selectedSubmission.files.map((file, idx) => (
                      <li key={idx} style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', padding: '0.5rem', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                        <button 
                          style={{ border: 'none', background: 'transparent', textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '180px', cursor: 'pointer', color: 'var(--primary)', fontWeight: 500, padding: 0 }} 
                          title={`Preview ${file.name}`}
                          onClick={() => setPreviewFile(file)}
                        >
                          {file.name}
                        </button>
                        <div style={{ display: 'flex', gap: '0.25rem' }}>
                          {file.dataUrl && (
                            <a href={file.dataUrl} download={file.name} className="btn btn-outline" style={{ padding: '0.25rem', border: 'none', background: '#e2e8f0' }} title="Download File">
                              <Download size={14} />
                            </a>
                          )}
                          <button className="btn btn-danger" style={{ padding: '0.25rem', border: 'none' }} onClick={() => handleDeleteFile(selectedSubmission.id, file.id)} title="Delete File">
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '0 0 2rem 0' }} />

          {questionnaire.map((part) => {
            const hasAnswers = part.questions.some(q => 
              selectedSubmission.data[q.id] && 
              (Array.isArray(selectedSubmission.data[q.id]) ? selectedSubmission.data[q.id].length > 0 : selectedSubmission.data[q.id].toString().trim() !== '')
            );

            if (!hasAnswers) return null;

            return (
              <div key={part.id} className="detail-section">
                <h3 style={{ color: 'var(--text-main)', marginBottom: '1.5rem', fontSize: '1.4rem', fontWeight: '700' }}>
                  {part.title}
                </h3>
                
                {part.questions.map(q => {
                  const answer = selectedSubmission.data[q.id];
                  if (!answer || (Array.isArray(answer) && answer.length === 0) || (typeof answer === 'string' && answer.trim() === '')) {
                    return null;
                  }

                  return (
                    <div key={q.id} style={{ marginBottom: '1.5rem' }}>
                      <p className="detail-q">{q.text}</p>
                      <div className="detail-a">
                        {Array.isArray(answer) ? (
                          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                            {answer.map((item, idx) => (
                              <li key={idx}>
                                {item === 'Other' && selectedSubmission.data[`${q.id}_other`]
                                  ? `Other: ${selectedSubmission.data[`${q.id}_other`]}`
                                  : item}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                            {answer === 'Other' && selectedSubmission.data[`${q.id}_other`]
                              ? `Other: ${selectedSubmission.data[`${q.id}_other`]}`
                              : answer}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Default Overview
  return (
    <div className="admin-container">
      <div className="dashboard-header">
        <div>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: '700', letterSpacing: '-0.02em' }}>Admin Dashboard</h2>
          <p style={{ color: 'var(--text-muted)' }}>Overview of all form submissions</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn btn-outline" onClick={() => setCurrentTab('files')} style={{ backgroundColor: 'var(--surface-color)', color: 'var(--primary)', borderColor: 'var(--primary)' }}>
            <FolderOpen size={16} /> File Manager
          </button>
          <button className="btn btn-outline" onClick={exportToCSV} style={{ backgroundColor: 'var(--surface-color)' }}>
            <Download size={16} /> Export CSV
          </button>
          <button className="btn btn-outline" onClick={() => navigate('/')}>
            Form View
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
            <h3>Recent (Last 7 Days)</h3>
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
            <p>When users submit the form, their data will appear here.</p>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Submission ID</th>
                <th>Date</th>
                <th>Answers</th>
                <th>Attachments</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub, idx) => {
                const answerCount = Object.keys(sub.data || {}).length;
                const isNew = idx === 0 && (new Date() - new Date(sub.date)) < 86400000;
                const attachmentCount = (sub.files?.length || 0) + (sub.links?.length || 0);
                
                return (
                  <tr key={sub.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontFamily: 'monospace', fontWeight: 600, color: 'var(--primary)' }}>#{sub.id.substring(sub.id.length - 6)}</span>
                        {isNew && <span className="badge badge-new">New</span>}
                      </div>
                    </td>
                    <td><span style={{ fontWeight: 500 }}>{new Date(sub.date).toLocaleDateString()}</span> <span style={{ color: 'var(--text-muted)' }}>{new Date(sub.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span></td>
                    <td><span style={{ fontWeight: 500 }}>{answerCount}</span> <span style={{ color: 'var(--text-muted)' }}>/ 114</span></td>
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
                          View
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
              <h3 style={{wordBreak: 'break-all'}}>{previewFile.name}</h3>
              <p style={{marginTop: '0.5rem', color: 'var(--text-muted)'}}>Preview is only available for images.</p>
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
