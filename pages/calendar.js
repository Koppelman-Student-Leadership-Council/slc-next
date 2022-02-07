import Layout from "../components/Layout";
import PostTitle from "../components/post-title";
import Kalend, {CalendarView} from 'kalend'
import 'kalend/dist/styles/index.css'; // import styles
import { useEffect } from "react";

function HomePage() {
    const events = [
        {
            id: 1,
            startAt: '2021-11-21T18:00:00.000Z',
            endAt: '2021-11-21T19:00:00.000Z',
            timezoneStartAt: 'Europe/Berlin', // optional
            summary: 'test',
            color: 'blue',
            calendarID: 'work'
        },
        {
            id: 2,
            startAt: '2021-11-21T18:00:00.000Z',
            endAt: '2021-11-21T19:00:00.000Z',
            timezoneStartAt: 'Europe/Berlin', // optional
            summary: 'test',
            color: 'blue',
        }
    ]
    let documentRendered = false

    if (typeof window !== 'undefined') {

        documentRendered = true
    }
    return <>
        <Layout>
            <PostTitle breadcrumb>Calendar</PostTitle>
            <div className="">

                {documentRendered && <div className="height-50">
                    <Kalend 
                    initialView={CalendarView.MONTH}
                    />
                </div>}
                <h1>Events</h1>
                <h1>Featured Events</h1>
                <div className="height-50" >
                </div>

            </div>
        </Layout>
    </>
}

export default HomePage