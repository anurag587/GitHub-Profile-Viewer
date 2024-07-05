import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RepoCard } from "./RepoCard";

const UserInfo = () => {
  const [userData, setUserData] = useState(null);
  const [userReposData, setUserReposData] = useState([]);
  const [dataSet, setDataSet] = useState([]);
  const [sortType, setSortType] = useState("");
  const [number, setNumber] = useState("");
  const params = useParams();
  const { username } = params;
  const navigate = useNavigate();

  const sortArray = (type) => {
    if (userData) {
      const types = {
        size: "size",
        stars: "stargazers_count",
        forks: "forks_count",
      };
      const sortProperty = types[type];
      const sorted = [...userReposData]
        .sort((a, b) => b[sortProperty] - a[sortProperty])
        .slice(0, 9);
      setDataSet(sorted);
    }
  };

  const AccToNumber = (type) => {
    if (userData) {
      const types = {
        three: [...userReposData].slice(0, 3),
        six: [...userReposData].slice(0, 6),
        nine: [...userReposData].slice(0, 9),
        all: [...userReposData],
      };
      const repository = types[type];
      setDataSet(repository);
    }
  };

  const fetchUserInfo = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      setUserData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUserRepos = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos`);
      const data = await res.json();
      setUserReposData(data);
      setDataSet(data);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log("hello",dataSet)
  const date = userData?.created_at;
  const created = new Date(date);

  const handleFollowers = () => {
    navigate(`/user/${username}/followers`);
  };
  const handleFollowings = () => {
    navigate(`/user/${username}/followings`);
  };

  useEffect(() => {
    fetchUserInfo();
    fetchUserRepos();
  }, [username]); // List `userData` as a dependency

  useEffect(() => {
    sortArray(sortType);
  }, [sortType, userData]); // Include `userData` here

  useEffect(() => {
    AccToNumber(number);
  }, [number]);

  return (
    <>
      <div className=" rgb(246, 248, 250) flex flex-col items-center justify-center p-10 ">
        <img
          className="h-28 w-28 rounded-full m-3 border-4 border-violet-800 "
          src={userData?.avatar_url}
        />
        <h1 className="text-3xl mt-5 text-white text-center"> {userData?.name}</h1>
        <p className="text-xl mt-5 text-white text-center"> {userData?.bio}</p>
        <div className="flex gap-4 mt-5 justify-center ">
          <span className="flex text-white gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 "
            >
              <path
                fillRule="evenodd"
                d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
              <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
            </svg>
            {userData?.company}
          </span>
          <span className="flex text-white gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
            {userData?.location}
          </span>
          <span className="flex text-white gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
              <path
                fillRule="evenodd"
                d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                clipRule="evenodd"
              />
            </svg>
            {created.toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
            })}
          </span>
        </div>
        <div className="flex flex-row justify-center gap-5 mt-10 text-white cursor-pointer ">
          <div className="flex flex-col items-center rgb(36, 41, 46) p-4 bg-zinc-500 hover:bg-blue-400 transition duration-300 ease-in-out">
            <span className="flex items-center justify-center  h-10 w-10  text-2xl ">
              {userData?.public_repos}
            </span>
            <h3>Repositories</h3>
            {/* </Link> */}
          </div>
          <div
            className="flex flex-col items-center bg-zinc-500 p-4 hover:bg-blue-400 transition duration-300 ease-in-out "
            onClick={handleFollowers}
          >
            <span className="flex items-center justify-center  h-10 w-10  text-2xl ">
              {userData?.followers}
            </span>
            <h3>Followers</h3>
          </div>
          <div
            className="flex flex-col items-center bg-zinc-500 p-4 hover:bg-blue-400 transition duration-300 ease-in-out "
            onClick={handleFollowings}
          >
            <span className="flex items-center justify-center  h-10 w-10 text-2xl">
              {userData?.following}
            </span>
            <h3>Following</h3>
          </div>
          <div className="flex flex-col items-center bg-zinc-500 p-4 hover:bg-blue-400 transition duration-300 ease-in-out ">
            <span className="flex items-center justify-center  h-10 w-10 text-2xl">
              {userData?.public_gists}
            </span>
            <h3>Gists</h3>
          </div>
        </div>
      </div>
      <div className="mb-5 flex flex-row content-center justify-center">
        <div className="flex items-center justify-center p-4  rounded-lg shadow-md">
          <h1 className="text-lg font-semibold text-white mr-2">Sort by</h1>
          <select
            className="p-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="size">Size</option>
            <option value="stars">Stars</option>
            <option value="forks">Forks</option>
          </select>
        </div>
        <div className="flex items-center justify-center p-4  rounded-lg shadow-md">
          <h1 className="text-lg font-semibold text-white mr-2">Top Repos </h1>
          <select
            className="p-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setNumber(e.target.value)}
          >
            <option value="all">All</option>
            <option value="three">3</option>
            <option value="six">6</option>
            <option value="nine">9</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 content-center justify-center bg-slate-200  ">
      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center ">
        {dataSet.map((item) => (
          <li key={item.id} className="list-none sm:w-full flex gap-4">
          <RepoCard {...item}  />
          </li>
        ))}
        </ul>
      </div>
    </>
  );
};
export default UserInfo;
