"use client";

import AutoAPIIllustration from "@/components/Illustrations/AutoAPI";
import Container from "@/components/Layout/Container";
import ContainerHeader from "@/components/Layout/Container/Header";
import ContainerHeaderCategory from "@/components/Layout/Container/Header/Category";
import ContainerHeaderTitle from "@/components/Layout/Container/Header/Title";
import ContainerWrapper from "@/components/Layout/Container/Wrapper";
import { Route } from "lucide-react";
import React from "react";
import PublishIllustration from "@/components/Illustrations/Publish";

const IndexPublish = () => {
  return (
    <Container>
      <ContainerWrapper>
        <ContainerHeader>
          <ContainerHeaderCategory icon={<Route />} text="Aeterna Publish" />
          <ContainerHeaderTitle>
            Публикация вашего творчества
            <br />
            <span className="text-aqua">в два клика</span>
          </ContainerHeaderTitle>
        </ContainerHeader>
      </ContainerWrapper>
      <div className="relative h-[360px] overflow-hidden sm:overflow-visible">
        <div className="absolute right-0 bottom-0 translate-y-[30px] sm:translate-y-0 overflow-hidden">
          <PublishIllustration />
        </div>
      </div>
    </Container>
  );
};

export default IndexPublish;
