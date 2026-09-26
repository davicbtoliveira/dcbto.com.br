// Serves the static site, redirecting www to the apex domain.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.dcbto.com.br") {
      url.protocol = "https:";
      url.hostname = "dcbto.com.br";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
