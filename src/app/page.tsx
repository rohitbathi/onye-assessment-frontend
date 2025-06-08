// src/app/page.tsx
'use client';

import React, { useState } from 'react';
import { QueryForm } from '../components/molecules/QueryForm';
import { PatientTable } from '../components/organisms/PatientTable';
import { QueryResponse } from '../lib/api';

export default function HomePage() {
  const [data, setData] = useState<QueryResponse|null>(null);

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">FHIR Patient Query</h1>
      <QueryForm onResult={setData!} />

      {data && (
        <>
          <section className="mt-6">
            <h2 className="font-semibold">FHIR Request</h2>
            <pre className="bg-gray-100 p-2 rounded text-sm">{data.fhir_request}</pre>
          </section>

          <section>
            <h2 className="font-semibold mt-4">Results</h2>
            <PatientTable patients={data.patients} />
          </section>
        </>
      )}
    </main>
  );
}