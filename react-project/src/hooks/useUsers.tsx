import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import userService, { User } from "../services/user-service";

const useUsers=()=>{
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    //effect hook used to call server
    useEffect(() => {
      setLoading(true);
  
      const { request, cancel } = userService.getAll<User>();
      request
        .then((res) => {
          setUsers(res.data);
          setLoading(false);
        })
        .catch((e) => {
          if (e instanceof CanceledError) return;
          setError(e.message);
          setLoading(false);
        });
      return () => cancel();
    }, []);

    return {users, error, isLoading,setUsers,setError};
}

export default useUsers;