export default {
    async fetch(request) {
        class DomainLoader {
            element(element) {
                console.log(element)
                // element.replace(default_header);
            }
        }

        const rewriter = new HTMLRewriter()
            .on("h1", new DomainLoader());

        const res = await fetch(request);
        const contentType = res.headers.get("Content-Type");

        if (contentType.startsWith("text/html")) {
            return rewriter.transform(res);
        } else {
            return res;
        }
    }
}

/*
class DomainLoader {
    element(element) {
        console.log(element)
        // element.replace(default_header);
    }
}

export default {
    async fetch(request, env) {
      const url = new URL(request.url);
      // Otherwise, serve the static assets.
      // Without this, the Worker will error and no assets will be served.
      return env.ASSETS.fetch(request);
    },

    async handleRequest(req) {
        const res = await fetch(req);
        return new HTMLRewriter().on('h1', new DomainLoader()).transform(res);
    },
  }
*/

/* -------------------- */

/*
class DomainLoader {
    element(element) {
        console.log(element)
        // element.replace(default_header);
    }
}

async function handleRequest(req) {
    const res = await fetch(req);
    return new HTMLRewriter().on('h1', new DomainLoader()).transform(res);
}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
})

*/