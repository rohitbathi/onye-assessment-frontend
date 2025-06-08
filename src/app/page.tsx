// src/app/page.tsx
'use client';

import React, { useState } from 'react';
import { QueryForm } from '../components/molecules/QueryForm';
import { FilterControls } from '../components/molecules/FilterControls';
import { PatientTable } from '../components/organisms/PatientTable';
import { PatientChart } from '../components/organisms/PatientChart';
import { QueryResponse } from '../lib/api';

export default function HomePage() {
  const [data, setData] = useState<QueryResponse|null>(null);
  const [minAge, setMinAge] = useState('');
  const [condition, setCondition] = useState('');

  const patients = data?.patients ?? [];
  const filtered = patients.filter(p =>
    (minAge ? p.age >= parseInt(minAge, 10) : true) &&
    (condition ? p.condition === condition : true)
  );
  const conditions = Array.from(new Set(patients.map(p => p.condition)));

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4">FHIR Patient Query</h1>
      <div className="w-full max-w-md">
        <QueryForm onResult={setData!} />
      </div>

      {data && (
        <div className="text-green-400 w-full max-w-2xl">
          <section className="mt-6">
            <h2 className="font-semibold">FHIR Request</h2>
            <pre className="bg-gray-800 p-2 rounded text-sm overflow-auto">{data.fhir_request}</pre>
          </section>

          <FilterControls
            minAge={minAge}
            setMinAge={setMinAge}
            condition={condition}
            setCondition={setCondition}
            conditions={conditions}
          />

          <PatientChart patients={filtered} />

          <section>
            <h2 className="font-semibold mt-4">Results</h2>
            <PatientTable patients={filtered} />
          </section>
        </div>
      )}
    </main>
  );
}