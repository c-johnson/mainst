(function () {

  var MainController = {

    init: function () {
      this.registerElements();
      this.registerEventHandlers();
    },

    registerElements: function () {
      this.lbContent = $('#lightboxContent');
      this.lbControls = $('#lightboxControls');
      this.lbImage = $('#lightboxContent img');
      this.lbCaption = $('#lightboxContent .lightbox-caption');
    },

    registerEventHandlers: function () {
      $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
      }); 
    }
  };

  $(function () {
    MainController.init();
  });

})();