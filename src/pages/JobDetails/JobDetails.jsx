import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const {_id, title, company, deadline } = useLoaderData();

    return (
        <div>
            <h2>Job details for {title}</h2>
            <p>Apply for : {company}</p>
            <p>Deadline: {deadline}</p>
            <Link to='/jobApply/:id'><button className="btn btn-secondary">Apply Now</button></Link>
            
        </div>
    );
};

export default JobDetails;