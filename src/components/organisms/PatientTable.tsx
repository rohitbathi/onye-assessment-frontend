// src/components/organisms/PatientTable.tsx
import React from 'react';
import { Patient } from '../../lib/api';

interface Props { patients: Patient[]; }

export function PatientTable({ patients }: Props) {
  if (patients.length === 0) {
    return <p className="mt-4">No patients found.</p>;
  }

  return (
    <table className="mt-4 w-full table-auto border-collapse">
      <thead>
        <tr className="bg-gray-900">
          {['Name','Age','Gender','Condition'].map(h => (
            <th key={h} className="border px-2 py-1 text-left">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {patients.map((p,i) => (
        //   <tr key={i} className={i%2 ? 'bg-white':'bg-gray-50'}>
          <tr key={i} className="bg-black">
            <td className="border px-2 py-1">{p.name}</td>
            <td className="border px-2 py-1">{p.age}</td>
            <td className="border px-2 py-1">{p.gender}</td>
            <td className="border px-2 py-1">{p.condition}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
