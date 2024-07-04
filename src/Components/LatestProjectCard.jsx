import latestProjectImg from "../assets/images/project.png"
import { MdOutlineArrowOutward } from "react-icons/md";


const LatestProjectCard = () => {
  return (
    <div className="card mb-3 border-0 pb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={latestProjectImg} className="img-fluid" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body py-0">
            <a href="" target="_blank" className="project_card_title">Hospitra - Destination Good Health</a>
            <p className="project_card_text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="project_card_text"><strong>Technology Stack :</strong> Python, NodeJS</p>
            <p className="project_card_text"><strong>Team Size :</strong> 1</p>
            <a href="">Find out more <MdOutlineArrowOutward /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestProjectCard