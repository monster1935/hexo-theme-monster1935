(function(){
    // toggle按钮点击处理函数
    $('a.btn-more').click(function(){
        $('body').toggleClass('side');
        $('.sidebar').toggle();
    });
})();
