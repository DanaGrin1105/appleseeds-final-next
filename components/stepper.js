import React from "react";
import Stepper from "react-multistep";
import wedPackages from "../data/wed-packages.json";
import hotels from "../data/hotels.json";
import Card from './card';
import emailjs from 'emailjs-com';

const StepOne = ({ setStepChoice }) => {
  const handleInputChange = (e) => {
    setStepChoice("weddingPackage", e.target.value);
  };
  return (
    <form className="step step-one">
      <p>Choose your wedding package:</p>
      <div className="card-list-wrapper">
        {wedPackages.map((wedPackage) => {
          const { id, name, imgUrl, description, price, link } = wedPackage;

          return (
            <div key={id} className="card-list-item">
              <input
                type="radio"
                id={id}
                name="wedding-package"
                value={id}
                onChange={handleInputChange}
              />
              <label htmlFor={id}>
                <Card imgUrl={imgUrl}
                  title={name}
                  text={description}
                  price={price}
                  link={id}
                  path="/wedding-packages"
                  pageLink="[wedPackage]"
                  key={id}
                />
              </label>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const StepTwo = ({ setStepChoice }) => {
  const handleInputChange = (e) => {
    setStepChoice("hotel", e.target.value);
  };
  return (
    <form className="step step-two">
      <p>Choose your hotel:</p>
      <div className="card-list-wrapper">
        {hotels.map((hotel) => {
          const { id, name, imgUrl, description, price, link } = hotel;

          return (
            <div key={id} className="card-list-item">
              <input
                type="radio"
                id={id}
                name="hotel"
                value={id}
                onChange={handleInputChange}
              />
              <label htmlFor={id}>
                <Card imgUrl={imgUrl}
                  title={name}
                  text={description}
                  price={price}
                  link={link}
                  key={id}
                />
              </label>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const StepThree = ({ setContactForm, info }) => {
  const handleInputChange = (e) => {
    setContactForm(e.target.name, e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = info.contactForm
    const emailTemplate = {
      name,
      email,
      message,
      hotel: info.hotel,
      package: info.weddingPackage
    }
    console.log('we are sending ===>', info)
    emailjs.send('dream-wed', 'template_yf95aia', emailTemplate, 'user_d8fF2hdeLUUkLOozuOANj')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <div className="contact-form">
      <p>Some text to get people to fill the form</p>
      <form className="step step-three" onSubmit={handleSubmit}>
        <label forHtml="name">Please enter your name</label>
        <input name="name" type="text" onChange={(e) => handleInputChange(e)} />
        <label forHtml="name">Please enter your email</label>
        <input name="email" type="email" onChange={(e) => handleInputChange(e)} />
        <label forHtml="name">Please enter your message</label>
        <textarea name="message" type="text" onChange={(e) => handleInputChange(e)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}


class EventPlannerStepper extends React.Component {
  state = {
    weddingPackage: "",
    hotel: "",
    contactForm: {
      name: '',
      email: '',
      message: ''
    }
  };

  setStepChoice = (stepName, choice) => {
    this.setState({ [stepName]: choice });
  };

  setContactForm = (fieldName, value) => {
    this.setState({ contactForm: { ...this.state.contactForm, [fieldName]: value } });
  };

  render() {
    const steps = [
      {
        name: "Choose Your Wedding Package",
        component: <StepOne setStepChoice={this.setStepChoice} />
      },
      {
        name: "Choose Your Hotel",
        component: <StepTwo setStepChoice={this.setStepChoice} />
      },
      {
        name: "Get a Quote",
        component: <StepThree setContactForm={this.setContactForm} info={this.state} />
      }
    ];
    console.log(this.state);
    return (
      <>
        <Stepper className="stepper" showNavigation={true} steps={steps} />
      </>
    );
  }
}

export default EventPlannerStepper;