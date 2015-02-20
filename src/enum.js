

// Created by Jim Buck on 2/16/2015.

var Enum = function(){};

// Provides an easy method to check if a flag is set.
Object.defineProperty(Enum, 'hasFlag', {
  value: function (enumValue, flag) {
      return (enumValue & flag) == flag;
    }
});

// Used to create a new Enum.
Enum.extend = function (obj) {

  // Initialize our new enum object.
  var newEnum = new Enum();

  // Convert strings or an array of strings to an object.
  if (typeof obj === 'string' || obj instanceof Array) {
    var args = typeof obj === 'string' ? [].slice.call(arguments) : obj;
    obj = {};
    for (var i in args) {
      obj[args[i]] = i;
    }
  }

  // Specify the string/integer values.
  for (var txt in obj) {
    var val = obj[txt];

    Object.defineProperty(newEnum, txt, {
      value: val
    });
    
    Object.defineProperty(newEnum, val, {
      enumerable: true,
      value: txt
    });
  }

  return newEnum;
};