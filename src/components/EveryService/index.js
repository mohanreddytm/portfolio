import { useState } from 'react'
import './index.css'
import { IoMdClose } from "react-icons/io";
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

    const onClickViewDetails = () => {
        setShowDetails(true)
    }

    const DetailedContent = () => {

        console.log(service.graphicalRepresentation)
        return(
            <div  key={service.id} className='service-pop-cont'>
                <IoMdClose onClick={() => setShowDetails(false)} className='close-one-every-serives mobile-view-into' />                  
                <section className='service-pop-main-section'>
                    <h1 className='service-pop-main-head'>{service.title}</h1>
                    <p className='service-pop-intro'>{service.intro}</p>
                    <h1 className='service-pop-head'>
                        What we Do 
                    </h1>
                    <ul className='service-pop-list what-we-do-cont'>
                        {service.whatWeDo.map(eachDo => <li>{eachDo}</li>)}
                    </ul>
                    
                    <h1 className='service-pop-head'>Technologies Used </h1>
                    <ul className='service-pop-list technologies-used-cont'>
                        {service.technologiesUsed.map(eachTech => <li>
                            {eachTech}
                        </li>)}
                    </ul>
                    
                </section>
                <aside>
                    <IoMdClose onClick={() => setShowDetails(false)} className='close-one-every-serives' />
                    <h1 className='service-pop-head special-features'>Special Features</h1>
                    <ul className='service-pop-list special-features-cont'>
                        {service.specialFeatures.map(eachFeature => <li>
                            {eachFeature}
                        </li>)}
                    </ul>
                    <h1 className='service-pop-head'>Graphical Representation</h1>
                    <ul className='service-pop-list'>
                        <Doughnut key={service.id}
                        data = {{
                            labels: service.graphicalRepresentation.map(data => data.name),
                            datasets: [
                                {
                                    label:"Percent",
                                    data: service.graphicalRepresentation.map(data => data.percentage),
                                    backgroundColor: [
                                        'rgb(255, 99, 132)',
                                        'rgb(54, 162, 235)',
                                        'rgb(255, 205, 86)',
                                        'rgb(196, 86, 255)',
                                        
                                      ],
                                    hoverOffset: 4,
                                    cutout:"50%",
                                    radius:"70%",
                                    borderColor:[
                                        'rgb(255, 99, 132)',
                                        'rgb(54, 162, 235)',
                                        'rgb(255, 205, 86)',
                                        'rgb(196, 86, 255)',
                                    ],
                                },
                            ]
                        }}
                        />
                    </ul>
                </aside>
            </div>
        )
    }


    return(
        <>
            <li className='every-service'>
                <img src={service.img} alt={service.title} className='every-serice-image' />
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