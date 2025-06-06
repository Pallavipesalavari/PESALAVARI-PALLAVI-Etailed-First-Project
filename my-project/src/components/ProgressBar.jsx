const ProgressBar = ({ step }) => {
  const percentage = (step / 3) * 200;

  return (
    <div className="mb-6">
      <div className="w-full bg-gray-300 h-2 rounded">
        <div
          className="bg-green-600 h-2 rounded transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-sm text-gray-600 mt-1">Step {step} of 3</p>
    </div>
  );
};

export default ProgressBar;