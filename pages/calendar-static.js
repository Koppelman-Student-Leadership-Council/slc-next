import Layout from "../components/Layout";
import PostTitle from "../components/post-title";
import Kalend, { CalendarView } from 'kalend'
import 'kalend/dist/styles/index.css'; // import styles
import { useEffect, useState } from "react";




function HomePage({ calendarPreData }) {
    const [data, setData] = useState(null)
    const [documentRendered, setDocumentRendered] = useState(false);
    const [events, setEvents] = useState([{
        // id: 2,
        // startAt: '2021-11-21T18:00:00.000Z',
        // endAt: '2021-11-21T19:00:00.000Z',
        // summary: 'test',
        // color: 'blue',
    }])
    let eventsMemory = []

    // console.log(calendarPreData)



    useEffect(() => {
        if (typeof window !== 'undefined') {
            setDocumentRendered(true)
        }
        appendEvents(events, calendarPreData)
        fetch('https://admin.brooklynslcouncil.com/public/api/events-calendar').then((res) => res.json()).then((data) => {
            setData(data);
            // console.log(data);
            appendEvents(events, data)


        })

        fetch('https://admin.brooklynslcouncil.com/public/api/events').then((res) => res.json()).then((data) => {
            // setData(data);
            // console.log(data);
            appendEventsInformation(events, data)


        })

    }, [documentRendered])

    function appendEventsInformation(events, data){
        console.log(data);
    }

    function appendEvents(events, data) {
        data.forEach(
            event => {
                eventsMemory.push(data.calendar_id)
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

                {documentRendered && <div className="h-[500px]">
                    <Kalend
                        initialView={CalendarView.MONTH}
                        events={events}
                    />
                </div>}

                {!documentRendered &&
                    <div className="h-[500px] content-center center-content" ><div>Retrieving Calendar Events...</div>
                    </div>}

            </div>
        </Layout>
    </>
}

export async function getStaticProps() {
    const res = await fetch('https://admin.brooklynslcouncil.com/public/api/events-calendar')
    const calendarPreData = await res.json()
    return {
        props: {
            calendarPreData,
        },
    }
}

export default HomePage