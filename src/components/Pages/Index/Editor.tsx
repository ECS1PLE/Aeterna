"use client";

import EditorIllustration from "@/components/Illustrations/Editor";
import Container from "@/components/Layout/Container";
import ContainerHeader from "@/components/Layout/Container/Header";
import ContainerHeaderCategory from "@/components/Layout/Container/Header/Category";
import ContainerHeaderTitle from "@/components/Layout/Container/Header/Title";
import ContainerWrapper from "@/components/Layout/Container/Wrapper";
import { Rocket } from "lucide-react";
import React from "react";
import UIButton from "@/components/Ui/Button";
import { PenTool } from "lucide-react";

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

      <div className="relative h-[400px] overflow-hidden pl-8 flex flex-col">
        {" "}
        {/* Добавлено flex и flex-col */}
        <UIButton
          color="white"
          icon={<PenTool />}
          className=" mt-0 w-[174px] sm:mt-auto mb-0 sm:mb-[32px] "
        >
          О Редакторе
        </UIButton>
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
