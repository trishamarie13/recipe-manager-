export default function SummaryBar({ total, favorites }) {
  return (
    <div className="stats shadow w-full">
      <div className="stats shadow w-full">
        <div className="stat-title">total recipes</div>
        <div className="stat-value">{total}</div>
      </div>

      <div className="stat">
        <div className="stat-title">Favorites</div>
        <div className="stat-value">{favorites} ★</div>
      </div>
      {/* TODO: two <div className="stat"> blocks.
          - First: title "Total Recipes", value {total}
          - Second: title "Favorites", value {favorites} ★
      */}
    </div>
  );
}
