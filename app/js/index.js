(function(){
  loading.show();
  setTimeout(function() {
    loading.remove();
    toast.show('Hello Grunt');
  }, 3000);
})();