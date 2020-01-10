var object = {prop: 1};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}

updateObjectWithKeyAndValue(object, 'prop2', 2);

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

destructivelyUpdateObjectWithKeyAndValue(object, 'prop2', 2);

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

deleteFromObjectByKey(newObj, 1);

function destructivelyDeleteFromObjectByKey(object,key){
  delete object.key
  return object
}
