# miragejs-uuidManager
miragejs custom uuid identityManager


## Usage
```typescript
import {createServer,Factory,Model,Serializer} from 'miragejs'

import IdManager from 'miragejs-idmanager'

export function MockServer({environment = 'development'}){
    return createServer({
        environment,
        identityManagers: {
            todo: new IdManager().uuidManager(),
        } as any,
        ...
    })
}
```