# web作业

tips:

+ 项目部署在`ooblogs.com`，IP为`139.196.195.26`，服务器为Apache/2.4.46 (Win64) PHP/7.4.9，此服务器将在9.28过期。

+ **建议使用`Firefox`浏览器**。在`chrome`浏览器中缩放比例调的太小会出现显示问题；在`Edge`浏览器中放大比例时会出现未知原因的卡顿，以及网页左上角会发生微小的偏移。在`Firefox`浏览器中上述问题均不会出现。

+ 有一些字体可能需要一定时间来加载。

与上次的作业提交相比：

用一个margin属性为auto的div节点修复了放大之后出现的显示问题。

增加了favicon。

增加了后端`php`代码。

增加了`javascript`代码。

通过Apache的`RewriteEngine`，隐藏了url中的.php后缀， 便于实现RESTful风格的请求。
```
#.htaccess:

RewriteEngine on

\# Rewrite /foo/bar to /foo/bar.php
RewriteRule ^([^.?]+)$ %{REQUEST_URI}.php [L]

\# Return 404 if original request is /foo/bar.php
RewriteCond %{THE_REQUEST} "^[^ ]* .*?\.php[? ].*$"
RewriteRule .* - [L,R=404]

\# NOTE! FOR APACHE ON WINDOWS: Add [NC] to RewriteCond like this:
\# RewriteCond %{THE_REQUEST} "^[^ ]* .*?\.php[? ].*$" [NC]
```
