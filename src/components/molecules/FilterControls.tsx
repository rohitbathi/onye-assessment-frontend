import React from 'react';

interface Props {
  minAge: string;
  setMinAge: (a: string) => void;
  condition: string;
  setCondition: (c: string) => void;
  conditions: string[];
}

export function FilterControls({ minAge, setMinAge, condition, setCondition, conditions }: Props) {
  return (
    <div className="flex space-x-2 mt-4">
      <input
        type="number"
        placeholder="Min age"
        value={minAge}
        onChange={e => setMinAge(e.target.value)}
        className="w-24 bg-gray-800 border border-gray-700 rounded px-2 py-1 text-white"
      />
      <select
        value={condition}
        onChange={e => setCondition(e.target.value)}
        className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-white"
      >
        <option value="">All conditions</option>
        {conditions.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}
