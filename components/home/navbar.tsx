import { Input } from "../ui/input";

export default function Navbar() {
  return (
    <div className="flex flex-row  border-b-2 border-black py-2 justify-between items-center w-full px-12">
      <div className=" text-3xl font-bold">ByteCode</div>
      <div className="flex flex-row  justify-between gap-5 text-lg font-semibold itmes-center">
        <div>Articles</div>
        <div>Tutorials</div>
        <div>About</div>
        <div>Dashboard</div>
      </div>
      <div className="flex flex-row justify-between items-center  gap-2">
        <Input className="" placeholder="search articles" />
        <span>Icon</span>
        <div className="bg-red-700 rounded-lg w-9 text-center">P</div>
      </div>
    </div>
  );
}
