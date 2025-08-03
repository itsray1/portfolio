import StarryBackground from "../Components/StarBackground";
export function NotFound({ username = "", suggestions = [] }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <StarryBackground/>
      <h1 className="text-4xl font-bold text-primary dark:text-600 mb-4">404 - Not Found</h1>
      {username && (
        <p className="mb-4 text-lg">
         Portfolio "<span className="font-semibold">{username}</span>" does not exist
        </p>
      )}

      {suggestions.length > 0 && (
        <>
          <p className="text-muted-foreground mb-2">Did you mean:</p>
          <ul className="flex flex-wrap justify-center gap-2">
            {suggestions.map((name, i) => (
              <li key={i} className="bg-secondary px-3 py-1 rounded-full text-sm font-medium text-primary">
                {name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
