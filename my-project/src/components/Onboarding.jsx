import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import ProgressBar from './ProgressBar';

const Onboarding = ({ setUserData }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    size: '',
    theme: 'light',
    layout: 'grid',
  });

  const nextStep = () => {
    if (validateStep(step)) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const validateStep = (step) => {
    if (step === 1 && (!formData.name || !formData.email)) {
      alert('Please enter name and email');
      return false;
    }
    if (step === 2 && (!formData.company || !formData.industry || !formData.size)) {
      alert('Please complete all business info fields');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    localStorage.setItem('userData', JSON.stringify(formData));
    setUserData(formData);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-blue-100 rounded shadow">
      <ProgressBar step={step} />
      {step === 1 && <StepOne data={formData} setData={setFormData} />}
      {step === 2 && <StepTwo data={formData} setData={setFormData} />}
      {step === 3 && <StepThree data={formData} setData={setFormData} />}

      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button onClick={prevStep} className="btn">
            Back
          </button>
        )}
        {step < 3 ? (
          <button onClick={nextStep} className="btn">
            Next
          </button>
        ) : (
          <button onClick={handleSubmit} className="btn bg-blue-600 hover:bg-blue-700 text-white">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Onboarding;