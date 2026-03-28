import React from 'react'
import './Services.css'
const Services = () => {
  return (

    <div className='service' id='services'>
            <h3 className='service-title'>Services We Offer.</h3>

            <div className="service-description">
                    <div className="service1">
                        <h4>1</h4>
                        <div className="service-topic">
                            <h5>Frontend Application Development and Architecture</h5>
                            <p>Build scalable web applications using React and modern frontend tecnologies.</p>
                        </div>                        
                    </div>

                    <div className="service2">
                        <h4>2</h4>
                        <div className="service-topic">
                            <h5>Responsive Interface Design and User Experience Optimization</h5>
                            <p>Designed responsive interfaces ensuring seamless experience across devices and browsers.</p>
                        </div>
                    </div>

                    <div className="service3">
                        <h4>3</h4>
                        <div className="service-topic">
                            <h5>API integration and Data Handling Implementation</h5>
                            <p>Integrated REST APIs for efficient data fetching and dynamic content display.</p>
                        </div>
                    </div>

                    <div className="service4">
                        <h4>4</h4>
                        <div className="service-topic">
                            <h5>Web Application Testing, Debugging and Performance Enhancement</h5>
                            <p>Identified bugs and optimized application performance for speed and reliability.</p>
                        </div>
                    </div>                    
                    <div className="service4">
                        <h4>5</h4>
                        <div className="service-topic">
                            <h5>Version Control and Collaborative Development Practices</h5>
                            <p>Utilized Git for version control and effective team collaboration workflows.</p>
                        </div>
                    </div>                    
                    <div className="service4">
                        <h4>6</h4>
                        <div className="service-topic">
                            <h5>Deployment, Maintenance and Continuous Development Improvement</h5>
                            <p>Managed deployment processes and maintained applications for continous improvement.</p>
                        </div>
                    </div>                    
            </div>

    </div>

  )
}

export default Services
