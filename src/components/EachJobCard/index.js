import {Link} from 'react-router-dom'
import {IoLocationOutline} from 'react-icons/io5'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FaStar} from 'react-icons/fa'

import './index.css'

const EachJobCard = props => {
  const {each} = props

  return (
    <div className="Card">
      <Link
        to={`/jobs/${each.id}`}
        className="BgForDetailsOfJobs"
        key={each.id}
      >
        <div className="companyLogoJobFlex">
          <div>
            <img
              className="CompanyLogo"
              src={each.companyLogo}
              alt="company logo"
            />
          </div>
          <div className="ratingFlexJob">
            <h1 className="titleSmallScreens">{each.title}</h1>
            <p>
              <FaStar className="Star" />
              {each.rating}
            </p>
          </div>
        </div>
        <div className="packageFlex">
          <div className="locationFlexJob">
            <p>
              <IoLocationOutline />
              {each.location}
            </p>
            <p>
              <BsBriefcaseFill />
              {each.employmentType}
            </p>
          </div>
          <p>{each.packagePerAnnum}</p>
        </div>
        <hr />
        <h1>Description</h1>

        <p>{each.jobDescription}</p>
      </Link>
    </div>
  )
}
export default EachJobCard
