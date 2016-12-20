var common =  {

  baseUrl: 'http://192.168.241.9:8082',
  /**
   * 读取url参数
   * @param key
   * @returns {String}
   */
  getQueryString: function(key) {
    var re = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i'),
      index = location.href.indexOf('?'),
      s = location.search || location.href.substr(index),
      arr = s.substr(1).match(re);
    if (arr) {
      return decodeURIComponent(arr[2]);
    }
    return '';
  }
};