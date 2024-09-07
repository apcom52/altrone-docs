import {Button, Checkbox, CollapsedList, Flex, PhotoViewer, useBoolean} from "altrone-ui";
import {useState} from "react";

export const PhotoViewerDemo = () => {
  const { value: visible, enable, disable } = useBoolean(false);

  return <Flex>
    <Button onClick={enable} label="Open gallery" />
    {visible ? <PhotoViewer onClose={disable}>
      <PhotoViewer.Image caption="Adele 30" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Adele_-_30.png/220px-Adele_-_30.png" />
      <PhotoViewer.Image caption="Adele 25" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Adele_-_25_%28Official_Album_Cover%29.png/220px-Adele_-_25_%28Official_Album_Cover%29.png" />
      <PhotoViewer.Image caption="Adele 21" src="https://cdns-images.dzcdn.net/images/cover/8bdaf37e2e7f883e84bbc3462c938293/500x500.jpg" />
      <PhotoViewer.Image caption="Adele 19" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Adele_-_19.png/220px-Adele_-_19.png" />
    </PhotoViewer> : null}
  </Flex>
}