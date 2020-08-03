!function () {
    const username = document.querySelector('.username');
    const password = document.querySelector('.password');
    const btn = document.querySelector('.btn');
    btn.onclick = function () {
        $ajax({
            type: 'post',
            url: 'http://localhost/JS2002/login&registry/php/login.php',
            data: {//将用户名和密码传给后端
                user: username.value,
                pass: hex_sha1(password.value)
            },
            success: function (data) {//返回1 登录成功  返回空  登录失败
                if (data) {//登录成功
                    location.href = 'index.html';
                    localStorage.setItem('xingming', username.value);//将用户名永久存储。
                } else {//登录失败
                    alert('用户名或者密码错误');
                    password.value = '';
                }
            }
        });
    }
}();