import { useState } from "react";
import PropTypes from "prop-types";

function Chat({ userId, userName, chats, sendMsg }) {
  const [msg, setMsg] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (msg.trim()) {
      sendMsg(userId, userName, msg);
      setMsg("");
    }
  };

  return (
    <div className="mockup-phone flex flex-col h-full md:min-h-[90vh]">
      <div className="camera"></div>
      <div className="display flex flex-col h-full">
        <div className="bg-gray-100 shadow-md rounded-lg flex flex-col h-full">
          <div className="bg-purple-500 p-4 text-white flex justify-between items-center">
            <button className="hover:bg-purple-400 rounded-md p-1">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="6" r="4" stroke="#ffffff"></circle>
                <path
                  d="M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
            <span>{userName}</span>
            <button className="hover:bg-purple-400 rounded-md p-1">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1395 12.0002C14.1395 13.1048 13.2664 14.0002 12.1895 14.0002C11.1125 14.0002 10.2395 13.1048 10.2395 12.0002C10.2395 10.8957 11.1125 10.0002 12.1895 10.0002C13.2664 10.0002 14.1395 10.8957 14.1395 12.0002Z"
                  stroke="#ffffff"
                ></path>
                <path
                  d="M7.57381 18.1003L5.12169 12.8133C4.79277 12.2907 4.79277 11.6189 5.12169 11.0963L7.55821 5.89229C7.93118 5.32445 8.55898 4.98876 9.22644 5.00029H12.1895H15.1525C15.8199 4.98876 16.4477 5.32445 16.8207 5.89229L19.2524 11.0923C19.5813 11.6149 19.5813 12.2867 19.2524 12.8093L16.8051 18.1003C16.4324 18.674 15.8002 19.0133 15.1281 19.0003H9.24984C8.5781 19.013 7.94636 18.6737 7.57381 18.1003Z"
                  stroke="#ffffff"
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 bg-white">
            <div className="flex flex-col space-y-1">
              {chats.map((chat, index) => (
                <div
                  key={index}
                  className={
                    chat.userId === userId
                      ? "flex justify-end"
                      : "flex justify-start"
                  }
                >
                  <div
                    className={`flex flex-col ${
                      chat.userId === userId ? "items-end" : "items-start"
                    } mb-1`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600 text-sm">
                        {chat.sender}
                      </span>
                    </div>
                    <div
                      className={
                        chat.userId === userId
                          ? "bg-purple-200 text-black p-2 rounded-lg max-w-xs mt-1"
                          : "bg-gray-300 text-black p-2 rounded-lg max-w-xs mt-1"
                      }
                    >
                      {chat.text}
                    </div>
                    <span className="text-xs text-gray-500 mt-1">
                      {chat.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 flex items-center">
            <input
              type="text"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border rounded-full px-4 py-2 focus:outline-none"
            />
            <button
              type="submit"
              onClick={handleSend}
              className="bg-purple-500 text-white rounded-full p-2 ml-2 hover:bg-purple-600 focus:outline-none"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <path
                  d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Chat.propTypes = {
  userId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.string.isRequired,
      sender: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
  sendMsg: PropTypes.func.isRequired,
};

export default Chat;