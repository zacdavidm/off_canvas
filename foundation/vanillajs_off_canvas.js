vanillajs_off_canvas = {
  name : 'vanillajs off canvas',
  
  version : '5.2.2x1',
  init : function(){
    if(typeof jQuery(document).foundation == 'undefined'){ 
      this.events();
    }
  },
  
  events : function(){
    var self = this;
    left_toggles=document.getElementsByClassName('left-off-canvas-toggle')
    if(left_toggles.length>0){
      left_toggles[0].onclick = function(e){
        obj=self.closest_wrap(e);
        self.click_toggle_class(obj, 'move-right');
      };
    }
    right_toggles=document.getElementsByClassName('right-off-canvas-toggle')
    if(right_toggles.length>0){
      right_toggles[0].onclick = function(e){
        obj=self.closest_wrap(e);
        self.click_toggle_class(obj, 'move-left');
      };
    }
    exit_elements=document.getElementsByClassName('exit-off-canvas')
    if(exit_elements.length>0){
      exit_elements[0].onclick = function(e){
        obj=self.closest_wrap(e);
        self.click_remove_class(obj, 'move-right');
        self.click_remove_class(obj, 'move-left');
      };
    }
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
