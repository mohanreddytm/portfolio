
import { useState } from 'react'

import './index.css'

const EveryService = (props) => {
    const {service} = props
 
    const [showDetails, setShowDetails] = useState(false)
    console.log(service)

    const onClickViewDetails = () => {
        setShowDetails(true)
    }

    const DetailedContent = () => {
        return(
            <div className='service-pop-cont'>
                <section className='service-pop-main-section'>
                    <h1 className='service-pop-main-head'>{service.title}</h1>
                    <p className='service-pop-intro'>{service.intro}</p>
                    <h1 className='service-pop-head'>
                        What we Do
                    </h1>
                    <ul className='service-pop-list'>
                        {service.whatWeDo.map(eachDo => <li>{eachDo}</li>)}
                    </ul>
                    <h1 className='service-pop-head'>Graphical Representation</h1>
                    <ul className='service-pop-list'>
                        {service.graphicalRepresentation.map(each => <li>{each}</li>)}
                    </ul>
                </section>
                <aside>
                    <h1 className='service-pop-second-head'>Technologies Used </h1>
                    <ul className='service-pop-list'>
                        {service.technologiesUsed.map(eachTech => <li>
                            {eachTech}
                        </li>)}
                    </ul>
                    <h1 className='service-pop-second-head'>Special Features</h1>
                    <ul className='service-pop-list'>
                        {service.specialFeatures.map(eachFeature => <li>
                            {eachFeature}
                        </li>)}
                    </ul>


                </aside>
            </div>
        )
    }

    console.log(showDetails)

    return(
        <>
            <li className='every-service'>
        <img src={service.img} alt={service.title} />
        <div className='every-service-content'>
          <h1 className='every-service-content-head'>{service.title} </h1>
          <p className='every-service-content-desc'>{service.desc}</p>
          
          <button onClick={onClickViewDetails} className='services-button'>View Details</button>
        </div>
      </li>
      {showDetails &&  <DetailedContent />}
        </>

    )
}

export default EveryService