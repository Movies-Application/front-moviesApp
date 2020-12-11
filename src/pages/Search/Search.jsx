import React from "react";
import { Circle, Hero, Section, StyledSection } from "../../components/";
import * as S from "./Search.style";
import addIcon from "../../assets/plus.svg";
import searchIcon from "../../assets/search-icon.svg";
import heroImg from "../../assets/hero-movie.jpeg";

function Search() {
  return (
    <Hero image={heroImg} shadow>
      <Section>
        <StyledSection
          pageTitle="make yourself comfortable"
          description="Choose an action and get started!"
        >
          <S.FlexWrapper>
            <Circle route="/login" image={addIcon} name="ADD" />
            <Circle route="" image={searchIcon} />
          </S.FlexWrapper>
        </StyledSection>
      </Section>
    </Hero>
  );
}

export default Search;
