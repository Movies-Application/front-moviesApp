import React from "react";
import { Header, Circle, Section, StyledSection } from "../../components/";
import * as S from "./Home.style";
import addIcon from "../../assets/plus.svg";
import searchIcon from "../../assets/search-icon.svg";
import myCollection from "../../assets/video-camera.svg";

function Home() {
  return (
    <S.Hero>
      <Header />
      <Section>
        <StyledSection
          pageTitle="make yourself comfortable"
          description="Choose an action and get started!"
        >
          <S.FlexWrapper>
            <Circle route="/add" image={addIcon} />
            <Circle route="/search" image={searchIcon} />
            <Circle route="" image={myCollection} />
          </S.FlexWrapper>
        </StyledSection>
      </Section>
    </S.Hero>
  );
}

export default Home;
