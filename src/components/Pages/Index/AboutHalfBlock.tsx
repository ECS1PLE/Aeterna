import Container from "@/components/Layout/Container";
import ContainerHeader from "@/components/Layout/Container/Header";
import ContainerHeaderCategory from "@/components/Layout/Container/Header/Category";
import ContainerHeaderTitle from "@/components/Layout/Container/Header/Title";
import ContainerWrapper from "@/components/Layout/Container/Wrapper";

interface HalfBlock {
  MainHeaderTitle: string;
  icon?: React.ReactNode;
  text: string;
  borderTop?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  borderRight?: boolean;
  children?: React.ReactNode; 
  className?: string; 
}

const AboutHalfBlock: React.FC<HalfBlock> = ({
  MainHeaderTitle,
  icon,
  text,
  borderTop = false,
  borderBottom = false,
  borderLeft = false,
  borderRight = false,
  children,
}) => {
  return (
    <Container
      borderTop={borderTop}
      borderBottom={borderBottom}
      borderLeft={borderLeft}
      borderRight={borderRight}
    >
      <ContainerWrapper>
        <ContainerHeader>
          <ContainerHeaderCategory icon={icon} text={MainHeaderTitle} />
          <ContainerHeaderTitle>{text}</ContainerHeaderTitle>
        </ContainerHeader>
        {children} 
      </ContainerWrapper>
    </Container>
  );
};

export default AboutHalfBlock;