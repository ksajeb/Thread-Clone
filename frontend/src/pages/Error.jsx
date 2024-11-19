import { Button } from "../components/ui/button";
const Error = () => {
  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center "
      style={{
        backgroundImage: "url('./error2.avif')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="p-5 border border-black bg-white rounded-xl items-center gap-2 flex flex-col shadow-slate-600">
        <h3>OOP&apos;s</h3>
        <h6>You entered wrong location!!</h6>
        <Button className="text-white bg-blue-500 hover:bg-green-800">
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default Error;
