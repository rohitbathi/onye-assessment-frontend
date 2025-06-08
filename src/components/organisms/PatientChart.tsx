import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Patient } from '../../lib/api';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props { patients: Patient[] }

export function PatientChart({ patients }: Props) {
  const counts: Record<string, number> = {};
  for (const p of patients) {
    counts[p.condition] = (counts[p.condition] || 0) + 1;
  }
  const labels = Object.keys(counts);
  const data = {
    labels,
    datasets: [
      {
        data: labels.map(l => counts[l]),
        backgroundColor: [
          '#10B981',
          '#3B82F6',
          '#FBBF24',
          '#F87171',
          '#8B5CF6',
        ],
      },
    ],
  };

  return (
    <div className="mt-4 max-w-md w-full">
      <Pie data={data} />
    </div>
  );
}
