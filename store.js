import { action, observable } from 'mobx'
import { useStaticRendering } from 'mobx-react'

const isServer = typeof window === 'undefined'
useStaticRendering(isServer)

export class Store {
    @observable lastUpdate = 0
    @observable light = false
    @observable loginted = true // true = 로그인x, false = 로그인o
    @observable user = []

    @action setLoginted = (_loginted) => {
        this.loginted = _loginted 
    }

    hydrate(serializedStore) {
        this.lastUpdate =
            serializedStore.lastUpdate != null
                ? serializedStore.lastUpdate
                : Date.now()
        this.light = !!serializedStore.light
    }

    @action start = () => {
        this.timer = setInterval(() => {
            this.lastUpdate = Date.now()
            this.light = true
        }, 1000)
    }

    stop = () => clearInterval(this.timer)
}

export async function fetchInitialStoreState() {
    // You can do anything to fetch initial store state
    return {}
}