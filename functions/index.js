export const onRequestGet = async ({ request, next }) => {
    console.log(JSON.stringify(request))
    try {
        const response = await next()
        return new HTMLRewriter().on('h1', {
            element(element) {
                // https://developers.cloudflare.com/workers/runtime-apis/html-rewriter#methods
                element.setInnerContent(request.headers.get("Host"), { html: true })
            }
        }).transform(response)
    } catch (thrown) {
        return new Response(thrown);
    }
}