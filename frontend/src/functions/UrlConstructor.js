export const constructUrl = (baseUrl, routes) => {
    var url = baseUrl+"/"
    routes.map(elem => {
        url+= elem
    })
    return url
}