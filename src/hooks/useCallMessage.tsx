import toast from "react-hot-toast";

function useCallMessage(message: string) {
  return toast.error(message, {
    position: "top-left",
    duration: 3000,
  });
}

export { useCallMessage };
