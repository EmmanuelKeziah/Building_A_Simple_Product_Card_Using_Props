import "./App.css";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

import Card from "./components/reusable/Card";
import joy from "./assets/joy.jpg";

function App() {
  return (
    <>
      <div className="flex items-center max-w-[300px] m-auto border-2 border-[#D2EAF7] rounded-lg p-4 shadow-xl">
        <Card
          name="Main Heading"
          duration="3 months"
          subheading="Sub Heading"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          tag="USD 3"
          img1={
            <img
              src={joy}
              alt="Joy"
              className="max-w-[270px] h-48 object-cover rounded-lg"
            />
          }
          img2={<FaYoutube />}
          img3={<FaInstagramSquare />}
          img4={<FaTwitter />}
          img5={<FaTiktok />}
        />
      </div>
    </>
  );
}

export default App;
