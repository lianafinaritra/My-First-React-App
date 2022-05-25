
export default function TableHead(props){
    const {name, position, office, age, start_date, salary} = props;
    return (
        <tr>
            <th>{name}</th>
            <th>{position}</th>
            <th>{office}</th>
            <th>{age}</th>
            <th>{start_date}</th>
            <th>{salary}</th>
        </tr>
    );
}