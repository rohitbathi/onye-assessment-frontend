// src/components/molecules/QueryForm.tsx
import React, { useState } from 'react';
import { TextInput } from '../atoms/TextInput';
import { Button } from '../atoms/Button';
import { postQuery, QueryResponse } from '../../lib/api';

interface Props {
  onResult: (res: QueryResponse) => void;
}

export function QueryForm({ onResult }: Props) {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const suggestions = [
    'list diabetic patients',
    'show me patients older than 50',
    'patients with asthma',
  ];
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const json = await postQuery(text);
      onResult(json);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-x-2 flex justify-center">
      <TextInput
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="e.g. show me diabetic patients over 50"
        list="query-suggestions"
      />
      <datalist id="query-suggestions">
        {suggestions.map(s => (
          <option key={s} value={s} />
        ))}
      </datalist>
      <Button type="submit" disabled={loading}>
        {loading ? '…Fetching' : 'Submit'}
      </Button>
    </form>
  );
}