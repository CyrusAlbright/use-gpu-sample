import React, { LC, hot, into, useFiber, useOne, useResource } from '@use-gpu/live';
import { AutoCanvas, WebGPU } from '@use-gpu/webgpu';

import '@use-gpu/inspect/theme.css';

export const base = location.host === 'localhost:4000' || location.host === 'acko.net' ? "/files/gpubox/" : "/";

export const App: LC = hot(() => {
  const root = document.querySelector('#gpu-box')!;
  const inner = document.querySelector('#gpu-box .canvas')!;
  
  const view = (
      <WebGPU
        fallback={(error: Error) =>
			<div>
				Hi btiches
			</div>
        }
      >
        <AutoCanvas
          selector={'#gpu-box .canvas'}
          samples={4}
        >

        </AutoCanvas>
      </WebGPU>
  );

  return view;
}, module);
