import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './index.css'
import { FaTimes, FaRocket, FaLightbulb, FaCogs, FaChartLine, FaCheckCircle, FaStar } from "react-icons/fa";
import { Doughnut} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(ArcElement, Tooltip, Legend);
  

const EveryService = (props) => {
    const {service} = props
 
    const [showDetails, setShowDetails] = useState(false)
    const [activeTab, setActiveTab] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const onClickViewDetails = () => {
        setShowDetails(true)
    }

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (showDetails) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('modal-open');
        } else {
            document.body.style.overflow = 'unset';
            document.body.classList.remove('modal-open');
        }

        // Cleanup function to restore scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
            document.body.classList.remove('modal-open');
        };
    }, [showDetails]);

    // Handle escape key to close modal
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape' && showDetails) {
                setShowDetails(false);
            }
        };

        if (showDetails) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [showDetails]);

    const tabs = [
        { id: 0, name: 'Overview', icon: <FaRocket /> },
        { id: 1, name: 'Features', icon: <FaLightbulb /> },
        { id: 2, name: 'Tech Stack', icon: <FaCogs /> },
        { id: 3, name: 'Analytics', icon: <FaChartLine /> }
    ];

    const handleTabChange = (tabId) => {
        setIsAnimating(true);
        setTimeout(() => {
            setActiveTab(tabId);
            setIsAnimating(false);
        }, 200);
    };

    const DetailedContent = () => {
        return(
            <div className="animated-service-overlay" onClick={() => setShowDetails(false)}>
                <div className="animated-service-container" onClick={(e) => e.stopPropagation()}>
                    {/* Animated Header */}
                    <div className="animated-header">
                        <div className="header-content">
                            <div className="service-title-section">
                                <h1 className="animated-title">{service.title}</h1>
                                <div className="title-underline"></div>
                            </div>
                            <p className="animated-description">{service.intro}</p>
                        </div>
                        <button className="animated-close-btn" onClick={() => setShowDetails(false)}>
                            <FaTimes />
                        </button>
                    </div>

                    {/* Tab Navigation */}
                    <div className="tab-navigation">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => handleTabChange(tab.id)}
                            >
                                <span className="tab-icon">{tab.icon}</span>
                                <span className="tab-label">{tab.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="tab-content-container">
                        <div className={`tab-content ${isAnimating ? 'animating' : ''}`}>
                            {activeTab === 0 && (
                                <div className="overview-tab">
                                    <div className="overview-grid">
                                        <div className="overview-card">
                                            <div className="card-icon-wrapper">
                                                <FaRocket />
                                            </div>
                                            <h3>Service Overview</h3>
                                            <p>{service.intro}</p>
                                        </div>
                                        <div className="overview-card">
                                            <div className="card-icon-wrapper">
                                                <FaLightbulb />
                                            </div>
                                            <h3>Key Benefits</h3>
                                            <ul>
                                                {service.whatWeDo.slice(0, 3).map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="overview-card">
                                            <div className="card-icon-wrapper">
                                                <FaCogs />
                                            </div>
                                            <h3>Technologies</h3>
                                            <div className="tech-preview">
                                                {service.technologiesUsed.slice(0, 4).map((tech, index) => (
                                                    <span key={index} className="tech-tag">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 1 && (
                                <div className="features-tab">
                                    <div className="features-showcase">
                                        {service.whatWeDo.map((feature, index) => (
                                            <div key={index} className="feature-slide" style={{ animationDelay: `${index * 0.1}s` }}>
                                                <div className="feature-number">{index + 1}</div>
                                                <div className="feature-content">
                                                    <h4>Feature {index + 1}</h4>
                                                    <p>{feature}</p>
                                                </div>
                                                <div className="feature-icon">
                                                    <FaCheckCircle />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 2 && (
                                <div className="tech-tab">
                                    <div className="tech-showcase">
                                        {service.technologiesUsed.map((tech, index) => (
                                            <div key={index} className="tech-card" style={{ animationDelay: `${index * 0.1}s` }}>
                                                <div className="tech-icon">
                                                    <FaCogs />
                                                </div>
                                                <div className="tech-info">
                                                    <h4>{tech}</h4>
                                                    <div className="tech-progress">
                                                        <div className="progress-bar">
                                                            <div className="progress-fill" style={{ width: `${Math.min(85 + Math.random() * 15, 100)}%` }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 3 && (
                                <div className="analytics-tab">
                                    <div className="analytics-container">
                                        <div className="chart-section">
                                            <h3>Performance Metrics</h3>
                                            <div className="chart-wrapper">
                                                <Doughnut 
                                                    data={{
                                                        labels: service.graphicalRepresentation.map(data => data.name),
                                                        datasets: [{
                                                            label: "Performance",
                                                            data: service.graphicalRepresentation.map(data => data.percentage),
                                                            backgroundColor: [
                                                                '#FF6B6B',
                                                                '#4ECDC4',
                                                                '#45B7D1',
                                                                '#96CEB4',
                                                                '#FFEAA7',
                                                                '#DDA0DD'
                                                            ],
                                                            borderColor: [
                                                                '#FF6B6B',
                                                                '#4ECDC4',
                                                                '#45B7D1',
                                                                '#96CEB4',
                                                                '#FFEAA7',
                                                                '#DDA0DD'
                                                            ],
                                                            borderWidth: 3,
                                                            hoverOffset: 8,
                                                            cutout: "65%",
                                                            radius: "85%"
                                                        }]
                                                    }}
                                                    options={{
                                                        responsive: true,
                                                        maintainAspectRatio: false,
                                                        plugins: {
                                                            legend: {
                                                                position: 'bottom',
                                                                labels: {
                                                                    color: '#2C3E50',
                                                                    font: {
                                                                        size: 11,
                                                                        weight: '600'
                                                                    },
                                                                    usePointStyle: true,
                                                                    padding: 12
                                                                }
                                                            },
                                                            tooltip: {
                                                                backgroundColor: '#2C3E50',
                                                                titleColor: '#ECF0F1',
                                                                bodyColor: '#BDC3C7',
                                                                borderColor: '#3498DB',
                                                                borderWidth: 2,
                                                                cornerRadius: 10,
                                                                displayColors: true
                                                            }
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="metrics-section">
                                            <h3>Special Features</h3>
                                            <div className="metrics-grid">
                                                {service.specialFeatures.map((feature, index) => (
                                                    <div key={index} className="metric-card">
                                                        <div className="metric-icon">
                                                            <FaStar />
                                                        </div>
                                                        <div className="metric-content">
                                                            <h4>Feature {index + 1}</h4>
                                                            <p>{feature}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <>
            <li className='every-service' onClick={onClickViewDetails}>
                <div className="service-image-container">
                    <img src={service.img} alt={service.title} className='every-serice-image' />
                    <div className="service-status-indicator"></div>
                </div>
                <div className='every-service-content'>
                    <div className="service-header">
                        <h1 className='every-service-content-head'>{service.title}</h1>
                        <div className="service-category">Web Development</div>
                    </div>
                    <p className='every-service-content-desc'>{service.desc}</p>
                    
                    <div className="service-actions">
                        <button className='services-button'>
                            <span className="button-text">Explore Service</span>
                            <span className="button-icon">→</span>
                        </button>
                        <div className="service-stats">
                            <span className="stat-item">⚡ Fast</span>
                            <span className="stat-item">🔒 Secure</span>
                        </div>
                    </div>
                </div>
            </li>
            {showDetails && createPortal(<DetailedContent />, document.body)}
        </>
    )
}

export default EveryService