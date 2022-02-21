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

    }, [documentRendered])

    function appendEvents(events, data) {
        data.forEach(
            event => {
                if (!eventMemoryHasEventWithID(events, event.calendar_id)) {
                    eventsMemory.push(event.calendar_id)
                    events.push({
                        id: event.calendar_id,
                        startAt: event.event_date_starts,
                        endAt: event.event_date_ends,
                        summary: event.title
                    });
                    events = removeDuplicateEvents(events);
                    console.log(events)
                }
            }
        )
        setEvents(events)
    }

    function eventMemoryHasEventWithID(events ,calendarID) {
        const filteredArr = events.filter(el => {
            el.id == calendarID
        });
        return (filteredArr.length > 0)
    }

    function removeDuplicateEvents(events) {

        const seen = new Set();
        const filteredArr = events.filter(el => {
            const duplicate = seen.has(el.id);
            seen.add(el.id);
            return !duplicate;
        });
        console.log(filteredArr)
        return (filteredArr)
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