import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { ClipLoader } from 'react-spinners'
import HistoryItem from './HistoryItem'

const HISTORY_QUERY = gql`
    query HistoryQuery {
        history {
            id
            title
            details
            event_date_utc
            links {
              wikipedia
            }
        }
    }
`

function History() {

    const { loading, error, data } = useQuery(HISTORY_QUERY)

    if (loading) return <div className="container text-center"><ClipLoader color="blue" size={40}></ClipLoader></div>
    if (error) console.log(error)

    return (
        <>
            <section className ="text-gray-700 body-font overflow-hidden">
                <div className ="container px-5 py-24 mx-auto">
                    <div className ="-my-8">
                        {
                            data.history.map(story => <HistoryItem key={story.id} story={story} />)
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default History



