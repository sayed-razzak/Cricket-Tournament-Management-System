function EmptyState({ title = "Nothing added yet", message }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      {message && <p className="text-gray-500 mt-2">{message}</p>}
    </div>
  );
}

export default EmptyState;
