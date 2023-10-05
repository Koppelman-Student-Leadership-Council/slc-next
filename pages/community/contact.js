import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";
import emailjs from 'emailjs-com';


function Contact() {

    const mapUrl = "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAHedcWWJ17w-V1js7ERyz3USvPosmjNKQ";
    return <>
        <Layout>
            <PostTitle breadcrumb >Contact  </PostTitle>
            <p className="pt-10 text-xl">
                Complete the form below or email us at <b>brooklynslcouncil@gmail.com</b>
            </p>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc-dDWoygU8spueE5BmVSptBQfrpg7rojw-Qc7fTXDOZrfztw/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            <div className="mt-5 mb-3 text-md ml:text-lg" align="center" >
                <b> Mailing Address</b> <br />
                2900 Bedford Ave. Brooklyn, NY 11210 <br />
            </div>

        </Layout>
    </>
}

export default Contact