self.addEventListener('install',(e)=>{
    e.waitUntil(
        caches.open('version1')
        .then(cache=>{
            cache.addAll(['/','index.html','/src/css/style.css','/src/js/script.js','/src/images/pwa.jpg'])
        })
        .catch(err=>{console.log(err)})
    )
})

self.addEventListener('activate',event=>{
    console.log("sw activated")
})

self.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.match(event.request)
            .then(res=>{
                if(res){
                    return res
                }
                else{
                    return fetch(event.request)
                }
            })
    )
})