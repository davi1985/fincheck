import { Logo } from "./logo";
import { Spinner } from "./spinner";

export const LaunchScreen = () => (
  <div className="bg-teal-900 fixed top-0 left-00 w-full h-full grid place-items-center">
    <div className="flex flex-col items-center gap-4">
      <Logo className="h-10 text-white animate-pulse" />
      <Spinner className="text-white h-5 w-5" />
    </div>
  </div>
);
