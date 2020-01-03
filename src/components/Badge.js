import React from "react";
import confLogo from "../images/confLogo.svg";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div>
          <h1>
            <img src="" alt="" />
            Alberto
            <br /> González
          </h1>
        </div>
        <div>
          <p>Front Engineer</p>
          <p>@gbeto21</p>
        </div>
        <div>#platziconf</div>
      </div>
    );
  }
}

export default Badge;
