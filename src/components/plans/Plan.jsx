import React from "react";
import "./plan.css";
import {plansData} from "../data/plansData" ;
const Plan = () => {
  return (
    <div>
      <div className="plans_container" id="plan_id">
        <div className="program_headers">
          <div className="program_headers_title">
            <span>
              There are 3 steps to get <br />
              Worlds most visible platform{" "}
            </span>
          </div>
        </div>
        <div className="plans">
          {plansData.map((plan, i) => {
            return (
              <div className="plan" key={i}>
                <span>
                    <div className="circular_div">0{i+1}</div>
                </span>
                <span className="plan_title">{plan.title}</span>
                <span className="plan_des">{plan.des}</span>
                <span>{plan.icon}</span>
            </div>
            );
          })}
        </div>
      </div>
      <div className="demo">
        <span>Be more efficient and profitable TransportSimple</span>
        <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Ea, totam expedita.
             Ab quia iure sunt molestiae nostrum. Aspernatur ipsam <br/>consectetur nam quasi beatae, facere voluptas eveniet, <br/>
             voluptatum debitis mollitia quos.
        </div>
        <br/>
        <button className="demo_button">Get started</button>
       
        

      </div>
    </div>
  );
};

export default Plan;
