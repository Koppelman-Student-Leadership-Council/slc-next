import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";
import MemberCard from '../../components/MemberCard';

function HomePage({ membersData }) {
    console.log(membersData)
    return <>
        <Layout>

            <PostTitle breadcrumb>Our Team</PostTitle>
            <div className="row ">

                {membersData.map((member) => {
                    return <div key={member.name} className="col-md-6 col-lg-3 mt-1 mb-1">

                        <MemberCard image={member.image_link} name={member.name} description={member.description} title={member.title} department={member.department} linkedin={member.linkedin} /></div>
                })}
            </div>
        </Layout>
    </>
}

export async function getStaticProps() {
    const res = await fetch('https://admin.brooklynslcouncil.com/public/api/team/active')
    const membersData = await res.json()
    return {
        props: {
            membersData,
        },
    }
}

export default HomePage