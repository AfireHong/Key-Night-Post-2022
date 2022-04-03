import { useEffect } from "react";
export default function useOnClickOutside(
  ref: React.MutableRefObject<null>,
  callback: () => void
) {
  useEffect(() => {
    function handler(event: Event) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (!(ref.current as any).contains(event.target)) {
        callback();
      }
    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [callback, ref]);
}
