import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
const Register = () => {
  return (
    <div
      className="w-full h-screen flex flex-row items-center justify-center"
      style={{
        backgroundImage: "url('./thread2.avif')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 600px",
      }}
    >
      <div className="flex flex-col w-[400px] gap-2 bg-slate-100 p-10 rounded-lg">
        <p className="font-semibold text-2xl items-center flex text-black">
          Register with email
        </p>
        <Input type="text" placeholder="Enter Your Name" name="name" />
        <Input type="email" placeholder="Enter Your Email" name="email" />
        <Input
          type="password"
          placeholder="Enter Your Password"
          name="password"
        />
        <Button className="w-full h-10 bg-green-500 text-white text-lg hover:bg-blue-400 cursor-pointer duration-500 ease-in">
          Register
        </Button>
        <p>
          Already have an account ?
          <span className="cursor-pointer hover:text-blue-600 hover:underline ml-1">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
