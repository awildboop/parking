class DomainLoader {

    element(element) {
        console.log(element)
        // element.replace(default_header);
    }
}

export default {
    async fetch(request, env) {
        const url = new URL(request.URL);
        console.log("test");
        return env.ASSETS.fetch(request);
    }
}
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