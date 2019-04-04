// const person = {
    //   talk() {
    //     setTimeout(function() {
    //       console.log('this', this);
    //     }, 1000);
    //   }
    // };

    // person.talk();

    // const person = {
    //   talk() {
    //     var self = this;
    //     setTimeout(function() {
    //       console.log('self', self);
    //     }, 1000);
    //   }
    // };

    // person.talk();

    const person = {
        talk() {
          var self = this;
          setTimeout(() => {
            console.log("self", self);
          }, 1000);
        }
      };
  
      person.talk();
    //   console.log(person)