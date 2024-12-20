
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
    const { _id, title, company, company_logo, requirements, description, location, salaryRange } = job;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="flex gap-2 m-2">
                <figure>
                    <img className="w-16"
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h4 className="text-2xl">{company}</h4>
                    <p className="flex gap-2 items-center"><FaLocationDot /> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="flex gap-2 flex-wrap">
                    {
                        requirements.map((skill, index)=><p className="border rounded-lg px-2 hover:text-purple-600" key={index}>{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-end items-center">
                    <p className="flex items-center">$ {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
                    <Link to={`jobs/${_id}`}><button className="btn ">Apply</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;