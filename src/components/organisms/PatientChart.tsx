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
          '#5F3F8C', // deep purple
          '#04ADBF', // teal
          '#F2B705', // yellow
          '#F28705', // orange
          '#F27244', // coral
          '#4CAF50', // green
          '#E53935', // red
          '#2196F3', // blue
          '#EC407A', // pink
          '#CDDC39', // lime
          '#3F51B5', // indigo
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
