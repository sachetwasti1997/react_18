const wrapPromise = (promise) => {
  let status = 'pending'
  let result;
  let suspender = promise.then(
    res => {
      status = 'success';
      result = res;
    },
    err => {
      status = 'failure';
      result = err;
    }
  )
  return {
    read(){
      if (status === 'pending'){
        throw suspender
      }else if (status === 'failure'){
        throw result
      }else if (status === 'success'){
        return result
      }
    }
  }
}
export default wrapPromise