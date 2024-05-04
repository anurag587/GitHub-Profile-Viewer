import { TextInput, Button } from "flowbite-react";
import { useState } from "react";

const Search = () => {
    const[userName,setUserName] = useState('');
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-8 rounded-lg">
        <div className="flex ">
          {/* GitHub Logo */}
          <div className="flex-shrink-0 mr-4">
            <img className="h-12" src="github.png" alt="GitHub Logo" />
          </div>
          {/* GitHub Profile Viewer */}
          <div className="text-left">
            <h1 className="text-white text-4xl font-bold mb-4">
              GitHub Profile Viewer
            </h1>
            <p className="text-white mb-4">
              A Simple Way To Show Your GitHub Profile & Repos
            </p>
            <div className="w-full flex items-center">
              <TextInput
                type="text"
                placeholder="Search GitHub Profile"
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-800 text-black"
              />
              <Button
                gradientDuoTone="purpleToPink"
                className="ml-2 px-4 py-2 rounded-md shadow-md text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring focus:border-purple-300"
              >
                View
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;