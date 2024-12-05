## Tronic Receiver NextJS Example

This repo provides an example of how to use the Tronic Receiver within a NextJS app.

````
import { ReceiverBrowser } from '@tronic/receiver-browser';

const receiver = ReceiverBrowser.load({ writeKey: '0x0x0x0x0x0x0x0x0x0x' })

const userId = '0x0x0x0x0x0x0x0x0x0x';

export const TrackButton = () => {
  return (
    <button onClick={() => receiver.track(
      userId,
      'test-event0',
      {
        property0: 'value0',
      }
    )}>Track</button>
  );
};
````

To run:
```bash
yarn dev
```
