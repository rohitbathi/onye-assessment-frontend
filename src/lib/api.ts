// src/lib/api.ts
export interface Patient {
  name: string;
  age: number;
  gender: string;
  condition: string;
}

export interface QueryResponse {
  fhir_request: string;
  patients: Patient[];
}

export async function postQuery(text: string): Promise<QueryResponse> {
  const res = await fetch('http://localhost:4000/query', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
    credentials: 'include',
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
