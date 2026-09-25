import React, { useState, useEffect, useMemo } from 'react';
import { 
  questionnaire, 
  recommendations, 
  materialsChecklist, 
  coverFields, 
  brandInfo, 
  totalPart1Questions 
} from '../data/questions';
import { 
  UploadCloud, 
  X, 
  CheckCircle, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  CheckSquare, 
  ListChecks, 
  FileText, 
  ExternalLink, 
  Save, 
  Check, 
  Clock, 
  AlertCircle 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  // Step 0: Cover & Client Info
  // Steps 1 to 20: Section A to T (questionnaire[0] to questionnaire[19])
  // Step 21: Part 2 Recommendations
  // Step 22: Part 3 Materials Checklist
  // Step 23: Upload Documents & Links
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [saveIndicator, setSaveIndicator] = useState(false);
  const navigate = useNavigate();

  const [urlLinks, setUrlLinks] = useState(['']);

  // Total steps
  // 0: Cover, 1-20: Part 1 sections, 21: Part 2, 22: Part 3, 23: Uploads
  const TOTAL_STEPS = 24;

  // Load from local storage draft if available
  useEffect(() => {
    const draft = localStorage.getItem('inedible_form_draft') || localStorage.getItem('moreidea_form_draft');
    if (draft) {
      try {
        const parsed = JSON.parse(draft);
        setFormData(parsed.formData || {});
        setUrlLinks(parsed.urlLinks && parsed.urlLinks.length > 0 ? parsed.urlLinks : ['']);
      } catch (e) {
        console.error("Could not load draft:", e);
      }
    }
  }, []);

  // Save draft on change
  useEffect(() => {
    if ((Object.keys(formData).length > 0 || urlLinks.some(l => l.trim() !== '')) && !isSubmitted) {
      localStorage.setItem('inedible_form_draft', JSON.stringify({ formData, urlLinks }));
      setSaveIndicator(true);
      const timer = setTimeout(() => setSaveIndicator(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [formData, urlLinks, isSubmitted]);

  const handleChange = (qId, value, type) => {
    if (type === 'checkbox-pill') {
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
    setUploadedFiles([...uploadedFiles, ...fileObjects]);
  };

  const removeFile = (index) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    
    const validLinks = urlLinks.filter(l => l.trim() !== '');
    const newSubmission = {
      data: formData,
      files: uploadedFiles,
      links: validLinks
    };
    
    try {
      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSubmission)
      });
      
      if (!response.ok) {
        throw new Error('Failed to save submission');
      }
      
      localStorage.removeItem('inedible_form_draft');
      localStorage.removeItem('moreidea_form_draft');
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('Failed to submit form. Please ensure the server is running and try again.');
    }
  };

  // Progress metrics
  const answeredPart1Count = useMemo(() => {
    let count = 0;
    for (let i = 1; i <= totalPart1Questions; i++) {
      const qKey = `q${i}`;
      const answer = formData[qKey];
      const answerText = formData[`${qKey}_text`];
      if (
        (answer && (Array.isArray(answer) ? answer.length > 0 : String(answer).trim() !== '')) ||
        (answerText && String(answerText).trim() !== '')
      ) {
        count++;
      }
    }
    return count;
  }, [formData]);

  const answeredRecsCount = useMemo(() => {
    return recommendations.filter(r => formData[r.id]).length;
  }, [formData]);

  const answeredChecklistCount = useMemo(() => {
    return materialsChecklist.filter(m => formData[m.id]).length;
  }, [formData]);

  if (isSubmitted) {
    return (
      <div className="main-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '65vh' }}>
        <div className="form-card" style={{ textAlign: 'center', maxWidth: '580px', padding: '3.5rem 3rem' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#FCE7F3', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
            <CheckCircle size={48} color="var(--primary)" />
          </div>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '2rem', fontWeight: 800 }}>
            Questionnaire Submitted!
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Thank you! Your discovery questionnaire for <strong>inEdible</strong> has been received by the MoreIdeaLabs team.
          </p>
          <div style={{ background: 'var(--bg-color)', padding: '1.25rem', borderRadius: '8px', marginBottom: '2rem', textAlign: 'left', border: '1px solid var(--border-color)', fontSize: '0.9rem', color: 'var(--text-main)' }}>
            <p style={{ marginBottom: '0.5rem' }}><strong>What happens next:</strong></p>
            <ul style={{ paddingLeft: '1.25rem', margin: 0, lineHeight: 1.6 }}>
              <li>We will review your answers and cross-reference them with your demo website.</li>
              <li>We will schedule a short strategy call to align on any open points.</li>
              <li>We will deliver the updated website architecture and project roadmap.</li>
            </ul>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-outline" onClick={() => navigate('/admin')}>
              Go to Admin Dashboard
            </button>
            <button className="btn btn-primary" onClick={() => { setIsSubmitted(false); setCurrentStep(0); }}>
              Review My Responses
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Determine active view
  const isCover = currentStep === 0;
  const isPart1Section = currentStep >= 1 && currentStep <= 20;
  const isPart2 = currentStep === 21;
  const isPart3 = currentStep === 22;
  const isUploads = currentStep === 23;

  const currentSection = isPart1Section ? questionnaire[currentStep - 1] : null;

  return (
    <div className="layout">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div style={{ padding: '0 0.5rem 1rem 0.5rem', borderBottom: '1px solid var(--border-color)', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Progress
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              {answeredPart1Count}/{totalPart1Questions} answered
            </span>
          </div>
          <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
            <div 
              style={{ 
                height: '100%', 
                background: 'linear-gradient(90deg, var(--primary), var(--secondary))', 
                width: `${(answeredPart1Count / totalPart1Questions) * 100}%`,
                transition: 'width 0.3s ease'
              }} 
            />
          </div>
          {saveIndicator && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--secondary)' }}>
              <Save size={12} /> Auto-saved draft
            </div>
          )}
        </div>

        <h3 className="sidebar-title">Questionnaire Index</h3>
        <ul className="step-list">
          {/* Cover */}
          <li className="step-item">
            <button
              className={`step-link ${currentStep === 0 ? 'active' : ''}`}
              onClick={() => setCurrentStep(0)}
              type="button"
            >
              <FileText size={16} style={{ marginRight: '6px', flexShrink: 0 }} />
              Cover & Overview
            </button>
          </li>

          {/* 20 Part 1 Sections */}
          <li style={{ padding: '0.5rem 0.75rem 0.25rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Part 1 — Questions (205)
          </li>
          {questionnaire.map((sec, idx) => {
            const stepIndex = idx + 1;
            const answeredInSec = sec.questions.filter(q => {
              const ans = formData[q.id];
              const ansText = formData[`${q.id}_text`];
              return (ans && (Array.isArray(ans) ? ans.length > 0 : String(ans).trim() !== '')) || (ansText && String(ansText).trim() !== '');
            }).length;

            return (
              <li key={sec.id} className="step-item">
                <button
                  className={`step-link ${currentStep === stepIndex ? 'active' : ''}`}
                  onClick={() => setCurrentStep(stepIndex)}
                  type="button"
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {sec.letter}. {sec.title.replace(`Section ${sec.letter} — `, '')}
                  </span>
                  <span style={{ fontSize: '0.75rem', opacity: 0.8, marginLeft: '6px', flexShrink: 0, fontWeight: 500 }}>
                    {answeredInSec}/{sec.questions.length}
                  </span>
                </button>
              </li>
            );
          })}

          {/* Part 2 Recommendations */}
          <li style={{ padding: '0.75rem 0.75rem 0.25rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Part 2 & 3
          </li>
          <li className="step-item">
            <button
              className={`step-link ${currentStep === 21 ? 'active' : ''}`}
              onClick={() => setCurrentStep(21)}
              type="button"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span>Part 2: Recommendations</span>
              <span style={{ fontSize: '0.75rem', opacity: 0.8, marginLeft: '6px', flexShrink: 0, fontWeight: 500 }}>
                {answeredRecsCount}/24
              </span>
            </button>
          </li>

          {/* Part 3 Checklist */}
          <li className="step-item">
            <button
              className={`step-link ${currentStep === 22 ? 'active' : ''}`}
              onClick={() => setCurrentStep(22)}
              type="button"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span>Part 3: Materials Checklist</span>
              <span style={{ fontSize: '0.75rem', opacity: 0.8, marginLeft: '6px', flexShrink: 0, fontWeight: 500 }}>
                {answeredChecklistCount}/16
              </span>
            </button>
          </li>

          {/* Upload Documents & Links */}
          <li className="step-item">
            <button
              className={`step-link ${currentStep === 23 ? 'active' : ''}`}
              onClick={() => setCurrentStep(23)}
              type="button"
            >
              <UploadCloud size={16} style={{ marginRight: '6px', flexShrink: 0 }} />
              Upload Files & Links
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className="form-content">
        {/* Mobile dropdown selector */}
        <div className="mobile-nav">
          <select 
            value={currentStep} 
            onChange={(e) => setCurrentStep(Number(e.target.value))}
          >
            <option value={0}>Cover & Overview</option>
            {questionnaire.map((sec, idx) => (
              <option key={sec.id} value={idx + 1}>
                {sec.letter}. {sec.title.replace(`Section ${sec.letter} — `, '')} ({sec.questions.length} Qs)
              </option>
            ))}
            <option value={21}>Part 2: Recommendations (24 features)</option>
            <option value={22}>Part 3: Materials Checklist (16 items)</option>
            <option value={23}>Upload Files & Google Drive</option>
          </select>
        </div>

        <div className="form-card">
          {/* STEP 0: COVER & INSTRUCTIONS */}
          {isCover && (
            <div>
              <div className="form-header" style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '2rem' }}>
                <div style={{ display: 'inline-block', background: '#FCE7F3', color: 'var(--primary)', padding: '0.35rem 0.85rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.05em' }}>
                  MOREIDEALABS
                </div>
                <h1 style={{ color: 'var(--primary)', fontSize: '2.4rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem' }}>
                  inEdible — Website Discovery Questionnaire
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                  Prepared by MoreIdeaLabs for inEdible Brand & Ecommerce Launch
                </p>
                <div style={{ background: '#FFF1F2', border: '1px solid #FECDD3', borderLeft: '4px solid var(--secondary)', padding: '0.85rem 1.25rem', borderRadius: '8px', marginTop: '1.25rem', color: '#9F1239', fontSize: '0.98rem' }}>
                  <strong>Note:</strong> You may skip any questions that you feel are not relevant or necessary. It is not mandatory to answer every question.
                </div>
              </div>

              {/* Instructions Callout */}
              <div style={{ background: '#FAF5F8', borderLeft: '4px solid var(--primary)', padding: '1.5rem', borderRadius: '0 8px 8px 0', marginBottom: '2.5rem' }}>
                <h3 style={{ color: 'var(--primary)', fontSize: '1.15rem', marginBottom: '0.75rem', fontWeight: 700 }}>
                  How to fill this questionnaire
                </h3>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                  <li><strong>205 questions across 20 sections</strong>, followed by recommended features and materials checklist.</li>
                  <li>Takes approximately <strong>60–90 minutes</strong>. You don't have to finish it in one sitting — your progress is <strong>auto-saved continuously</strong>.</li>
                  <li>Type your answers directly into the box under each question. Short answers and bullet points are fine.</li>
                  <li>If you don't know an answer yet, write <em>"Not sure"</em> or <em>"Let's discuss"</em> — we will cover it on our call.</li>
                  <li>Where options are provided, select what applies or enter custom specifications.</li>
                  <li style={{ color: '#B91C1C', fontWeight: 600 }}>
                    Please do NOT write passwords, bank or card details here. We'll collect them securely.
                  </li>
                </ul>
              </div>

              {/* Client Info Fields */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ color: 'var(--text-main)', fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Client Contact Information
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                  {coverFields.map((field) => (
                    <div key={field.id}>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type || "text"}
                        className="input-field"
                        placeholder={field.placeholder}
                        value={formData[field.id] || ''}
                        onChange={(e) => handleChange(field.id, e.target.value, 'text')}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 700 }}>Overview of Sections</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {questionnaire.map((s) => (
                    <div key={s.id}>
                      <strong style={{ color: 'var(--text-main)' }}>{s.letter}.</strong> {s.title.replace(`Section ${s.letter} — `, '')} ({s.questions.length} Qs)
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEPS 1 TO 20: PART 1 SECTIONS (A through T) */}
          {isPart1Section && currentSection && (
            <div>
              <div className="form-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ background: 'var(--primary)', color: 'white', fontWeight: 800, padding: '0.2rem 0.65rem', borderRadius: '6px', fontSize: '0.85rem' }}>
                    SECTION {currentSection.letter}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>
                    Questions {currentSection.questions[0].num}–{currentSection.questions[currentSection.questions.length - 1].num} of {totalPart1Questions}
                  </span>
                </div>
                <h2>{currentSection.title}</h2>
                <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.4rem' }}>
                  {currentSection.description}
                </p>
                <div style={{ background: '#FFF1F2', border: '1px solid #FECDD3', borderLeft: '4px solid var(--secondary)', padding: '0.65rem 1rem', borderRadius: '6px', marginTop: '0.75rem', color: '#9F1239', fontSize: '0.88rem' }}>
                  <strong>Note:</strong> You may skip any questions that you feel are not relevant or necessary. It is not mandatory to answer every question.
                </div>
              </div>

              <div className="questions-container">
                {currentSection.questions.map((q) => {
                  const hasPills = q.options && q.options.length > 0;
                  const currentSelectedPills = formData[q.id] || [];

                  return (
                    <div key={q.id} className="question-block" style={{ paddingBottom: '2.5rem', borderBottom: '1px solid var(--border-color)', marginBottom: '2.5rem' }}>
                      <div className="question-label" style={{ display: 'block', marginBottom: '0.75rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
                          <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)' }}>
                            {q.text}
                          </span>
                        </div>
                        {q.hint && (
                          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '0.35rem', marginInlineStart: '0.25rem' }}>
                            {q.hint}
                          </p>
                        )}
                      </div>

                      {/* Pill options if applicable */}
                      {hasPills && (
                        <div style={{ marginBottom: '1.25rem' }}>
                          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Select all that apply:
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {q.options.map((opt) => {
                              const isChecked = currentSelectedPills.includes(opt);
                              return (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() => handleChange(q.id, opt, 'checkbox-pill')}
                                  style={{
                                    padding: '0.45rem 0.9rem',
                                    borderRadius: '20px',
                                    border: isChecked ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                                    background: isChecked ? 'var(--primary)' : '#FFFFFF',
                                    color: isChecked ? '#FFFFFF' : 'var(--text-main)',
                                    fontSize: '0.88rem',
                                    fontWeight: isChecked ? 600 : 500,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.4rem',
                                    transition: 'all 0.15s ease'
                                  }}
                                >
                                  {isChecked && <Check size={14} />}
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Always provide answer section */}
                      <div style={{ marginTop: '0.75rem' }}>
                        <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Answer:
                        </label>
                        <textarea
                          className="input-field"
                          placeholder="Type your answer here..."
                          rows={hasPills ? 3 : 4}
                          value={hasPills ? (formData[`${q.id}_text`] || '') : (formData[q.id] || '')}
                          onChange={(e) => {
                            if (hasPills) {
                              handleChange(`${q.id}_text`, e.target.value, 'text');
                            } else {
                              handleChange(q.id, e.target.value, 'textarea');
                            }
                          }}
                          style={{ minHeight: hasPills ? '70px' : '90px' }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 21: PART 2 RECOMMENDATIONS */}
          {isPart2 && (
            <div>
              <div className="form-header">
                <div style={{ display: 'inline-block', background: '#FCE7F3', color: 'var(--primary)', padding: '0.3rem 0.75rem', borderRadius: '16px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  PART 2
                </div>
                <h2>Features We Recommend for inEdible</h2>
                <p>
                  Based on the demo design and what drives maximum sales for handmade beauty brands. Please mark each feature as <strong>At launch</strong>, <strong>Later</strong>, or <strong>Not needed</strong> to help us phase the project realistically.
                </p>
              </div>

              <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {recommendations.map((rec) => {
                  const currentValue = formData[rec.id];
                  const options = ["At launch", "Later", "Not needed"];

                  return (
                    <div 
                      key={rec.id} 
                      style={{ 
                        background: '#FAF6F8', 
                        border: '1px solid var(--border-color)', 
                        borderRadius: '10px', 
                        padding: '1.25rem 1.5rem',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.75rem' }}>
                        <div style={{ flex: '1 1 300px' }}>
                          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                            {rec.num}. {rec.title}
                          </h4>
                          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
                            {rec.description}
                          </p>
                        </div>

                        {/* Choice options */}
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                          {options.map((opt) => {
                            const isSelected = currentValue === opt;
                            let activeBg = 'var(--primary)';
                            if (opt === 'At launch') activeBg = '#059669'; // Emerald
                            if (opt === 'Later') activeBg = '#2563EB'; // Blue
                            if (opt === 'Not needed') activeBg = '#64748B'; // Slate

                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => handleChange(rec.id, opt, 'text')}
                                style={{
                                  padding: '0.4rem 0.85rem',
                                  borderRadius: '6px',
                                  border: isSelected ? `1px solid ${activeBg}` : '1px solid var(--border-color)',
                                  background: isSelected ? activeBg : '#FFFFFF',
                                  color: isSelected ? '#FFFFFF' : 'var(--text-main)',
                                  fontSize: '0.85rem',
                                  fontWeight: isSelected ? 700 : 500,
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.35rem'
                                }}
                              >
                                {isSelected && <Check size={14} />}
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Optional notes for this feature */}
                      <div style={{ marginTop: '0.5rem' }}>
                        <input
                          type="text"
                          className="input-field"
                          placeholder="Add comments or specific requirements (optional)..."
                          value={formData[`${rec.id}_notes`] || ''}
                          onChange={(e) => handleChange(`${rec.id}_notes`, e.target.value, 'text')}
                          style={{ fontSize: '0.85rem', padding: '0.5rem 0.75rem' }}
                        />
                      </div>
                    </div>
                  );
                })}

                {/* Additional Feature Request */}
                <div style={{ background: '#FFFFFF', border: '2px dashed var(--border-color)', borderRadius: '10px', padding: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>
                    Any other feature you'd like to add:
                  </h4>
                  <textarea
                    className="input-field"
                    placeholder="Describe any other custom feature, integration, or tool you want on the website..."
                    rows={3}
                    value={formData.rec_other || ''}
                    onChange={(e) => handleChange('rec_other', e.target.value, 'textarea')}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 22: PART 3 MATERIALS CHECKLIST */}
          {isPart3 && (
            <div>
              <div className="form-header">
                <div style={{ display: 'inline-block', background: '#FCE7F3', color: 'var(--primary)', padding: '0.3rem 0.75rem', borderRadius: '16px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  PART 3
                </div>
                <h2>Materials Checklist</h2>
                <p>
                  Please mark the status of each asset or item. Sharing ready files through one Google Drive folder avoids project delays and ensures smooth launch execution.
                </p>
              </div>

              <div style={{ display: 'grid', gap: '1rem', marginBottom: '2.5rem' }}>
                {materialsChecklist.map((item) => {
                  const currentValue = formData[item.id];
                  const options = ["Ready", "In progress", "Need help"];

                  return (
                    <div 
                      key={item.id} 
                      style={{ 
                        background: '#FAF6F8', 
                        border: '1px solid var(--border-color)', 
                        borderRadius: '8px', 
                        padding: '1rem 1.25rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem'
                      }}
                    >
                      <div style={{ flex: '1 1 320px' }}>
                        <span style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>
                          {item.num}. {item.text}
                        </span>
                      </div>

                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {options.map((opt) => {
                          const isSelected = currentValue === opt;
                          let activeColor = '#059669'; // Ready -> Green
                          if (opt === 'In progress') activeColor = '#D97706'; // Amber
                          if (opt === 'Need help') activeColor = '#DC2626'; // Red

                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => handleChange(item.id, opt, 'text')}
                              style={{
                                padding: '0.35rem 0.75rem',
                                borderRadius: '6px',
                                border: isSelected ? `1px solid ${activeColor}` : '1px solid var(--border-color)',
                                background: isSelected ? activeColor : '#FFFFFF',
                                color: isSelected ? '#FFFFFF' : 'var(--text-main)',
                                fontSize: '0.82rem',
                                fontWeight: isSelected ? 700 : 500,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.3rem'
                              }}
                            >
                              {isSelected && <Check size={12} />}
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 23: UPLOAD DOCUMENTS & DRIVE LINKS */}
          {isUploads && (
            <div>
              <div className="form-header">
                <h2>Upload Files & Shared Drive Folders</h2>
                <p>
                  Share your logos, product lists (Excel), product photography, and documentation. You can drag and drop files directly or paste Google Drive / Dropbox shared links.
                </p>
              </div>

              {/* Google Drive / Cloud Link Input */}
              <div style={{ background: '#FAF6F8', padding: '1.5rem', borderRadius: '10px', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ExternalLink size={20} /> Shared Google Drive / Dropbox Links (Recommended)
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  For high-resolution photos, videos, and large archives, create a Google Drive folder and share the link here (ensure access is set to "Anyone with the link can view/edit").
                </p>
                {urlLinks.map((link, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <input
                      type="url"
                      className="input-field"
                      placeholder="https://drive.google.com/drive/folders/..."
                      value={link}
                      onChange={(e) => handleLinkChange(idx, e.target.value)}
                    />
                  </div>
                ))}
                <button type="button" className="btn btn-outline" style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }} onClick={addLinkField}>
                  + Add another cloud link
                </button>
              </div>

              {/* Direct File Drag & Drop */}
              <div className="question-block">
                <label htmlFor="file-upload" className="file-upload-zone" style={{ display: 'block', cursor: 'pointer' }}>
                  <UploadCloud size={48} className="file-upload-icon" style={{ color: 'var(--primary)', margin: '0 auto 0.75rem' }} />
                  <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>Click or drag files to upload directly</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Supports Excel (.xlsx, .csv), Word (.docx), PDF, PNG, JPG, AI, EPS
                  </p>
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    style={{ display: 'none' }}
                    onChange={handleFileUpload}
                  />
                </label>

                {uploadedFiles.length > 0 && (
                  <div className="file-list" style={{ marginTop: '1.5rem' }}>
                    <h4 style={{ marginBottom: '0.75rem', color: 'var(--text-main)' }}>Attached Files ({uploadedFiles.length}):</h4>
                    {uploadedFiles.map((file, idx) => (
                      <div key={idx} className="file-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F8FAFC', padding: '0.75rem 1rem', borderRadius: '6px', marginBottom: '0.5rem', border: '1px solid var(--border-color)' }}>
                        <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>
                        <button type="button" className="remove-file" onClick={() => removeFile(idx)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#EF4444' }}>
                          <X size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Summary of completeness before submission */}
              <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', padding: '1.25rem', borderRadius: '8px', marginTop: '2rem' }}>
                <h4 style={{ color: '#166534', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle size={18} /> Ready to Submit
                </h4>
                <p style={{ color: '#15803D', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>
                  You have completed <strong>{answeredPart1Count}</strong> of 205 discovery questions, <strong>{answeredRecsCount}</strong> feature priorities, and <strong>{answeredChecklistCount}</strong> material checklist items. You can submit now or go back to any section using the left sidebar.
                </p>
              </div>
            </div>
          )}

          {/* Form Action Buttons (Previous / Next / Submit) */}
          <div className="form-actions" style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => {
                setCurrentStep(prev => Math.max(0, prev - 1));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              disabled={currentStep === 0}
            >
              <ChevronLeft size={18} /> Previous
            </button>
            
            {currentStep < TOTAL_STEPS - 1 ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setCurrentStep(prev => prev + 1);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {currentStep === 0 ? "Start Questionnaire" : "Next Section"} <ChevronRight size={18} />
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
                style={{ padding: '0.85rem 2rem', fontSize: '1.05rem', background: 'var(--primary)' }}
              >
                Submit Questionnaire <CheckCircle size={18} style={{ marginLeft: '0.5rem' }} />
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserForm;
