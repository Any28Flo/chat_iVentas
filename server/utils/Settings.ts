
class Settings {
    readonly appId: string
    readonly key: string
    readonly secret: string
    readonly cluster: string
    readonly useTLS: boolean

    constructor(appId: string, key: string, secret: string, cluster: string, useTLs: boolean = true) {
        this.appId = appId;
        this.key = key;
        this.secret = secret;
        this.cluster = cluster;
        this.useTLS = useTLs
    }
}
export default Settings