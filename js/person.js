'use strict';

const personDataLog = (person) => {
    if (typeof person.firstname === 'undefined'){
        person.firstname='john';
    }
    if (typeof person.lastname === 'undefined'){
        person.lastname='doe';
    }
    if (typeof person.age === 'undefined'){
        person.age=33;
    }
    return 'My name is '+person.firstname+' '+person.lastname+'. I\'m '+person.age+' years old.';
}