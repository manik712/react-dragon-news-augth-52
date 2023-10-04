import { BsGoogle } from "react-icons/bs";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Login With</h2>

        <button className="btn btn-outline w-full">
          <BsGoogle></BsGoogle>Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>Login with Github
        </button>
      </div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Find us on</h2>
        <a className="flex items-center gap-2 p-4" href="">
          <FaFacebook className=""></FaFacebook>Facebook
        </a>
        <a className="flex items-center gap-2 p-4" href="">
          <FaTwitter className="text-blue-500"></FaTwitter>Twitter
        </a>
        <a className="flex items-center gap-2 p-4 " href="">
          <FaInstagram className="text-fuchsia-600"></FaInstagram>Instagram
        </a>
      </div>
    </div>
  );
};

export default RightSideNav;
