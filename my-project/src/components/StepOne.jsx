const StepOne = ({ data, setData }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Step 1: Personal Info</h2>
    <input
      className="input"
      type="text"
      placeholder="Full Name"
      value={data.name}
      onChange={(e) => setData({ ...data, name: e.target.value })}
    />
    <input
      className="input mt-4"
      type="email"
      placeholder="Email"
      value={data.email}
      onChange={(e) => setData({ ...data, email: e.target.value })}
    />
  </div>
);

export default StepOne;