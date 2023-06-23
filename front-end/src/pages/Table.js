import { useSortableData } from "../hooks/useSortableData";

export const Table = (props) => {
    const { users } = props;
    const { items, requestSort } = useSortableData(users);

    return (
    <table id="users">
      <thead>
        <tr>
          <th>
            <button type="button" onClick={() => requestSort('name')}>
              Name
            </button>
          </th>
          <th>
            <button type="button" onClick={() => requestSort('age')}>
              Age
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
          </tr>
        ))}
        </tbody>
    </table>
     );   
}

