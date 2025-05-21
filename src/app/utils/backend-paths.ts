export class BackendPaths {
    private static base_url = process.env.NEXT_PUBLIC_BASE_URL ?? ""

    public static get sendMessage(): string {
        return this.base_url.concat("/send")
    }
}