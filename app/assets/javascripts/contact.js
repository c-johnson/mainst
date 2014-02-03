(function () {

  var MainController = {

    init: function () {
      this.registerElements();
      this.registerEventHanlders();
      this.clearErrors();
    },

    registerElements: function () {
      this.form = $('#contact-form');
      this.email = $('#email');
      this.name = $('#name');
      this.message = $('#message');
      this.errorBox = $('.error-box');
    },

    registerEventHanlders: function () {
      this.form.on('submit', function (evt) {
        this.clearErrors();
        var errs = this.validate();
        if (errs.length > 0) {
          this.showErrors(errs);
          evt.preventDefault();
        }
      }.bind(this));
    },

    clearErrors: function () {
      this.errorBox.empty();
      this.errorBox.hide();
    },

    showErrors: function (errs) {
      if (errs !== []) {
        errs.forEach(function (err) {
          this.errorBox.append('<li>'+ err +'</li>');
        }.bind(this));
      }

      this.errorBox.show();
    },

    validate: function () {
      var errs = [];

      if (this.email.val() === "") {
        errs.push("Email is required");
      }

      if (this.name.val() === "") {
        errs.push("Name is required");
      }

      if (this.message.val() === "") {
        errs.push("message is required");
      }

      return errs;
    },


  };

  $(function () {
    MainController.init();
  });

})();