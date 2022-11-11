import React from "react";
function Weoffer(props) {
  return (
    //<div id="check"><h2>I am a { props.val }  {props.ved}!</h2>
    //</div>
    <section>
      <div className="class">
        <div className="outerdiv">
          <div className="class1">
            <h5 class="weoffer">We offer</h5>
            <h2 class="healthy">Healthy Mushroom Fields</h2>
            <p class="desc1">
              Leveraging technology, we provide low to mid-income earners in{" "}
              <br /> urban citieswithaccessible,affordable and quality
              mushroomsand <br /> farms produce to their doorstep{" "}
            </p>
          </div>
          <div className="shapes">
          <div className="triangle"></div>
          <div className="rectangle"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Weoffer;
