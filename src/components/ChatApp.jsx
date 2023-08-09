// import { SiGooglechat } from "react-icons/si";
// import { GrFormClose } from "react-icons/gr";
// import { FiSend } from "react-icons/fi";
// import { useState } from "react";

// const ChatApp = () => {
//   const [openPopup, setOpenPopup] = useState(false);

//   return (
//     <div className="fixed bottom-10 sm:right-14 right-0 z-50 flex justify-items-center">
//       <button onClick={() => setOpenPopup((prev) => !prev)}>
//         <SiGooglechat fontSize={40} className="bg-primary p-2 rounded-md" />
//       </button>
//       {openPopup && (
//         <div className="absolute bottom-12 h-96 w-72 bg-secondary sm:right-5 right-3 rounded-md flex flex-col justify-between">
//           <div className="flex items-center justify-between p-2 border-b border-black">
//             <h1 className="font-bold text-black">Chat</h1>
//             <button onClick={() => setOpenPopup((prev) => !prev)}>
//               <GrFormClose className="text-2xl" />
//             </button>
//           </div>
//           <div className="flex items-center">
//             <input
//               type="text"
//               placeholder="Type the message..."
//               className="w-full h-[32px] relative bg-primary outline-none rounded-md  pl-2"
//             />
//             <button>
//               <FiSend className="absolute right-0 bottom-1 text-2xl" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatApp;
