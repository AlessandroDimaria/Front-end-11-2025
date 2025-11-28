import Button from "../atoms/Button";

function FilterGroup({ current, onChange }) {
  return (
    <div>
      <Button onClick={() => onChange("all")}>Tutti</Button>
      <Button onClick={() => onChange("active")}>Attivi</Button>
      <Button onClick={() => onChange("completed")}>Completati</Button>
    </div>
  );
}

export default FilterGroup;