export const onRequestGet = async ({ request, next }) => {
    console.log(JSON.stringify(request))
    try{
      // Get the static asset response
      const response = await next()
        
      // Find the placeholder in our static asset
      return new HTMLRewriter().on('h1', {
        // And act on the element
        element(element) {
          // https://developers.cloudflare.com/workers/runtime-apis/html-rewriter#methods
          element.setInnerContent(request.headers.get("Host"), { html: true })
        }
      }).transform(response)
      } catch (thrown){
          return new Response(thrown);
      }
    }