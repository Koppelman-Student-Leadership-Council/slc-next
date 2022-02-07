import Layout from "../components/Layout";
import PostTitle from "../components/post-title";
import Kalend, { CalendarView } from 'kalend'
import 'kalend/dist/styles/index.css'; // import styles
import { useEffect, useState } from "react";




function HomePage() {
    const [data, setData] = useState(null)
    const [documentRendered, setDocumentRendered] = useState(false);
    const [events, setEvents] = useState([{
        id: 2,
        startAt: '2021-11-21T18:00:00.000Z',
        endAt: '2021-11-21T19:00:00.000Z',
        summary: 'test',
        color: 'blue',
    }])



    useEffect(() => {
        fetch('https://admin.brooklynslcouncil.com/public/api/events-calendar').then((res) => res.json()).then((data) => {
            setData(data);
            // console.log(data);
            appendEvents(events, data)

            if (typeof window !== 'undefined') {
                setDocumentRendered(true)
            }
        })

    }, [documentRendered])

    function appendEvents(events, data) {
        data.forEach(
            event => {
                events.push({
                    id: event.calendar_id,
                    startAt: event.event_date_starts,
                    endAt: event.event_date_ends,
                    summary: event.title
                });
            }
        )
        setEvents(events)
    }

    return <>
        <Layout>
            <PostTitle breadcrumb>Calendar</PostTitle>
            <div className="">

                {documentRendered && <div className="height-50">
                    <Kalend
                        initialView={CalendarView.MONTH}
                        events={events}
                    />
                </div>}

                {!documentRendered &&
                    <div className="height-50 content-center center-content" ><div>Retrieving Calendar Events...</div>
                    </div>}
                <h1>Featured Events</h1>

            </div>
        </Layout>
    </>
}

export default HomePage