function show()
        {
            var xmlhttp;
            let id=document.getElementById("id").value;
            let password=document.getElementById("password").value;
            xmlhttp=new XMLHttpRequest();
            xmlhttp.onreadystatechange=function()
            {
                if (xmlhttp.readyState==4 && xmlhttp.status==200)
                {
                    let panduan=xmlhttp.responseText;
                    if(panduan=="1")
                    alert("登陆成功");
                    else alert("密码错误");
                }
            }
            xmlhttp.open("GET","phploginserver.php?id="+id+"&password="+password,true);
            xmlhttp.send();
        }