'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the action 
 * Function to each value in the collection.
 * 
 * @param {Array or Object} collection The collection over which to iterate.
 * @param {Function} action The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    }
    else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Designed to take one argument and return it unchanged.
 * 
 * @param {Anything} value Value to be returned.
 */
function identity(value) {
    return value;
};
module.exports.identity = identity;

/**
 * typeOf: Designed to take one argument and return its type as a string.
 * 
 * @param {Anything} value The value whose type will be returned.
 */
function typeOf(value) {
    if (value === null) return 'null';
    if (value instanceof Date) return 'date';
    if (Array.isArray(value)) return 'array';
    return typeof value;
};
module.exports.typeOf = typeOf;

/**
 * first: Takes an Array and a Number argument and returns the first <Number> items
 * in the Array. 
 * 
 * @param {Array} array The array from which certain elements are returned.
 * @param {Number} n The number of elements to return starting at index[0].
 */
function first(array, n) {
    if (!Array.isArray(array) || n < 0) return [];
    if (n === undefined || typeof n !== 'number' || n === 1) return array[0];
    return array.slice(0, n);
};
module.exports.first = first;

/**
 * last: Takes an Array and a Number argument and returns the last <Number> items
 * in the Array.
 * 
 * @param {Array} array The array from which certain elements are returned.
 * @param {Number} n The number of elements to return from the end of the array.
 */
function last(array, n) {
    if (!Array.isArray(array)) {
        return [];
    }
    else if (n < 1) {
        return [];
    }
    else if (isNaN(n)) {
        return array[array.length - 1];
    }
    else if (n > array.length) {
        return array;
    }
    else {
        return array.slice(array.length - n);
    }
};
module.exports.last = last;

/**
 * indexOf: Returns the index number of a given value in a given array. Returns
 * -1 if the value is not found in the array.
 * 
 * @param {Array} array The array from which an index number is returned.
 * @param {Value} value The value that is searched for in the array, whose index
 * number is returned.
 */
function indexOf(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
};
module.export.indexOf = indexOf;

/**
 * filter: Applies a test Function to each element in an array, and returns a 
 * new array of the elements which returned True.
 * 
 * @param {Array} array The array whose elements are to be tested.
 * @param {Function} test The function that tests the individual elements, 
 * returning True or False.
 */
function filter(array, test) {
    var output = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i], i, array)) {
            output.push(array[i]);
        }
    }
    return output;
};
module.export.filter = filter;

/**
 * reject: Applies a test Function to each element in an array, and returns a 
 * new array of the elements which returned False.
 * 
 * @param {Array} array The array whose elements are to be tested.
 * @param {Function} test The function that tests the individual elements,
 * returning True or False.
 */
function reject(array, test) {
    var output = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i], i, array) === false) {
            output.push(array[i]);
        }
    }
    return output;
};
module.export.reject = reject;

/**
 * partition: Applies a test Function to each element in an array, and returns a
 * new array made up of two subarrays: An array for which all values of Function
 * returned something truthy, and an array for which all values of Function 
 * returned something falsey.
 * 
 * @param {Array} array The array whose elements are to be tested.
 * @param {Function} test The function that tests the individual elements,
 * returning True or False.
 */
function partition(array, test) {
    var truthy = [];
    var falsey = [];
    var output = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i], i, array)) {
            truthy.push(array[i]);
        }
        else {
            falsey.push(array[i]);
        }
    }
    output.push(truthy);
    output.push(falsey);
    return output;
};

module.export.partition = partition;

/**
 * unique: Takes an array argument and returns a new array with all duplicate
 * elements removed.
 *
 * @param {Array} array The array to be transformed into a new array, sans 
 * duplicates.
 */
function unique(array) {
    var noDups = []
    for (var i = 0; i < array.length; i++) {
        if (_.indexOf(noDups, array[i]) === -1) {
            noDups.push(array[i]);
        }
    }
    return noDups;
};
module.export.unique = unique;

/**
 * map: Loops over a collection and applies the transform Function to each value
 * in the collection, and returns the transformed values in a new array.
 * 
 * @param {Collection} array The collection to be iterated over.
 * @param {Function} transform The Function to be applied to each value in 
 * the collection.
 */
function map(array, transform) {
    const transformed = [];
    _.each(array, function(value, i, array) {
        transformed.push(transform(value, i, array));
    });
    return transformed;
};
module.export.map = map;

/**
 * pluck: Takes an Array of Objects and a Property argument, and returns a new 
 * array containing the value of the specified Property, for each element of the
 * Array.
 *
 * @param {Array} array The Array of Objects to be interated over.
 * @param {Property} prop The Object property whose values will be returned.
 */
function pluck(array, prop) {
    return _.map(array, function(object) {
        return object[prop];
    })
};
module.export.pluck = pluck;

/**
 * contains: Takes an Array and a Value argument, and returns True if Array
 * contains Value, and returns False otherwise.
 * 
 * @param {Array} array The Array to be tested.
 * @param {Value} value The Value that is searched for in the Array.
 */
function contains(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
};
module.export.contains = contains;

/**
 * every: Calls a test Function on each element of a collection and returns
 * True if the return value of test Function is true for every element, false
 * otherwise.
 * 
 * @param {Collection} collection The Array or Object to be tested.
 * @param {Function} test The Function applied to each element of the collection.
 */
function every(collection, test) {
    if (typeof(test) !== "function") test = _.identity;


    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if (test(collection[i], i, collection) === false) {
                return false;
            }
        }
    }
    else {
        for (var key in collection) {
            if (test(collection[key], key, collection) === false) {
                return false;
            }
        }
    }
    return true;
};
module.export.every = every;

/**
 * some: Calls a test Function on each element of a collection and returns
 * True if the return value of test Function is true for at least one
 * element, false otherwise.
 * 
 * @param {Collection} collection The Array or Object to be tested.
 * @param {Function} test The Function applied to each element of the collection.
 */
function some(collection, test) {

    if (typeof(test) !== "function") test = _.identity;

    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if (test(collection[i], i, collection)) {
                return true;
            }
        }
    }
    else {
        for (var key in collection) {
            if (test(collection[key], key, collection)) {
                return true;
            }
        }
    }
    return false;
};
module.export.some = some;

/**
 * reduce: Calls the argument Function for every element in a given Array,
 * using the previous element's return value as the Function's Seed argument;
 * after the last iteration, returns the return value of the final function call.
 * 
 * @param {Array} array The array to be iterated over.
 * @param {Function} action The Function to be applied to each element of 
 * the array.
 * @param {Seed} seed The first argument of the action Function (after the first
 * iteration, the previous element's return value will take the place of the Seed.)
 */
function reduce(array, action, seed) {
    if (seed === undefined) {
        seed = array[0];
        for (let i = 1; i < array.length; i++) {
            action(seed, array[i], i);
            seed = action(seed, array[i], i);
        }
        return seed;

    }
    for (let i = 0; i < array.length; i++) {
        action(seed, array[i], i);
        seed = action(seed, array[i], i);
    }
    return seed;
};
module.export.reduce = reduce;

/**
 * extend: Takes two or more Object arguments; copies the properties of each
 * Object to the first Object argument, and returns the updated first Object.
 * 
 * @param {Object} copyTo The Object that the following Object properties will
 * be copied to.
 * @param {Object} Object(s) whose properties will be 
 * copied to the first Object argument.
 */

function extend(copyTo) {
    var copyFromObjects = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < copyFromObjects.length; i++) {
        var copyFrom = copyFromObjects[i];
        for (var key in copyFrom) {
            copyTo[key] = copyFrom[key];
        }
    }
    return copyTo;
}
module.exports.extend = extend;
