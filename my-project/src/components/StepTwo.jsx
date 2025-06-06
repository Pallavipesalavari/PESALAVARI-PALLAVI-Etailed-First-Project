const StepTwo = ({ data, setData }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Step 2: Business Info</h2>
    <input
      className="input"
      type="text"
      placeholder="Company Name"
      value={data.company}
      onChange={(e) => setData({ ...data, company: e.target.value })}
    />
    <input
      className="input mt-4"
      type="text"
      placeholder="Industry"
      value={data.industry}
      onChange={(e) => setData({ ...data, industry: e.target.value })}
    />
    <input
      className="input mt-4"
      type="text"
      placeholder="Team Size"
      value={data.size}
      onChange={(e) => setData({ ...data, size: e.target.value })}
    />
  </div>
);

export default StepTwo;