import React from "react";
import Stepper from "react-multistep";
import wedPackages from "../data/wed-packages.json";
import hotels from "../data/hotels.json"

const StepOne = ({ setStepChoice }) => {
  const handleInputChange = (e) => {
    setStepChoice("weddingPackage", e.target.value);
  };
  return (
    <form className="step step-one">
      <p>Choose your wedding package:</p>
      <div className="radio-list">
        {wedPackages.map((wedPackage) => {
          const { id, name, imgUrl, description, price, link } = wedPackage;

          return (
            <React.Fragment key={id}>
              <input
                type="radio"
                id={id}
                name="wedding-package"
                value={id}
                onChange={handleInputChange}
              />
              <label htmlFor={id}>
                <div className="card">
                  <img src={imgUrl} />
                  <h3>{name}</h3>
                  <div>{description}</div>
                  <div>{price}</div>
                </div>
              </label>
            </React.Fragment>
          );
        })}
      </div>
    </form>
  );
};

const StepTwo = ({ setStepChoice }) => {
    const handleInputChange = (e) => {
      setStepChoice("hotels", e.target.value);
    };
    return (
      <form className="step step-two">
        <p>Choose your hotel:</p>
        <div className="radio-list">
          {hotels.map((hotel) => {
            const { id, name, imgUrl, description, price, link } = hotel;
  
            return (
              <React.Fragment key={id}>
                <input
                  type="radio"
                  id={id}
                  name="hotel"
                  value={id}
                  onChange={handleInputChange}
                />
                <label htmlFor={id}>
                  <div className="card">
                    <img src={imgUrl} />
                    <h3>{name}</h3>
                    <div>{description}</div>
                    <div>{price}</div>
                  </div>
                </label>
              </React.Fragment>
            );
          })}
        </div>
      </form>
    );
  };
class EventPlannerStepper extends React.Component {
  state = {
    weddingPackage: "",
    hotels: ""
  };

  setStepChoice = (stepName, choice) => {
    this.setState({ [stepName]: choice });
  };

  render() {
    const steps = [
      {
        name: "Choose Your Wedding Package",
        component: <StepOne setStepChoice={this.setStepChoice} />
      },
      {
        name: "Choose Your Accommodation",
        component: <StepTwo setStepChoice={this.setStepChoice} />
      }
    ];
    console.log(this.state);
    return (
      <>
        <Stepper showNavigation={true} steps={steps} />
      </>
    );
  }
}

export default EventPlannerStepper;