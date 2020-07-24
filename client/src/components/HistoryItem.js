import React from 'react'


function HistoryItem({ story: { title, details, event_date_utc, links: { wikipedia } } }) {
    return (

        <div className="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="tracking-widest font-medium title-font text-gray-900">TIME</span>
                <span className="mt-1 text-gray-500 text-sm">{event_date_utc.slice(0,10)}</span>
            </div>
            <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
                <p className="leading-relaxed">{details.slice(0,100)+"..."}</p>
                <a target="_blank" href={wikipedia ? wikipedia : '/history'} className="text-indigo-500 inline-flex items-center mt-4">{wikipedia ? 'wikipedia' : 'No wikpedia link available'}
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>

    )
}

export default HistoryItem


