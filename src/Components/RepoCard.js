import React from "react";


//console.log(userRepos);
export const RepoCard = ({
  name,
  description,
  language,
  forks_count,
  stargazers_count,
  size,
  html_url,
}) => {
  const handleRepo =()=>{
    window.open(html_url, '_blank');
  }
  return (
    <div className="mt-5 mb-1 cursor-pointer" onClick={handleRepo}>
    <div className="h-full w-96 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 border-solid border-2 border-neutral-200 flex flex-col">
      <div className="flex items-center p-4">
        <h1 className="ml-4 text-xl font-semibold text-black truncate">{name}</h1>
      </div>
      <div className="px-4 pb-4 flex-grow flex flex-col justify-between">
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex justify-between mt-2">
          <p className="text-gray-600 truncate">{language}</p>
          <span className="flex flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.867 19.125h.008v.008h-.008v-.008Z"
              />
            </svg>
            <p className="text-gray-600 truncate">{forks_count}</p>
          </span>
          <span className="flex flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <p className="text-gray-600 truncate">{stargazers_count}</p>
          </span>
          <p className="text-gray-600 truncate">{size} KB</p>
        </div>
      </div>
    </div>
  </div>
  );
};
