import { storiesOf } from "@storybook/react";
import React from "react";
import Section from "./Section";

storiesOf("Section", module)
  .add("Full-width Section", () => (
    <Section background="eee" fullWidth={true}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio
      cumque vel, porro saepe voluptatem aliquid consequatur, sed dignissimos,
      dicta in illo officiis pariatur. Pariatur maxime molestiae reiciendis odit
      autem!
    </Section>
  ))
  .add("Fixed-width Section", () => (
    <Section background="eee" fullWidth={false}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio
      cumque vel, porro saepe voluptatem aliquid consequatur, sed dignissimos,
      dicta in illo officiis pariatur. Pariatur maxime molestiae reiciendis odit
      autem!
    </Section>
  ))
  .add("Fixed-width-Transparent Section", () => (
    <Section fullWidth={false}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat optio
      cumque vel, porro saepe voluptatem aliquid consequatur, sed dignissimos,
      dicta in illo officiis pariatur. Pariatur maxime molestiae reiciendis odit
      autem!
    </Section>
  ));
