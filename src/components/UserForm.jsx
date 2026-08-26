import React, { useState, useEffect } from 'react';
import { questionnaire } from '../data/questions';
import { UploadCloud, X, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const [urlLinks, setUrlLinks] = useState(['']);

  // Load from local storage draft if available
  useEffect(() => {
    const draft = localStorage.getItem('moreidea_form_draft');
    if (draft) {
      try {
        const parsed = JSON.parse(draft);
        setFormData(parsed.formData || {});
        setUrlLinks(parsed.urlLinks || ['']);
      } catch (e) {
        console.error("Could not load draft");
      }
    }
  }, []);

  // Save draft on change
  useEffect(() => {
    if ((Object.keys(formData).length > 0 || urlLinks.some(l => l.trim() !== '')) && !isSubmitted) {
      localStorage.setItem('moreidea_form_draft', JSON.stringify({formData, urlLinks}));
    }
  }, [formData, urlLinks, isSubmitted]);

  const handleChange = (qId, value, type) => {
    if (type === 'checkbox') {
      const currentValues = formData[qId] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      setFormData({ ...formData, [qId]: newValues });
    } else {
      setFormData({ ...formData, [qId]: value });
    }
  };

  const handleLinkChange = (index, value) => {
    const newLinks = [...urlLinks];
    newLinks[index] = value;
    setUrlLinks(newLinks);
  };

  const addLinkField = () => {
    setUrlLinks([...urlLinks, '']);
  };

  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files);
    
    // Convert files to Base64 to simulate real file storage
    const readAsDataURL = (file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (ev) => resolve({
          id: Math.random().toString(36).substring(2, 9),
          name: file.name,
          size: file.size,
          type: file.type,
          dataUrl: ev.target.result
        });
        reader.readAsDataURL(file);
      });
    };

    const fileObjects = await Promise.all(files.map(readAsDataURL));
    
    // Check if it will exceed localStorage limits (approx 5MB)
    try {
      const testStorage = JSON.stringify([...uploadedFiles, ...fileObjects]);
      if (testStorage.length > 4500000) {
        alert("Warning: Total file size is too large for local simulation. Please upload smaller files or use links.");
        return;
      }
      setUploadedFiles([...uploadedFiles, ...fileObjects]);
    } catch (err) {
      alert("Storage limit exceeded.");
    }
  };

  const removeFile = (index) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validLinks = urlLinks.filter(l => l.trim() !== '');
    
    const submissions = JSON.parse(localStorage.getItem('moreidea_submissions') || '[]');
    const newSubmission = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      data: formData,
      files: uploadedFiles,
      links: validLinks
    };
    
    localStorage.setItem('moreidea_submissions', JSON.stringify([...submissions, newSubmission]));
    localStorage.removeItem('moreidea_form_draft'); // clear draft
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="main-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <div className="form-card" style={{ textAlign: 'center', maxWidth: '500px' }}>
          <CheckCircle size={64} color="var(--secondary)" style={{ margin: '0 auto 1.5rem' }} />
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Thank You!</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Your detailed responses have been submitted successfully. This will greatly help us in crafting the perfect direction for your new website.
          </p>
          <button className="btn btn-outline" onClick={() => navigate('/admin')}>
            Go to Admin Dashboard (Demo)
          </button>
        </div>
      </div>
    );
  }

  const currentPart = questionnaire[currentStep];

  return (
    <div className="layout">
      <aside className="sidebar">
        <h3 className="sidebar-title">Questionnaire Sections</h3>
        <ul className="step-list">
          {questionnaire.map((part, index) => (
            <li key={part.id} className="step-item">
              <button
                className={`step-link ${currentStep === index ? 'active' : ''}`}
                onClick={() => setCurrentStep(index)}
                type="button"
              >
                {index + 1}. {part.title.split('—')[1] || part.title}
              </button>
            </li>
          ))}
          <li className="step-item">
            <button
              className={`step-link ${currentStep === questionnaire.length ? 'active' : ''}`}
              onClick={() => setCurrentStep(questionnaire.length)}
              type="button"
            >
              {questionnaire.length + 1}. Upload Documents
            </button>
          </li>
        </ul>
      </aside>

      <main className="form-content">
        <div className="mobile-nav">
          <select 
            value={currentStep} 
            onChange={(e) => setCurrentStep(Number(e.target.value))}
          >
            {questionnaire.map((part, index) => (
              <option key={part.id} value={index}>
                {index + 1}. {part.title.split('—')[1] || part.title}
              </option>
            ))}
            <option value={questionnaire.length}>
              {questionnaire.length + 1}. Upload Documents
            </option>
          </select>
        </div>
        <div className="form-card">
          {currentStep < questionnaire.length ? (
            <>
              <div className="form-header">
                <h2>{currentPart.title}</h2>
                <p>Please answer the following questions to the best of your ability. <span style={{color: 'var(--primary)', fontWeight: 500}}>Answering all questions is not compulsory. If you feel questions are not related to the website, you can ignore them.</span> However, providing detailed answers helps us generate better ideas.</p>
              </div>

              <div className="questions-container">
                {currentPart.questions.map((q) => (
                  <div key={q.id} className="question-block">
                    <label className="question-label">
                      {q.text}
                      <span className="optional-tag">Optional</span>
                    </label>

                    {q.type === 'textarea' && (
                      <textarea
                        className="input-field"
                        placeholder="Type your answer here..."
                        value={formData[q.id] || ''}
                        onChange={(e) => handleChange(q.id, e.target.value, 'textarea')}
                      />
                    )}

                    {q.type === 'text' && (
                      <input
                        type="text"
                        className="input-field"
                        placeholder="Type your answer here..."
                        value={formData[q.id] || ''}
                        onChange={(e) => handleChange(q.id, e.target.value, 'text')}
                      />
                    )}

                    {q.type === 'radio' && (
                      <div className="radio-group">
                        {q.options.map((opt) => (
                          <label key={opt} className="radio-label">
                            <input
                              type="radio"
                              name={q.id}
                              value={opt}
                              checked={formData[q.id] === opt}
                              onChange={(e) => handleChange(q.id, e.target.value, 'radio')}
                            />
                            {opt}
                          </label>
                        ))}
                        {formData[q.id] === 'Other' && (
                          <div style={{marginTop: '0.5rem', paddingLeft: '0.5rem'}}>
                            <input
                              type="text"
                              className="input-field"
                              placeholder="Please specify..."
                              value={formData[`${q.id}_other`] || ''}
                              onChange={(e) => handleChange(`${q.id}_other`, e.target.value, 'text')}
                              style={{padding: '0.6rem 1rem'}}
                              autoFocus
                            />
                          </div>
                        )}
                      </div>
                    )}

                    {q.type === 'checkbox' && (
                      <div className="checkbox-group">
                        {q.options.map((opt) => {
                          const isChecked = (formData[q.id] || []).includes(opt);
                          return (
                            <label key={opt} className="checkbox-label">
                              <input
                                type="checkbox"
                                value={opt}
                                checked={isChecked}
                                onChange={(e) => handleChange(q.id, e.target.value, 'checkbox')}
                              />
                              {opt}
                            </label>
                          );
                        })}
                        {(formData[q.id] || []).includes('Other') && (
                          <div style={{marginTop: '0.5rem', paddingLeft: '0.5rem'}}>
                            <input
                              type="text"
                              className="input-field"
                              placeholder="Please specify..."
                              value={formData[`${q.id}_other`] || ''}
                              onChange={(e) => handleChange(`${q.id}_other`, e.target.value, 'text')}
                              style={{padding: '0.6rem 1rem'}}
                              autoFocus
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="form-header">
                <h2>Upload Documents</h2>
                <p>Please attach any relevant documents, CAD designs, company profiles, or other files that might help.</p>
              </div>

              <div className="question-block">
                <label htmlFor="file-upload" className="file-upload-zone" style={{display: 'block'}}>
                  <UploadCloud size={48} className="file-upload-icon" />
                  <h3 style={{marginBottom: '0.5rem'}}>Click or drag files to upload</h3>
                  <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Support for PDF, DOCX, JPG, PNG, CAD files, etc.</p>
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    style={{display: 'none'}}
                    onChange={handleFileUpload}
                  />
                </label>

                {uploadedFiles.length > 0 && (
                  <div className="file-list">
                    <h4 style={{marginBottom: '1rem'}}>Attached Files:</h4>
                    {uploadedFiles.map((file, idx) => (
                      <div key={idx} className="file-item">
                        <span style={{fontWeight: 500}}>{file.name}</span>
                        <button type="button" className="remove-file" onClick={() => removeFile(idx)}>
                          <X size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div style={{marginTop: '2rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem'}}>
                  <h4 style={{marginBottom: '1rem'}}>Or Provide URL Links (Google Drive, Dropbox, etc.):</h4>
                  {urlLinks.map((link, idx) => (
                    <div key={idx} style={{display: 'flex', gap: '0.5rem', marginBottom: '0.5rem'}}>
                      <input
                        type="url"
                        className="input-field"
                        placeholder="https://..."
                        value={link}
                        onChange={(e) => handleLinkChange(idx, e.target.value)}
                      />
                    </div>
                  ))}
                  <button type="button" className="btn btn-outline" style={{marginTop: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.9rem'}} onClick={addLinkField}>
                    + Add another link
                  </button>
                </div>
              </div>
            </>
          )}

          <div className="form-actions">
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
            >
              <ChevronLeft size={18} /> Previous
            </button>
            
            {currentStep < questionnaire.length ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setCurrentStep(prev => prev + 1)}
              >
                Next Section <ChevronRight size={18} />
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit Questionnaire <CheckCircle size={18} style={{marginLeft: '0.5rem'}} />
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserForm;
