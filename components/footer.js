import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <section>
      <div className="text-center pt-4">
        <span className="font-semibold text-2xl text-primary">
          Decodehud
        </span>
        <div className="flex justify-center space-x-2  pt-4 text-sm">
          <p className=" text-primary">Made with</p>

          <div className="flex space-x-2">
            <AiFillHeart aria-label="heart" className="text-red-400 text-xl" />
           
              <span>in El Salvador.</span>
           
          </div>
        </div>

        <div className="py-3">
          <p className="text-xs  font-Poppins text-primary">
            Decodehud | Copyright {year} All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
