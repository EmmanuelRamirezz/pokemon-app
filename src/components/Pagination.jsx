export const Pagination = (props) => {
  const {onLeftClick, onRightClick, page, totalPages} = props;
  return (
    <div className="flex justify-center my-20 gap-4">
      <button
        onClick={onLeftClick}
        className={`${page===1 ? 'invisible' : ''}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 hover:cursor-pointer hover:text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      <div className="flex flex-row items-center">{page} de {totalPages}</div>

      <button
        onClick={onRightClick}
        className={`${page===totalPages ? 'invisible' : ''}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 hover:cursor-pointer hover:text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
};
