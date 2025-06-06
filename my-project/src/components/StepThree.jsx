const StepThree = ({ data, setData }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Step 3: Preferences</h2>
    <label className="block mb-2">Select Theme</label>
    <select
      className="input"
      value={data.theme}
      onChange={(e) => setData({ ...data, theme: e.target.value })}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>

    <label className="block mt-4 mb-2">Dashboard Layout</label>
    <select
      className="input"
      value={data.layout}
      onChange={(e) => setData({ ...data, layout: e.target.value })}
    >
      <option value="grid">Grid</option>
      <option value="list">List</option>
    </select>
  </div>
);

export default StepThree;