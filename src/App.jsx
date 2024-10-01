import { useState } from "react"; 
import Chat from "./components/Chat";
import Swal from "sweetalert2";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [chats, setChats] = useState([]);
  const [started, setStarted] = useState(false);

  const startChat = (e) => {
    e.preventDefault();
    if (name1.trim() && name2.trim()) {
      setStarted(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Both usernames!",
      });
    }
  };

  const sendMsg = (userId, sender, text) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setChats([...chats, { userId, sender, text, time }]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 py-6 flex flex-col justify-center w-full">
      <h1 className="flex items-center justify-center text-2xl md:text-4xl font-bold text-[#bb85d4] mb-5 tracking-wide">
        Start Chatting!
      </h1>

      {!started ? (
        <div className="relative py-3 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl mx-auto w-full px-4 sm:px-6 md:px-8">
          <div className="absolute inset-1 bg-gradient-to-r from-[#d19fe8] to-purple-800 shadow-lg transform -skew-y-6 md:skew-y-0 md:-rotate-6 rounded-2xl md:rounded-3xl"></div>
          <div className="relative py-8 md:py-10 bg-white shadow-xl rounded-2xl md:rounded-3xl p-6 md:p-20">
            <div className="max-w-md mx-auto w-full">
              <h1 className="text-xl md:text-3xl font-semibold text-[#d19fe8] mb-6">
                Enter Usernames
              </h1>
              <div className="divide-y divide-gray-200">
                <div className="py-6 md:py-8 text-base md:text-lg leading-6 space-y-6 text-gray-700 md:text-xl">
                  <form onSubmit={startChat} className="space-y-4">
                    <div className="relative">
                      <input
                        id="name1"
                        name="name1"
                        type="text"
                        className="peer placeholder-transparent h-10 md:h-12 w-full border-b-2 border-purple-400 text-gray-900 focus:outline-none focus:border-purple-600 transition-all duration-300"
                        placeholder="User 1"
                        value={name1}
                        onChange={(e) => setName1(e.target.value)}
                      />
                      <label
                        htmlFor="name1"
                        className="absolute left-0 -top-5 text-purple-500 text-sm md:text-lg transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-purple-700"
                      >
                        User 1
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        id="name2"
                        name="name2"
                        type="text"
                        className="peer placeholder-transparent h-10 md:h-12 w-full border-b-2 border-purple-400 text-gray-900 focus:outline-none focus:border-purple-600 transition-all duration-300"
                        placeholder="User 2"
                        value={name2}
                        onChange={(e) => setName2(e.target.value)}
                      />
                      <label
                        htmlFor="name2"
                        className="absolute left-0 -top-5 text-purple-500 text-sm md:text-lg transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-purple-700"
                      >
                        User 2
                      </label>
                    </div>

                    <div className="relative">
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg px-4 py-2 w-full md:text-lg font-semibold transition-all transform hover:scale-105 focus:outline-none shadow-lg"
                      >
                        Start Chat
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 w-full h-[130vh] md:h-[100vh]">
          <Chat userId="user1" userName={name1} chats={chats} sendMsg={sendMsg} />
          <button
            onClick={() => window.location.reload()}
            className="bg-purple-500 text-white px-6 py-2 rounded-lg font-bold transition-all transform hover:scale-105 focus:outline-none shadow-lg"
          >
            Log Out
          </button>
          <Chat userId="user2" userName={name2} chats={chats} sendMsg={sendMsg} />
        </div>
      )}
    </div>
  );
}

export default App;
