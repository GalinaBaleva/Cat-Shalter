const http = require('http');
const fs = require('fs/promises');


const server = http.createServer(async (req, res) => {
    const url = req.url;

    if(url === '/'){
        const homeHtml = await fs.readFile('./views/home/index.html', 'utf-8');
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write(homeHtml);
    } 
    else if(url === '/styles/site.css'){
        const mainCss = await fs.readFile('./content/styles/site.css')
        res.writeHead(200, {"Content-Type": "text/css"});
        res.write(mainCss);

    } else if(url === '/cats/add-breed'){
        const addBreed = await fs.readFile('./views/addBreed.html', 'utf-8');

        res.writeHead(200, {
            "Content-Type": "text/html",
        });
        res.write(addBreed);
    } else if(url === '/cats/add-cat'){
        const addCat = await fs.readFile('./views/addCat.html', 'utf-8');

        res.writeHead(200, {
            "Content-Type": "text/html",
        });
        res.write(addCat);
    } 

    res.end();
});

server.listen(5000, () => {
    console.log(`This server is running on port ${server.address().port}`);
})