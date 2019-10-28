import React from 'react';
import platziConfLogo from '../images/platziconf-logo.svg';
import astronauts from '../images/astronauts.svg';


// class Home extends React.Component {

//     render(
//         return()

//     )

// }

function Home() {
    return (

        <React.Fragment>
            <div className="container ">
                <div className="row home-background align-items-center">
                    <div className="col text-center text-white">
                        <img height="125px" width="150px" src={platziConfLogo} alt="platziCof Logo"/>
                        <h3>Print Your Badges</h3>
                        <p>The easiest way to manage your <br/> conference </p>
                        <div className="Badge__buttons">
                            <a className="btn btn-primary">Start now</a>
                        </div>
                    </div>
                    <div className="col text-center" alt="astronauts">
                        <img height="375px" width="420px" src={astronauts}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;