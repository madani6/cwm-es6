const person = {
    name: 'Mosh',
    walk() {},
    talk() {}
  };
  
  person.talk();
  person.name = '';
  
  const targetMember = 'name';
  person[targetMember.value] = 'John';

  console.log(person.talk)