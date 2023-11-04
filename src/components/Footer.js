export default function Footer({ data, onFilters }) {
  const remaining = data.filter((item) => item.checked !== true);

  return (
    <div className="footer">
      {data.length > 0 ? (
        <>
          <span>
            {remaining.length > 0
              ? `${remaining.length} Items left`
              : "You are done!"}
          </span>
          <div className="filters">
            <input
              id="all"
              type="radio"
              name="filter"
              defaultChecked
              onClick={onFilters}
            />
            <label htmlFor="all">All</label>
            <input id="active" type="radio" name="filter" onClick={onFilters} />
            <label htmlFor="active">Active</label>
            <input
              id="completed"
              type="radio"
              name="filter"
              onClick={onFilters}
            />
            <label htmlFor="completed">Completed</label>
          </div>
        </>
      ) : (
        "Start by adding some things to do."
      )}
    </div>
  );
}
