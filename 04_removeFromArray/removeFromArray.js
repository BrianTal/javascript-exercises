const removeFromArray = function (...arg) {
    let array = arg[0];
    let updatedArray = [];
    array.forEach((each) => {
      if (!arg.includes(each)) {
        updatedArray.push(each);
      }
    });
    return updatedArray;
  };

// Do not edit below this line
module.exports = removeFromArray;
