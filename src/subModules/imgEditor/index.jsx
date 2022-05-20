
import React, { useState, useEffect } from 'react';
import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';

import theme from './theme';
import img from '../../img/1391.png';


function ImgEditorPanel() {
    return (
      <div onClick={(e) => e.stopPropagation()}>
 <ImageEditor
        includeUI={{
          loadImage: {
            path:   img,
            name: 'SampleImage',
          },
          theme: theme,
          menu: [
            "crop",
            "flip",
            "rotate",
            "draw",
            "shape",
            "icon",
            "text",
            "mask",
            "filter"
          ],
          initMenu: 'filter',
          uiSize: {
            width: '1000px',
            height: '700px',
          },
          menuBarPosition: 'bottom',
        }}
        cssMaxHeight={500}
        cssMaxWidth={700}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70,
        }}
        usageStatistics={true}
      />
      </div>
    )
}


export default ImgEditorPanel;
