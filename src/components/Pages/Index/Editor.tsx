import EditorIllustration from "@/components/Illustrations/Editor";
import Container from "@/components/Layout/Container";
import ContainerHeader from "@/components/Layout/Container/Header";
import ContainerHeaderCategory from "@/components/Layout/Container/Header/Category";
import ContainerHeaderTitle from "@/components/Layout/Container/Header/Title";
import ContainerWrapper from "@/components/Layout/Container/Wrapper";
import { Rocket } from "lucide-react";
import React from "react";

const IndexEditor = () => {
  return (
    <Container>
      <ContainerWrapper>
        <ContainerHeader>
          <ContainerHeaderCategory
            icon={<Rocket />}
            text="Графический редактор"
          />
          <ContainerHeaderTitle>
            Вооплотите все фантазии
            <br />
            <span className="text-aqua">в реальность</span>
          </ContainerHeaderTitle>
        </ContainerHeader>
      </ContainerWrapper>

      <div className="relative h-[400px] overflow-hidden">
        <div
          className="
    absolute 
    bottom-0
    left-[30px]
    h-full 
    w-[638px]
    origin-bottom-left
    scale-[0.77]

    sm:left-auto 
    sm:right-0
    sm:w-auto
    sm:scale-100
  "
        >
          <EditorIllustration />
        </div>
      </div>
    </Container>
  );
};

export default IndexEditor;
