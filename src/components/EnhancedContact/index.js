import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import './index.css';

const EnhancedContact = ({ sendEmail, formData, setFormData }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const fadeInUp = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 300, friction: 30 }
  });

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'tammienenimohanreddy1@gmail.com',
      link: 'mailto:tammienenimohanreddy1@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 6303123013',
      link: 'tel:+916303123013'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Hyderabad, Telangana, India',
      link: '#'
    }
  ];



  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Show loading toast
    const loadingToast = toast.loading('Sending message...');
    
    try {
      await sendEmail(e);
      toast.success('Message sent successfully!', { id: loadingToast });
    } catch (error) {
      toast.error('Failed to send message. Please try again.', { id: loadingToast });
    }
  };

  return (
    <section className="enhanced-contact" id="contact" ref={ref}>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#0a192f',
            color: '#e6f1ff',
            border: '1px solid #64ffda'
          }
        }}
      />
      
      <animated.div className="contact-container" style={fadeInUp}>
        <div className="contact-header">
          <h2 className="contact-title">
            Let's <span className="title-accent">Connect</span>
          </h2>
          <p className="contact-subtitle">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <h3 className="section-title">Get In Touch</h3>
            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <animated.a
                  key={index}
                  href={info.link}
                  className="contact-info-item"
                  style={{
                    ...fadeInUp,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="info-icon">
                    {info.icon}
                  </div>
                  <div className="info-content">
                    <h4 className="info-title">{info.title}</h4>
                    <p className="info-value">{info.value}</p>
                  </div>
                </animated.a>
              ))}
            </div>

            
          </div>

          <div className="contact-form-section">
            <h3 className="section-title">Send Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    value={formData.fullnameinput}
                    onChange={(e) => handleInputChange('fullnameinput', e.target.value)}
                    placeholder="Your Name"
                    className="form-input"
                    required
                  />
                  {/* <label className="form-label">Your Name</label> */}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    value={formData.emailinput}
                    onChange={(e) => handleInputChange('emailinput', e.target.value)}
                    placeholder="Your Email"
                    className="form-input"
                    required
                  />
                  {/* <label className="form-label">Your Email</label> */}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    value={formData.mobilenumberinput}
                    onChange={(e) => handleInputChange('mobilenumberinput', e.target.value)}
                    placeholder="Your Phone"
                    className="form-input"
                  />
                  {/* <label className="form-label">Your Phone</label> */}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    value={formData.emailSubjectinput}
                    onChange={(e) => handleInputChange('emailSubjectinput', e.target.value)}
                    placeholder="Subject"
                    className="form-input"
                    required
                  />
                  {/* <label className="form-label">Subject</label> */}
                </div>
              </div>

              <div className="form-group full-width">
                <textarea
                  value={formData.messageinput}
                  onChange={(e) => handleInputChange('messageinput', e.target.value)}
                  placeholder="Your Message"
                  className="form-textarea"
                  rows="6"
                  maxLength="600"
                  required
                />
                {/* <label className="form-label">Your Message</label> */}
                <div className="char-count">
                  {formData.messageinput.length}/600
                </div>
              </div>

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <div className="btn-icon">
                  <FaEnvelope />
                </div>
              </button>
            </form>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default EnhancedContact; 