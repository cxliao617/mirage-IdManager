# miragejs-IdManager
miragejs custom id identityManager

## Support with UUID v4 and ObjectId
### UUIDv4 manager
```typescript
new IdManager().uuidManager()
```
### ObjectId Manager
```typescript
new IdManager().objectIdManager()
```
## Usage
```typescript
import {createServer,Factory,Model,Serializer} from 'miragejs'

import IdManager from 'miragejs-idmanager'

export function MockServer({environment = 'development'}){
    return createServer({
        environment,
        identityManagers: {
            todo: new IdManager().uuidManager(),
            user: new IdManager().objectIdManager(),
        } as any,
        ...
    })
}
```