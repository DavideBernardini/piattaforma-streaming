import React from "react";
import '../style/selectUtente.scss'
import { Link } from "react-router-dom";

const SelectUtente = () => {
    return (
        <>
            <div className="contenitoreGrande text-center" >
                
                <div className="profili">
                    <h1 className="text-white fw-bold mb-4">Chi vuole Guardare GreenStream?</h1>
                        <ul className='profileList flex-wrap'>
                            <li >
                                <Link to="/mainPage"><img src={require("../images/avatar1.png")} alt="profile thumb"></img></Link>
                                <div className='fs-4 mt-2 text-white fw-bold'>Alessandro</div>
                            </li>
                            <li>
                            <Link to="/mainPage"><img src={require("../images/avatar2.png")} alt="profile thumb"></img></Link>
                            <div className='fs-4 mt-2 text-white fw-bold'>Davide</div>
                            </li>
                            <li>
                            <Link to="/mainPage"><img src={require("../images/avatar3.png")} alt="profile thumb"></img></Link>
                            <div className='fs-4 mt-2 text-white fw-bold'>Valerio</div>
                            </li>
                            <li>
                            <Link to="/mainPage"><img src={require("../images/avatar4.png")} alt="profile thumb"></img></Link>
                            <div className='fs-4 mt-2 text-white fw-bold'>Loris</div>
                            </li>
                        </ul>
            </div>

        </div>


        </>

    )
}
export default SelectUtente