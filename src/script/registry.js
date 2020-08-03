!function () {
    const username = document.querySelector('.username');
    const spanerr = document.querySelector('span');
    const form1 = document.querySelector('.form1');
    let userlock = true;
    username.onblur = function () {//失去焦点(文本域失去光标)
        if (this.value != '') {
            $ajax({
                type: 'post',
                url: 'http://localhost/JS2002/login&registry/php/registry.php',
                data: {
                    name: username.value//将用户名传给后端。
                },
                success: function (data) {//后端返回1 存在  返回空  不存在
                    if (data) {//存在
                        spanerr.innerHTML = '该用户名已经存在';
                        spanerr.style.color = 'red';
                        userlock = false;
                    } else {//不存在
                        spanerr.innerHTML = '√';
                        spanerr.style.color = 'green';
                        userlock = true;
                    }
                }
            });
        } else {
            alert('请输入用户名');
        }
    }
    //如果表单输入有误，阻止提交(form1.onsubmit = function(){})
    form1.onsubmit = function () {
        //判断用户名是否为空。
        if (username.value === '') {
            alert('请输入用户名');
            userlock = false;
        }
        if (!userlock) {//阻止的核心就是userlock为false
            return false;
        }
    }
}();

