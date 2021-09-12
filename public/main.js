console.log('加载main.js')
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const XML = request.responseXML
            const text = XML.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())

        }
    };
    request.send();
};
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    //request.open(method,url) method:get,post,delete
    //获取文件
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('success load')
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style')
                //创建style标签，保存在style中
                style.innerHTML = request.response
                //在style中插入获得的文件，这里是style.css
                document.head.appendChild(style)
                //把包含css样式的style插入到head标签里
            } else {
                alert('加载失败')
            }

        }
    };
    // request.onload = () => {
    //     console.log('success load')
    //     const style = document.createElement('style')
    //     //创建style标签，保存在style中
    //     style.innerHTML = request.response
    //     //在style中插入获得的文件，这里是style.css
    //     document.head.appendChild(style)
    //     //把包含css样式的style插入到head标签里
    // };
    // request.onerror = () => {
    //     console.log('fail load')
    // };
    request.send();
};
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    //request.open(method,url) method:get,post,delete
    //获取文件
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('success load')
            if (request.status >= 200 && request.status < 300) {

                const js = document.createElement('script')

                js.innerHTML = request.response

                document.body.appendChild(js)

            } else {
                alert('加载失败')
            }

        }
    };
    request.send();
};
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    //request.open(method,url) method:get,post,delete
    //获取文件
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('success load')
            if (request.status >= 200 && request.status < 300) {

                const html = document.createElement('div')

                html.innerHTML = request.response

                document.body.appendChild(html)

            } else {
                alert('加载失败')
            }

        }
    };
    request.send();
};
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const obj = JSON.parse(request.response)
            //把符合json语法的字符串变成对应的对象
            console.log(obj)
            hello.textContent = obj.name
        }
    };
    request.send();
};
let n = 1;
nextPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            const xxx = document.getElementById('next')
            while (xxx.firstChild) {
                xxx.removeChild(xxx.firstChild);
            }
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.name
                next.appendChild(li);
            });
            n = n + 1;
        }
    };
    request.send();
};
beforePage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/page${n-1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            const xxx = document.getElementById('next')
            while (xxx.firstChild) {
                xxx.removeChild(xxx.firstChild);
            }

            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.name
                next.appendChild(li);
            });
            n = n - 1;
        }
    };
    request.send();
};