import api from "./api";
export const ACTION_TYPES={
    CREATE:'CREATE',
    UPDATE:"UPDATE",
    DELETE:"DELETE",
    FETCH_ALL:"FETCH_ALL"
}
export const fetchAll=()=>dispatch=>{
    api.company().fetchAll().then(res=>{
        console.log("res",res);
       dispatch({
         type: ACTION_TYPES.FETCH_ALL,
         payload: res.data,
       });  
    }).catch(err=>console.log(err))
}

export const create = (data, onSuccess) => (dispatch) => {
  api
    .company()
    .create(data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const update = (id, data, onSuccess) => (dispatch) => {
  api
    .company()
    .update(id, data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const Delete = (id, onSuccess) => (dispatch) => {
  api
    .company()
    .delete(id)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.DELETE,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};
