import IndexBlock from "@/components/Layout/Banner";
import ContainerText from "./Banner/MainContainerText";
import InfoBlock from "./Heading";
import Category from "./Heading/Category";
import TitleHeading from "./Heading/Title";
import MediumInfoBlock from "./Heading/MediumHeading";
import UIButton from "../Ui/Button";
import { Rocket } from "lucide-react";

interface Container {
  children: React.ReactNode;
}

const Container: React.FC<Container> = ({ children }) => {
  return (
    <div className="relative w-full border-l border-r border-[1px] border-solid border-neutral-800">
      {children}
    </div>
  );
};

export default Container;
