import React from "react";
import {Heading, Paragraph} from '../altrone'
import {Release} from "../components/Release/Release";

export default function Home() {
  return (<>
    <Heading>Make beautiful and functional interfaces!</Heading>
    <Paragraph>Altrone - it's about convenience. It has many components for every purpose which provide a good interface and user
      experience. Every component has a lot of features and customization - variants, roles and etc. Also all
      components perfectly work with dark interfaces.
    </Paragraph>

    <div>
      <Release title='Decent Dragon' latestVersion='4.0.0 RC' lastUpdate='9 December 2022' backgroundImage='/dragon.JPG' />
      <Release title='Curious CatZilla' latestVersion='3.0.0 RC' lastUpdate='9 December 2022' backgroundImage='/catzilla.JPG' />
      <Release title='Blind Basilisk' latestVersion='2.0.0 RC' lastUpdate='9 December 2022' backgroundImage='/basilisk.JPG' />
      <Release title='Angry Acromantula' latestVersion='1.0.0 RC' lastUpdate='9 December 2022' backgroundImage='/acromantula.JPG' />
    </div>
  </>)
}
