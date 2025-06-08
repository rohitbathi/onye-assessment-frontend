export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="
        w-full
        bg-transparent
        border border-gray-700
        rounded-lg
        px-4 py-2
        text-white placeholder-gray-500
        focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400
        transition
      "
    />
  );
}