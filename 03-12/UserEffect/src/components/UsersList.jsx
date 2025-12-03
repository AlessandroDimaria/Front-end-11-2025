import {useState, useEffect} from "react";
export default function UsersList(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);
function formatAddress(address) {
  const { street, suite, city, zipcode } = address;
return `${street}, ${suite} — ${city} ${zipcode}`;
;
}


    return <div>
        {loading && "Caricamento in corso..."}
        {error && `Errore: ${error}`}
        {!loading && !error && users.map(user => {
            return <p key={user.id}>{user.name} {user.email} {formatAddress(user.address)}</p>;
        })}
    </div>;
}