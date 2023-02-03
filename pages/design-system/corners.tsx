import s from "../../styles/Home.module.css";
import {Button, ButtonVariant, Heading, Icon, Paragraph, Role} from "altrone-ui";
import React from "react";
import {ImageList} from "../../components/ImageFigure/ImageList";
import {ImageFigure} from "../../components/ImageFigure/ImageFigure";

export default function Home() {
  return (<>
    <div className={s.backButton}>
      <Button href='/design-system' variant={ButtonVariant.text} leftIcon={<Icon i='arrow_back_ios' />} role={Role.primary}>Design System</Button>
      <Button variant={ButtonVariant.text} rightIcon={<Icon i='share' />} role={Role.primary}>Share</Button>
    </div>
    <Heading>
      Rounded corners
    </Heading>
    <Paragraph>
      There are very few objects in nature with sharp edges. So in Altrone all components have rounded corners. We use
      three different radius: for containers (12px), controls (8px) and inner elements (6px). When you develop your own
      components try to follow this values. This will allow you to make component that don't look like alien.
    </Paragraph>
    <ImageList>
      <ImageFigure src='/images/design-system/corners1.png' alt='Three different values of corners' width={648} height={280}>
        Three different values of corners: for containers, for controls and inner elements
      </ImageFigure>
    </ImageList>

    <Paragraph>
      Let's look on some example of usage this corner system:
    </Paragraph>

    <ImageList>
      <ImageFigure src='/images/design-system/corners2.png' alt='Example with modal' width={259} height={140}>
        Modal container has 12px radius, but button has 8px radius
      </ImageFigure>
      <ImageFigure src='/images/design-system/corners3.png' alt='Example with modal' width={252} height={140}>
        ContextMenu has 12px radius, but selected ContextMenuItem has 8px radius
      </ImageFigure>
      <ImageFigure src='/images/design-system/corners4.png' alt='Example with modal' width={374} height={140}>
        NumberInput has 8px radius, but counter has 6px radius
      </ImageFigure>
    </ImageList>
  </>)
}