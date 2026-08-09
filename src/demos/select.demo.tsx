import { Select } from "../react/index.js";

export default function SelectDemo() {
  return (
    <div className="flex max-w-sm flex-col gap-3">
      <Select aria-label="Season" defaultValue="winter">
        <option value="winter">Winter</option>
        <option value="spring">Spring</option>
        <option value="summer">Summer</option>
        <option value="autumn">Autumn</option>
      </Select>
      <Select aria-label="Invalid choice" invalid defaultValue="">
        <option value="" disabled>
          Choose one…
        </option>
        <option value="a">Option A</option>
      </Select>
    </div>
  );
}
