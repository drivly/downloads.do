export default {
  fetch: (req, env) => {
    const { origin, pathname } = new URL(req.url)
    const [ _, range, target ] = pathname.split('/')
    return fetch('https://' + target, { headers: { range }})
  }
}
