vanillajs_offcanvas = {
  name : 'vanillajs offcanvas',
  
  version : '5.2.2x1',
  init : function(){
    this.events();
  },
  
  events : function(){
    var self = this;
    
    document.getElementsByClassName('left-off-canvas-toggle')[0].onclick = function(e){
      obj=self.closest_wrap(e);
      self.click_toggle_class(obj, 'move-right');
    };
    
    document.getElementsByClassName('right-off-canvas-toggle')[0].onclick = function(e){
      obj=self.closest_wrap(e);
      self.click_toggle_class(obj, 'move-left');
    };
    
    document.getElementsByClassName('exit-off-canvas')[0].onclick = function(e){
      obj=self.closest_wrap(e);
      self.click_remove_class(obj, 'move-right');
      self.click_remove_class(obj, 'move-left');
    };
    console.log('events');
  },
  
  click_toggle_class : function(obj, class_name){
    if(obj!=null)
    obj.classList.toggle(class_name);
  },
  
  click_remove_class : function(obj, class_name){
    if(obj!=null)
    obj.classList.remove(class_name);
  },
  
  closest_wrap: function(e){
    e=e.target;
    class_name='off-canvas-wrap';
    while (e = e.parentNode){
      if (e.classList.contains(class_name)) {
        return e;
      }
    };
    return null;
  }
  
};

vanillajs_offcanvas.init();
