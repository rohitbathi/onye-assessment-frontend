export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="
        bg-gray-800
        border border-gray-700
        text-white font-medium
        rounded-lg
        px-5 py-2.5
        shadow-sm
        hover:bg-gray-700 hover:shadow
        transition
        disabled:opacity-50 disabled:cursor-not-allowed
      "
    />
  );
}