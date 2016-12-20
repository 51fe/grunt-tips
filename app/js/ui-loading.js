var loading = {
  /**
   * 开始加载
   */
  show: function() {
    var bmLoader = document.getElementById('bmLoader');
    if (bmLoader == undefined) {
      var img = document.createElement('img'),
        div = document.createElement('div');

      img.className = 'loader';
      img.src = 'img/loading.gif';
      div.id = 'bmLoader';
      div.appendChild(img);
      document.body.appendChild(div);
    }
  },

  /**
   * 加载结束
   */
  remove: function() {
    var bmLoader = document.getElementById('bmLoader');
    document.body.removeChild(bmLoader);
  }
};
