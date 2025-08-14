import Wrapper from "@/components/Layout/Wrapper";
import SectionWithDashed from "@/components/Layout/SectionWithDashed";
import IndexMain from "@/components/Pages/Index/Main";
import IndexEditor from "@/components/Pages/Index/Editor";
import IndexAutoAPI from "@/components/Pages/Index/AutoAPI";
import IndexQuestion from "@/components/Pages/Index/Question";
import IndexPublish from "@/components/Pages/Index/Publish";
import BottomBanner from "@/components/Pages/Index/Banner";

export default function Home() {
  return (
    <>
      <Wrapper>
        <SectionWithDashed isLast centerGap={1280} mtop={-1}>
          <IndexMain />
        </SectionWithDashed>
        <SectionWithDashed isLast centerGap={1280}>
          <IndexEditor />
        </SectionWithDashed>
        <SectionWithDashed isLast centerGap={1280}>
          <div className="flex sm:flex-row flex-col">
            <IndexAutoAPI />
            <IndexQuestion />
          </div>
        </SectionWithDashed>
        <SectionWithDashed isLast centerGap={1280} mtop={-1}>
          <div className="flex">
            <IndexPublish />
          </div>
        </SectionWithDashed>
      </Wrapper>
      <BottomBanner/>
    </>
  );
}
