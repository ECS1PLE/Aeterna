import Container from "@/components/Layout/Container";
import ContainerHeader from "@/components/Layout/Container/Header";
import ContainerHeaderCategory from "@/components/Layout/Container/Header/Category";
import ContainerHeaderTitle from "@/components/Layout/Container/Header/Title";
import ContainerWrapper from "@/components/Layout/Container/Wrapper";
import StackIllustration from "../Illustrations/Stack";

interface FullBlock {
  MainHeaderTitle: string;
  icon?: React.ReactNode;
  text: string;
  borderTop?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  borderRight?: boolean;
  children?: React.ReactNode; 
  className?: string; 
  showMenu?:boolean;
}

const FullBlock: React.FC<FullBlock> = ({
  MainHeaderTitle,
  icon,
  text,
  borderTop = true,
  borderBottom = true,
  borderLeft = true,
  borderRight = true,
  children,
  showMenu = true,
}) => {
  return (
    <Container
      borderTop={borderTop}
      borderBottom={borderBottom}
      borderLeft={borderLeft}
      borderRight={borderRight}
    >
      <ContainerWrapper className="sm:w-[509px] sm:h-full flex flex-col sm:flex-row">
        <ContainerHeader className="sm:w-[509px] sm:h-[100%] sm:justify-between">
          <div>
            <ContainerHeaderCategory icon={icon} text={MainHeaderTitle} />
            <ContainerHeaderTitle className="max-w-[509px]">{text}</ContainerHeaderTitle>
          </div>
          {showMenu && (<StackIllustration />)}
        </ContainerHeader>
        {children} 
      </ContainerWrapper>
    </Container>
  );
};

export default FullBlock;