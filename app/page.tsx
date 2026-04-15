'use client'

import { useState } from 'react'

export default function Home() {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vision: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '2rem'
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '600px',
          background: 'rgba(255,255,255,0.05)',
          padding: '3rem',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{
            fontSize: '4rem',
            marginBottom: '1rem'
          }}>🎉</div>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#fff',
            marginBottom: '1rem'
          }}>
            You're on the list!
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#a0a0a0',
            lineHeight: '1.6'
          }}>
            Thanks {formData.name}! We'll reach out soon to help you build your Soul.
          </p>
          <button 
            onClick={() => {setSubmitted(false); setShowForm(false)}}
            style={{
              marginTop: '2rem',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              background: 'transparent',
              color: '#e94560',
              border: '2px solid #e94560',
              borderRadius: '50px',
              cursor: 'pointer'
            }}
          >
            Back to Home
          </button>
        </div>
      </main>
    )
  }

  if (showForm) {
    return (
      <main style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '2rem'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '500px',
          background: 'rgba(255,255,255,0.05)',
          padding: '2.5rem',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#fff',
            marginBottom: '0.5rem',
            textAlign: 'center'
          }}>
            Start Building Your Soul
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#a0a0a0',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            Tell us about yourself and we'll help you create your AI.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                color: '#fff',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  fontSize: '1rem',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '10px',
                  color: '#fff',
                  outline: 'none'
                }}
                placeholder="Enter your name"
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                color: '#fff',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  fontSize: '1rem',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '10px',
                  color: '#fff',
                  outline: 'none'
                }}
                placeholder="you@example.com"
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                display: 'block',
                color: '#fff',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>
                What's your vision for your AI?
              </label>
              <textarea
                required
                value={formData.vision}
                onChange={(e) => setFormData({...formData, vision: e.target.value})}
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  fontSize: '1rem',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '10px',
                  color: '#fff',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
                placeholder="I want an AI that helps me with..."
              />
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                style={{
                  flex: 1,
                  padding: '1rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  background: 'transparent',
                  color: '#a0a0a0',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '50px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{
                  flex: 1,
                  padding: '1rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  background: 'linear-gradient(135deg, #e94560 0%, #ff6b6b 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer'
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    )
  }

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '800px'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #e94560 0%, #ff6b6b 50%, #feca57 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em'
        }}>
          Create Your Soul Builder
        </h1>
        
        <p style={{
          fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
          color: '#a0a0a0',
          lineHeight: '1.8',
          marginBottom: '3rem'
        }}>
          Design the AI that knows you. <br/>
          Your voice. Your values. Your vision.
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <button 
            onClick={() => setShowForm(true)}
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #e94560 0%, #ff6b6b 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 10px 30px rgba(233, 69, 96, 0.3)'
            }}
          >
            Start Building
          </button>
          
          <button 
            onClick={() => alert('Soul Builder lets you create a personalized AI that understands your unique voice, values, and goals. Coming soon!')}
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              background: 'transparent',
              color: '#fff',
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Learn More
          </button>
        </div>

        <div style={{
          marginTop: '4rem',
          display: 'flex',
          gap: '3rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          color: '#666'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: '#e94560' }}>AI</div>
            <div style={{ fontSize: '0.9rem' }}>Powered</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: '#e94560' }}>You</div>
            <div style={{ fontSize: '0.9rem' }}>Controlled</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: '#e94560' }}>24/7</div>
            <div style={{ fontSize: '0.9rem' }}>Available</div>
          </div>
        </div>
      </div>
    </main>
  )
}
