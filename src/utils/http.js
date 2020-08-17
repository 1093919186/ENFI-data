let http;
(function() {
    let baseUrl = 'http://localhost:80'
    class yxAjax {
        constructor(config) {

            this.config = Object.assign({
                url: '',
                method: 'get',
                params: null,
                // data: null,get和post都用params
                // success: function () { },
                // error: function() {}
            }, config);

            this.isGET = /^(GET|HEAD|DELETE|OPTIONS)$/i.test(config.method);
            return this.init();
        }

        init() {
            return new Promise((resolved, rejected) => {
                let xhr = new XMLHttpRequest || ActiveXObject;
                this.isGET ? xhr.open(this.config.method, this.paramsSerialize(this.config.url, this.config.params)) :
                    xhr.open(this.config.method, this.paramsSerialize(this.config.url, ''));
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr.onreadystatechange = () => {
                    let status = xhr.status,
                        readyState = xhr.readyState;
                    if (!/^(2|3)\d{2}$/.test(status)) {
                        console.log("请求错误：" + status);
                        // this.config.error(JSON.parse(xhr.responseText));
                        rejected(xhr.responseText);
                    }
                    if (readyState === 4) {
                        // this.config.success(JSON.parse(xhr.responseText));
                        try {
                            resolved(JSON.parse(xhr.responseText))
                        } catch (err) {
                            resolved(xhr.responseText);
                        }
                    }
                }
                xhr.send(this.isGET ? null : this.paramsSerialize(null, this.config.params));
            })
        }

        //将传的对象参数转为 字符串参数格式。
        paramsSerialize(url, params) {
            if (Object.prototype.toString.call(params) == '[object Null]' || Object.keys(params).length == 0) return url;
            let paramsEncoded = '';
            for (let key of Object.keys(params)) {
                paramsEncoded += `&${key}=${params[key]}`;
            };
            if (url != null) {
                return url + "?" + paramsEncoded.substring(1);
            } else {
                return paramsEncoded.substring(1);
            }
        }
    }

    function ajax(config = {}) {
        return new yxAjax(config);
    }

    //把ajax做成一个普通对象
    ['get', 'delete', 'head', 'options'].forEach(name => {
        ajax[name] = function(url = "", config = {}) {
            config.method = name;
            config.url = baseUrl + url;
            return ajax(config);
        };
    });
    ['post', 'put'].forEach(name => {
        ajax[name] = function(url = "", config = {}) {
            config.method = name;
            config.url = baseUrl + url;
            return ajax(config);
        };
    });
    http = ajax;
})();

export default http;